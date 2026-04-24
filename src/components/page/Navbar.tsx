"use client";
import { useTheme } from "../../context/ThemeContext";


export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-white  shadow flex items-center justify-between p-4 w-300 mx-auto rounded-2xl my-4">
        <p className="text-2xl text-red-500 font-bold">AirBnb</p>
        <ul className="flex space-x-4 text-xl font-bold">
            <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-red-700 hover:text-white rounded cursor-pointer">Home</li>
            <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-red-700 hover:text-white rounded cursor-pointer">Experience</li>
            <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-red-700 hover:text-white rounded cursor-pointer">Service</li>
        </ul>
        <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
          {theme === "light" ? "Dark" : "Light"}
        </button>
    </nav>
    );
}