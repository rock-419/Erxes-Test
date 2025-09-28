"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  return (
    <Card className="border rounded-2xl p-2 bg-blue-950 delay-100 hover:scale-105 transition-all w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <div className="flex justify-center">
        <Card.Img
          src={image}
          alt="Image"
          style={{ width: "140px", height: "140px", objectFit: "contain" }}
        />
      </div>
      <Card.Body>
        <div>
          <Card.Title className="font-extrabold text-white line-clamp-1">
            {title}
          </Card.Title>
          <Card.Text className="text-amber-300 font-bold">${price}</Card.Text>
        </div>
        <Card.Text className="text-gray-200 line-clamp-3">
          {description}
        </Card.Text>
        <Card.Text className="text-gray-400">Item Number {id}</Card.Text>
      </Card.Body>
      <div className="flex">
        <Button
          className="border px-4 py-2 w-1/2 rounded-2xl bg-white text-black font-bold hover:bg-gray-400 transition-all duration-150"
          style={{ fontSize: "1.1rem" }}
          onClick={() => {
            const item = { id, title, price, description, category, image };
            let favorites = [];
            if (typeof window !== "undefined") {
              const stored = localStorage.getItem("favorites");
              if (stored) favorites = JSON.parse(stored);
              if (!favorites.some((fav) => fav.id === id)) {
                favorites.push(item);
                localStorage.setItem("favorites", JSON.stringify(favorites));
              }
              alert("Added to favorites!");
            }
          }}
        >
          Favorite
        </Button>
        <Button
          style={{ fontSize: "1.1rem" }}
          className="border px-4 py-2 w-1/2 rounded-2xl bg-white text-black font-semibold hover:bg-gray-400 transition-all duration-150"
          onClick={() => (window.location.href = `/products/${id}`)}
        >
          More
        </Button>
      </div>
    </Card>
  );
}
