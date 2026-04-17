"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import properties from "@/data.json";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
});

export default function PropertyMap() {
    return (
        <MapContainer center={[properties[0].lat, properties[0].lng]} zoom={1} style={{ height: "400px", width: "400px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            <Marker position={[properties[0].lat, properties[0].lng]} icon={icon} />
            <Marker position={[properties[1].lat, properties[1].lng]} icon={icon} />
            <Marker position={[properties[2].lat, properties[2].lng]} icon={icon} />
        </MapContainer>
    );
}