"use client";

import { MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function PropertyMap({ lat, lng }: { lat: number, lng: number }) {
  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: "400px", width: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      <Marker position={[lat, lng]}>

      </Marker>
    </MapContainer>
  );  
}