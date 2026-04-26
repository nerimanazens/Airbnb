"use client";
import { Plus, Minus } from 'lucide-react';
import { useBooking } from "@/context/BookingContext";

export default function GuestSelector() {
    const { adults, kids, setAdults, setKids } = useBooking();
    return (
        <div className="mx-auto ">
            <p>Adults</p>
            <button className="mr-2 bg-amber-100 text-2xl rounded-2xl" onClick={() => setAdults(Math.max(1, adults - 1))}>
                <Minus />
            </button>
            <span>{adults}</span>
            <button className="ml-2 bg-amber-100 text-2xl rounded-2xl" onClick={() => setAdults(adults + 1)}>
                <Plus />
            </button>
            <p>Children</p>
            <button className="mr-2 bg-amber-100 text-2xl rounded-2xl" onClick={() => setKids(Math.max(0, kids - 1))}>
                <Minus />
            </button>
            <span>{kids}</span>
            <button className="ml-2 bg-amber-100 text-2xl rounded-2xl" onClick={() => setKids(kids + 1)}>
                <Plus />
            </button>
        </div>
    )
}