"use client";
import { useMemo, useState } from "react";
import GuestSelector from "@/components/booking/GuestSelector";
import DatePicker from "@/components/booking/DatePicker";
import PaymentForm from "@/components/booking/PaymentForm";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { useBooking } from "@/context/BookingContext";
import { useBookingForm } from "@/hooks/useBookingForm";

export default function BookingForm() {
    const { currentStep, nextStep, prevStep } = useBookingForm();
    const { checkIn, checkOut, adults, kids, cardNumber, expiryDate, cvv, resetBooking } = useBooking();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const totalGuests = useMemo(() => adults + kids, [adults, kids]);

    const validateStep = (step: number) => {
        if (step === 1) {
            if (adults < 1) return "At least 1 adult is required.";
            if (kids < 0) return "Children count cannot be negative.";
            if (totalGuests < 1) return "Please add at least one guest.";
        }

        if (step === 2) {
            if (!checkIn || !checkOut) return "Please select both check-in and check-out dates.";

            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (checkInDate < today) return "Check-in date cannot be in the past.";
            if (checkOutDate <= checkInDate) return "Check-out must be after check-in.";
        }

        if (step === 3) {
            if (!/^\d{16}$/.test(cardNumber)) return "Card number must be 16 digits.";
            if (!/^\d{3,4}$/.test(cvv)) return "CVV must be 3 or 4 digits.";
            if (!expiryDate) return "Please select a card expiry date.";

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
        }

        return "";
    };

    const handleNext = () => {
        const validationError = validateStep(currentStep);
        if (validationError) {
            setError(validationError);
            setSuccess("");
            return;
        }
        setError("");
        nextStep();
    };

    const handleConfirm = async () => {
        const validationError = validateStep(3);
        if (validationError) {
            setError(validationError);
            setSuccess("");
            return;
        }

        setError("");
        setSuccess("");
        setIsSubmitting(true);

        try {
            // Simulate booking API request.
            await new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    if (cardNumber.endsWith("0000")) {
                        reject(new Error("Payment was declined. Please use another card."));
                        return;
                    }
                    resolve();
                }, 1200);
            });

            setSuccess("Booking confirmed successfully.");
            resetBooking();
        } catch (submitError) {
            const message = submitError instanceof Error ? submitError.message : "Unable to complete booking. Please try again.";
            setError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <p className="mb-3 font-semibold">Step {currentStep} of 3</p>


            {currentStep === 1 && <GuestSelector />}
            {currentStep === 2 && <DatePicker />}
            {currentStep === 3 && <PaymentForm />}

            {error && (
                <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {error}
                </p>
            )}
            {success && (
                <p className="mt-3 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                    {success}
                </p>
            )}

            <div className="flex w-fit mx-auto mt-4 gap-4">
                {currentStep > 1 && (
                    <button className="bg-gray-500 text-white px-2 rounded disabled:opacity-50" onClick={prevStep} disabled={isSubmitting}>Back</button>
                )}
                {currentStep < 3 && (
                    <button className="bg-green-500 text-white px-2 rounded ml-2 disabled:opacity-50" onClick={handleNext} disabled={isSubmitting}>Next</button>
                )}
                {currentStep === 3 && (
                    <button className="bg-blue-500 text-white px-2 rounded ml-2 disabled:opacity-50" onClick={handleConfirm} disabled={isSubmitting}>
                        {isSubmitting ? "Confirming..." : "Confirm"}
                    </button>
                )}

            </div>
            {isSubmitting && <div className="mt-3"><LoadingSpinner /></div>}
        </div>
    );
} 