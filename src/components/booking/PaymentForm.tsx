"use client";
import { useState } from "react";

export default function PaymentForm() {
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    return (
        <form className="flex flex-col">
            <label>Card Number:</label>
            <input className="border border-gray-300 rounded py-2 px-4" type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <label>Expiry Date:</label>
            <input className="border border-gray-300 rounded py-2 px-4" type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            <label>CVV:</label>
            <input className="border border-gray-300 rounded py-2 px-4" type="number" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </form>
    );
}