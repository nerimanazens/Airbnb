"use client";

import { useState } from "react";

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function PropertyGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative">
      <img src={images[currentIndex]} alt="Property" className="w-full rounded-xl" />
      
      <button onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full">
        <ArrowBigLeft />
      </button>

      <button onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full">
        <ArrowBigRight />
      </button>
    </div>
  );
}