"use client";
import { useState } from "react";

export default function DataPicker() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    return (
        <form className="flex flex-col">
            <label>Check-in:</label>
            <input className="border border-gray-300 rounded py-2 px-4" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
            <label>Check-out:</label>
            <input className="border border-gray-300 rounded py-2 px-4" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        </form>
    )
}