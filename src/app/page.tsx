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
import Wishlist from "@/components/user/Wishlist";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-6`}>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-red-500">airbnb</h1>
        <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>

      {/* Search */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Search Properties</h2>
        <SearchFilters />
      </div>

      {/* Results + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SearchResults />
        <MapViews />
      </div>

      {/* Property Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <PropertyGallery images={properties.map((p) => p.image)} />
          <PropertyDetails
            homename={properties[0].homename}
            description={properties[0].description}
            rooms={properties[0].rooms}
            maxGuests={properties[0].maxGuests}
          />
        </div>
        <BookingForm />
      </div>

      {/* Reviews */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {properties[0].reviews.map((review) => (
            <PropertyReviews
              key={review.id}
              reviewername={review.reviewername}
              reviewstars={review.reviewstars}
              reviewtext={review.reviewtext}
              reviewdate={review.reviewdate}
            />
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Location</h2>
        <PropertyMap lat={properties[0].lat} lng={properties[0].lng} />
      </div>

      {/* Wishlist */}
      <div className="mb-8">
        <Wishlist />
      </div>

    </div>
  );
}