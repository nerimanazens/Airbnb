"use client";

import { useState } from "react";

export default function SearchFilters() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [rooms, setRooms] = useState(1);
    return (
        <div>
            <label>Min Price:</label>
            <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} />

            <label>Max Price:</label>
            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />

            <label>Rooms:</label>
            <input type="number" value={rooms} onChange={(e) => setRooms(Number(e.target.value))} />
        </div>
    )
}