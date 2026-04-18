"use client";
import { useWishlist } from "@/context/WishlistContext";
import PropertyCard from "@/components/property/PropertyCard";
import properties from "@/data.json";

export default function Wishlist() {
    const { wishlist } = useWishlist();
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
            {wishlist.length === 0 ? (
                <p className="text-gray-600">Your wishlist is empty. Start adding properties you like!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wishlist.map((propertyId) => {
                        const property = properties.find((p) => p.id === propertyId);
                        return property ? <PropertyCard
                            key={property.id}
                            id={property.id}
                            city={property.city}
                            price={property.price}
                            days={property.days}
                            image={property.image}
                            rating={property.rating}
                        /> : null;
                    }
                    )}
                </div>
            )}
        </div>
    );
}
