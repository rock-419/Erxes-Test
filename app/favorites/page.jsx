"use client";

import ProductCard from "@/components/card";

import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    }
  }, []);

  if (!isClient) return null;
  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center mt-10">
        <div className="mb-4 text-center">No favorites yet, Go to here.</div>
        <Button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          onClick={() => (window.location.href = "/")}
        >
          Go to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
