"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import type { Icon } from "leaflet";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

type PropertyMapProps = {
    lat: number;
    lng: number;
    city: string;
    homename: string;
};

export default function PropertyMap({ lat, lng, city, homename }: PropertyMapProps) {
    const [icon, setIcon] = useState<Icon | null>(null);

    useEffect(() => {
        let mounted = true;

        import("leaflet").then((L) => {
            if (!mounted) return;

            setIcon(
                L.icon({
                    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                })
            );
        });

        return () => {
            mounted = false;
        };
    }, []);

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
        return (
            <div className="flex h-96 w-full items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Map location is unavailable for this property.
            </div>
        );
    }

    return (
        <div className="h-75 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
            <MapContainer
                center={[lat, lng]}
                zoom={12}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {icon && (
                    <Marker position={[lat, lng]} icon={icon}>
                        <Popup>
                            <span className="font-semibold">{homename}</span>
                            <br />
                            {city}
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
}