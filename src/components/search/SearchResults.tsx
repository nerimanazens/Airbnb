"use client";
import { useMemo } from "react";
import properties from "@/data.json";
import { useSearch } from "@/context/SearchContext";
import PropertyCard from "@/components/property/PropertyCard";

export default function SearchResults() {
  const { minPrice, maxPrice, rooms } = useSearch();

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      return (
        p.price >= minPrice &&
        p.price <= maxPrice &&
        p.rooms >= rooms
      );
    });
  }, [minPrice, maxPrice, rooms]);

  if (filteredProperties.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProperties.map((property) => (
        <PropertyCard
          key={property.id}
          city={property.city}
          price={property.price}
          days={property.days}
          image={property.image}
          rating={property.rating}
        />
      ))}
    </div>
  );
}