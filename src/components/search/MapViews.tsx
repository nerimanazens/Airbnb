"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import properties from "@/data.json";
import { useSearch } from "@/context/SearchContext";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
});

export default function PropertyMap() {
  const { minPrice, maxPrice, rooms } = useSearch();

  const filtered = properties.filter((p) => {
    return (
      p.price >= minPrice &&
      p.price <= maxPrice &&
      p.rooms >= rooms
    );
  });

  return (
    <MapContainer
      center={[filtered[0]?.lat || 0, filtered[0]?.lng || 0]}
      zoom={2}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filtered.map((p) => (
        <Marker
          key={p.id}
          position={[p.lat, p.lng]}
          icon={icon}
        />
      ))}
    </MapContainer>
  );
}