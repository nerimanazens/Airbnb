import { useState } from "react";
import properties from "@/data.json";

export function usePropertySearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProperties = properties.filter((property) =>
        property.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return { searchTerm, setSearchTerm, filteredProperties };
}