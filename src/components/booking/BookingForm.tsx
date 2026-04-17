"use client";
import { useState } from "react";
import GuestSelector from "@/components/booking/GuestSelector";
import DatePicker from "@/components/booking/DatePicker";
import PaymentForm from "@/components/booking/PaymentForm";

export default function BookingForm() {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div>
            <p>Step {currentStep}</p>


            {currentStep === 1 && <GuestSelector />}
            {currentStep === 2 && <DatePicker />}
            {currentStep === 3 && <PaymentForm />}

            {currentStep > 1 && (
                <button className="bg-gray-500 text-white px-2 rounded" onClick={() => setCurrentStep((prev) => prev - 1)}>Back</button>

            )}
            {currentStep < 3 && (
                <button className="bg-green-500 text-white px-2 rounded ml-2" onClick={() => setCurrentStep((prev) => prev + 1)}>Next</button>
            )}


        </div>
    );
} 