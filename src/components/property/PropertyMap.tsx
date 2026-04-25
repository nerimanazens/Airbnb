import data from "@/data.json";
import PropertyDetails from "@/components/property/PropertyDetails";
import PropertyMap from "@/components/property/PropertyMap";

export default function PropertyPage({ params }: { params: { id: string } }) {
    const property = data.find(p => p.id === Number(params.id));
    
    if (!property) return <h1>Not found</h1>;

    return (
        <div>
            <PropertyDetails homename={property.homename} description={property.description} rooms={property.rooms} maxGuests={property.maxGuests} />
        </div>
    );
}