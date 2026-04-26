"use client";
import { createContext, useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";


const WishlistContext = createContext({
    wishlist: [] as number[],
    addToWishlist: (id: number) => { },
    removeFromWishlist: (id: number) => { },
});

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [wishlist, setWishlist] = useLocalStorage<number[]>("wishlist", []);

    const addToWishlist = (id: number) => {
        setWishlist((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }

    const removeFromWishlist = (id: number) => {
        setWishlist((prev) => prev.filter((item) => item !== id));
    }

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}