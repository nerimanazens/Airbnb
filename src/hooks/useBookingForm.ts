import { useState } from "react";

export function useBookingForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    return { currentStep, nextStep, prevStep };
}