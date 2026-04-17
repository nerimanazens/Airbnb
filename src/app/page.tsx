import properties from "@/data.json";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyDetails from "@/components/property/PropertyDetails";
import PropertyMap from "@/components/property/PropertyMap";
import PropertyReviews from "@/components/property/PropertyReviews";

const reviews = properties.map((p) => p.reviews).flat();
console.log(reviews);

export default function Home() {
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
      <PropertyGallery images={properties.map((p) => p.images).flat()} />
      <PropertyDetails
        homename={properties[0].homename}
        description={properties[0].description}
        rooms={properties[0].rooms}
        maxGuests={properties[0].maxGuests}
      />
      <PropertyMap lat={properties[0].lat} lng={properties[0].lng} />
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
  );
} 
