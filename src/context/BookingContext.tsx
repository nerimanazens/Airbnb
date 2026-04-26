"use client";
import { createContext, useContext, useReducer } from "react";

type BookingContextType = {
  checkIn: string;
  checkOut: string;
  adults: number;
  kids: number;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  setCheckIn: (value: string) => void;
  setCheckOut: (value: string) => void;
  setAdults: (value: number) => void;
  setKids: (value: number) => void;
  setCardNumber: (value: string) => void;
  setExpiryDate: (value: string) => void;
  setCvv: (value: string) => void;
  resetBooking: () => void;
};

type BookingState = {
  checkIn: string;
  checkOut: string;
  adults: number;
  kids: number;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

type BookingAction =
  | { type: "SET_CHECK_IN"; payload: string }
  | { type: "SET_CHECK_OUT"; payload: string }
  | { type: "SET_ADULTS"; payload: number }
  | { type: "SET_KIDS"; payload: number }
  | { type: "SET_CARD_NUMBER"; payload: string }
  | { type: "SET_EXPIRY_DATE"; payload: string }
  | { type: "SET_CVV"; payload: string }
  | { type: "RESET_BOOKING" };

const initialBookingState: BookingState = {
  checkIn: "",
  checkOut: "",
  adults: 1,
  kids: 0,
  cardNumber: "",
  expiryDate: "",
  cvv: "",
};

function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case "SET_CHECK_IN":
      return { ...state, checkIn: action.payload };
    case "SET_CHECK_OUT":
      return { ...state, checkOut: action.payload };
    case "SET_ADULTS":
      return { ...state, adults: action.payload };
    case "SET_KIDS":
      return { ...state, kids: action.payload };
    case "SET_CARD_NUMBER":
      return { ...state, cardNumber: action.payload };
    case "SET_EXPIRY_DATE":
      return { ...state, expiryDate: action.payload };
    case "SET_CVV":
      return { ...state, cvv: action.payload };
    case "RESET_BOOKING":
      return initialBookingState;
    default:
      return state;
  }
}

const BookingContext = createContext<BookingContextType>({
  checkIn: "",
  checkOut: "",
  adults: 1,
  kids: 0,
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  setCheckIn: () => { },
  setCheckOut: () => { },
  setAdults: () => { },
  setKids: () => { },
  setCardNumber: () => { },
  setExpiryDate: () => { },
  setCvv: () => { },
  resetBooking: () => { },
});

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);

  const setCheckIn = (value: string) => dispatch({ type: "SET_CHECK_IN", payload: value });
  const setCheckOut = (value: string) => dispatch({ type: "SET_CHECK_OUT", payload: value });
  const setAdults = (value: number) => dispatch({ type: "SET_ADULTS", payload: value });
  const setKids = (value: number) => dispatch({ type: "SET_KIDS", payload: value });
  const setCardNumber = (value: string) => dispatch({ type: "SET_CARD_NUMBER", payload: value });
  const setExpiryDate = (value: string) => dispatch({ type: "SET_EXPIRY_DATE", payload: value });
  const setCvv = (value: string) => dispatch({ type: "SET_CVV", payload: value });

  const resetBooking = () => {
    dispatch({ type: "RESET_BOOKING" });
  };

  return (
    <BookingContext.Provider
      value={{
        checkIn: state.checkIn,
        checkOut: state.checkOut,
        adults: state.adults,
        kids: state.kids,
        cardNumber: state.cardNumber,
        expiryDate: state.expiryDate,
        cvv: state.cvv,
        setCheckIn,
        setCheckOut,
        setAdults,
        setKids,
        setCardNumber,
        setExpiryDate,
        setCvv,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}