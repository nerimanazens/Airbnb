"use client";

import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function PropertyGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images?.length) {
    return <p className="mt-4 text-sm text-gray-600">No images available for this property.</p>;
  }

  const currentImage = images[currentIndex];
  const normalizedSrc =
    currentImage.startsWith("http://") ||
    currentImage.startsWith("https://") ||
    currentImage.startsWith("/")
      ? currentImage
      : `/${currentImage}`;

  return (
    <div className="relative mt-4 w-200 max-w-3xl">
      <img
        src={normalizedSrc}
        alt="Property"
        className="h-96 w-full rounded-xl object-cover"
      />
      
      <button onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full">
        <ArrowBigLeft />
      </button>

      <button onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full">
        <ArrowBigRight />
      </button>
    </div>
  );
}