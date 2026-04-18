"use client";
import { createContext, useState, useContext } from "react";

const SearchContext = createContext({
  minPrice: 0,
  maxPrice: 1000,
  rooms: 1,
  setMinPrice: (value: number) => {},
  setMaxPrice: (value: number) => {},
  setRooms: (value: number) => {},
});

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [rooms, setRooms] = useState(1);
  return (
    <SearchContext.Provider value={{ minPrice, maxPrice, rooms, setMinPrice, setMaxPrice, setRooms }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}