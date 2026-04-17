"use client";
import { useState } from "react";
import { Plus,Minus } from 'lucide-react';

export default function GuestSelector() {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    return (
        <div>
            <p>Adults</p>
            <button className="mr-2 bg-amber-100 text-2xl rounded-2xl" onClick={() => setAdults(Math.max(1, adults - 1))}>
                <Minus />
            </button>
            <span>{adults}</span>
            <button className="ml-2 bg-amber-100 text-2xl rounded-2xl" onClick={() => setAdults(adults + 1)}>
                <Plus />
            </button>
            <p>Children</p>
            <button className="mr-2 bg-amber-100 text-2xl rounded-2xl" onClick={() => setChildren(Math.max(0, children - 1))}>
                <Minus />
            </button>
            <span>{children}</span>
            <button className="ml-2 bg-amber-100 text-2xl rounded-2xl" onClick={() => setChildren(children + 1)}>
                <Plus />
            </button>
        </div>
    )
}