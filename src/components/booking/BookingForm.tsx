"use client";
import GuestSelector from "@/components/booking/GuestSelector";
import DatePicker from "@/components/booking/DatePicker";
import PaymentForm from "@/components/booking/PaymentForm";
import { useBookingForm } from "@/hooks/useBookingForm";

export default function BookingForm() {
    const { currentStep, nextStep, prevStep } = useBookingForm();

    return (
        <div>
            <p>Step {currentStep}</p>


            {currentStep === 1 && <GuestSelector />}
            {currentStep === 2 && <DatePicker />}
            {currentStep === 3 && <PaymentForm />}

            {currentStep > 1 && (
                <button className="bg-gray-500 text-white px-2 rounded" onClick={prevStep}>Back</button>
            )}
            {currentStep < 3 && (
                <button className="bg-green-500 text-white px-2 rounded ml-2" onClick={nextStep}>Next</button>
            )}
        </div>
    );
} 