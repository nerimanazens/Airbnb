"use client";
import { useBooking } from "@/context/BookingContext";

export default function PaymentForm() {
    const { cardNumber, expiryDate, cvv, setCardNumber, setExpiryDate, setCvv } = useBooking();

    return (
        <form className="flex flex-col">
            <label>Card Number:</label>
            <input
                className="border border-gray-300 rounded py-2 px-4"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                placeholder="1234123412341234"
                inputMode="numeric"
            />
            <label>Expiry Date:</label>
            <input className="border border-gray-300 rounded py-2 px-4" type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            <label>CVV:</label>
            <input
                className="border border-gray-300 rounded py-2 px-4"
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                placeholder="123"
                inputMode="numeric"
            />
        </form>
    );
}