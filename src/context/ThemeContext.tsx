"use client";
import { createContext, useState } from "react";
import { useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
}); 

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}