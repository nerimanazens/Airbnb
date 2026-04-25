"use client";
import SearchFilters from "@/components/search/SearchFilters";
import SearchResults from "@/components/search/SearchResults";
import Wishlist from "@/components/user/Wishlist";

export default function Home() {

  return (
    <div className={`min-h-screen p-6`}>
        <SearchFilters />
        <SearchResults />
      <div className="mb-8">
        <Wishlist />
      </div>
    </div>
  );
}