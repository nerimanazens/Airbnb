"use client";
import { useTheme } from "../../context/ThemeContext";


export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="mx-auto my-4 flex w-300 items-center justify-between rounded-2xl bg-white p-4 shadow transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
      <p className="text-2xl font-bold text-red-500">AirBnb</p>
      <ul className="flex space-x-4 text-xl font-bold">
        <li className="cursor-pointer rounded px-4 py-2 hover:bg-red-700 hover:text-white dark:hover:bg-red-700">Home</li>
        <li className="cursor-pointer rounded px-4 py-2 hover:bg-red-700 hover:text-white dark:hover:bg-red-700">Experience</li>
        <li className="cursor-pointer rounded px-4 py-2 hover:bg-red-700 hover:text-white dark:hover:bg-red-700">Service</li>
      </ul>
      <button onClick={toggleTheme} className="rounded bg-gray-200 p-2 text-sm hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 font-bold">
        {theme === "light" ? "Switch to dark" : "Switch to light"}
      </button>
    </nav>
  );
}