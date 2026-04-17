  "use client";

  import { useState } from "react";
  import { Heart } from "lucide-react";


  export default function PropertyCard({ city, price, days, image,rating }: { city: string, price: number, days: number, image: string, rating: number }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
      <div className="max-w-75 rounded-lg relative">
        <img src={image} alt="Description" className="rounded-4xl"/>
        <button onClick={() => setIsFavorite(!isFavorite)}  className="absolute top-6 right-6">
          <Heart fill={isFavorite ? "red" : "none"} color={isFavorite ? "red" : "gray"} />
        </button>
        <p className="ml-2 font-bold">Apartment in {city}</p>
        <span className="ml-2 font-bold text-[#656464]">{price}$ per {days} nights</span>
        <span className="ml-2">Rating: {rating}/5</span>
      </div>
    )
  }