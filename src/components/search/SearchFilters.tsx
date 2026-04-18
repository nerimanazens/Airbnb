"use client";

import { useState } from "react";
import { useSearch } from "@/context/SearchContext";

export default function SearchFilters() {
    const { minPrice, maxPrice, rooms, setMinPrice, setMaxPrice, setRooms } = useSearch();
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