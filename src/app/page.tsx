"use client";
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
import Navbar from "@/components/page/Navbar";

export default function Home() {

  return (
    <div className={`min-h-screen p-6`}>
        <SearchFilters />
        <SearchResults />

      {/* Wishlist */}
      <div className="mb-8">
        <Wishlist />
      </div>

    </div>
  );
}