"use client";

import { useSearch } from "@/context/SearchContext";
export default function SearchFilters() {
    const { minPrice, maxPrice, rooms, setMinPrice, setMaxPrice, setRooms } = useSearch();
    return (
        <div className="flex mx-auto w-270 gap-3 items-center  ">

            <p className="text-xl font-bold bg-red-500 text-white rounded-2xl px-2.5">Filters:</p>
            <div className="bg-white text-slate-900 shadow py-2 px-1 rounded-xl flex gap-1 dark:bg-slate-800 dark:text-slate-100">
                <label className="text-xl font-bold">Min Price:</label>
                <input type="text" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="border rounded-xl border-gray-300 bg-white text-slate-900 p-0.5 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />

                <label className="text-xl font-bold ml-1">Max Price:</label>
                <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="border rounded-xl border-gray-300 bg-white text-slate-900 p-0.5 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />

                <label className="text-xl font-bold ml-1">Rooms:</label>
                <input type="text" value={rooms} onChange={(e) => setRooms(Number(e.target.value))} className="border rounded-xl border-gray-300 bg-white text-slate-900 p-0.5 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
            </div>
        </div>
    )
}