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

const reviews = properties.map((p) => p.reviews).flat();
console.log(reviews);

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <SearchFilters />
      <SearchResults properties={properties} />
      <MapViews />
      <SavedSearches />
      <PropertyGallery images={properties.map((p) => p.images).flat()} />
      <PropertyDetails
        homename={properties[0].homename}
        description={properties[0].description}
        rooms={properties[0].rooms}
        maxGuests={properties[0].maxGuests}
      />
      <PropertyMap lat={properties[0].lat} lng={properties[0].lng} />
      {
        properties[0].reviews.map((review) => (
          <PropertyReviews
            key={review.id}
            reviewername={review.reviewername}
            reviewstars={review.reviewstars}
            reviewtext={review.reviewtext}
            reviewdate={review.reviewdate}
          />
        ))
      }
      <BookingForm />
    </div >

  );
} 
