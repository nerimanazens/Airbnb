import PropertyDetails from "@/components/property/PropertyDetails";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyMap from "@/components/property/PropertyMap";
import BookingForm from "@/components/booking/BookingForm";

import data from "@/data.json";

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const propertyId = Number(id);
    const property = data.find((p) => p.id === propertyId);

    if (!property) return <h1>Not found</h1>;

    return (
        <div className="w-300 mx-auto ">
            <div className="flex gap-4">
                <PropertyGallery images={property.images} />
                <PropertyDetails homename={property.homename} description={property.description} rooms={property.rooms} maxGuests={property.maxGuests} />
            </div>
            <div className="mt-6">
                <h2 className="mb-3 text-2xl font-bold">Location</h2>
                <PropertyMap
                    lat={property.lat}
                    lng={property.lng}
                    city={property.city}
                    homename={property.homename}
                />
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <h2 className="mb-3 text-2xl font-bold">Book this property</h2>
                <BookingForm />
            </div>

        </div>
    );
}