"use client";

import { useState } from "react";
import { useSearch } from "@/context/SearchContext";

export default function SearchFilters() {
    const { minPrice, maxPrice, rooms, setMinPrice, setMaxPrice, setRooms } = useSearch();
    return (
        <div>
            <label className="text-xl font-bold">Min Price:</label>
            <input type="text" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="border h-8 rounded-2xl border-gray-400 p-4"/>

            <label className="text-xl font-bold">Max Price:</label>
            <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="border h-8 rounded-2xl border-gray-400 p-4"/>

            <label className="text-xl font-bold">Rooms:</label>
            <input type="text" value={rooms} onChange={(e) => setRooms(Number(e.target.value))} className="border h-8 rounded-2xl border-gray-400 p-4   "/>
        </div>
    )
}