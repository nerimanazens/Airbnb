import PropertyCard from "@/components/property/PropertyCard";

type Property = {
  id: number;
  city: string;
  price: number;
  days: number;
  image: string;
  rating: number;
}

export default function SearchResults({ properties }: { properties: Property[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
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