"use client";
import {createContext, useContext, useState} from "react";


const WishlistContext = createContext({
    wishlist: [] as number[],
    addToWishlist: (id: number) => {},
    removeFromWishlist: (id: number) => {},
});

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [wishlist, setWishlist] = useState<number[]>([]);

    const addToWishlist = (id: number) => {
        setWishlist((prev) => [...prev, id]);
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