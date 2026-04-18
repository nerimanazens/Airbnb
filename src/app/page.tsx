"use client";
import { useTheme } from "@/context/ThemeContext";
import properties from "@/data.json";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyDetails from "@/components/property/PropertyDetails";
import PropertyMap from "@/components/property/PropertyMap";
import PropertyReviews from "@/components/property/PropertyReviews";
import BookingForm from "@/components/booking/BookingForm";
import SearchFilters from "@/components/search/SearchFilters";
import SearchResults from "@/components/search/SearchResults";
import MapViews from "@/components/search/MapViews";
import SavedSearches from "@/components/search/SavedSearches";
import GuestSelector from "@/components/booking/GuestSelector";
import DatePicker from "@/components/booking/DatePicker";

const reviews = properties.map((p) => p.reviews).flat();
console.log(reviews);

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full relative`}>
      <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-700 w-32 absolute top-0 left-0 m-4">
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <SearchFilters />
      <SearchResults />
      <MapViews />
    </div >

  );
} 
