import PropertyDetails from "@/components/property/PropertyDetails";
import PropertyGallery from "@/components/property/PropertyGallery";

import data from "@/data.json";

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const propertyId = Number(id);
    const property = data.find((p) => p.id === propertyId);

    if (!property) return <h1>Not found</h1>;

    return (
        <div className="w-300 mx-auto">
            <div className="flex ">
                <PropertyGallery images={property.images} />
                <PropertyDetails homename={property.homename} description={property.description} rooms={property.rooms} maxGuests={property.maxGuests} />
            </div>
        </div>
    );
}