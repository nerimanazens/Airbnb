"use client";
import { createContext, useState, useContext } from "react";

const BookingContext = createContext({
  checkIn: "",
  checkOut: "",
  adults: 1,
  kids: 0,
  setCheckIn: (value: string) => {},
  setCheckOut: (value: string) => {},
  setAdults: (value: number) => {},
  setKids: (value: number) => {},
});

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  return (
    <BookingContext.Provider value={{ checkIn, checkOut, adults, kids, setCheckIn, setCheckOut, setAdults, setKids }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}