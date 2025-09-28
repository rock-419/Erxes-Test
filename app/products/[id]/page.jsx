"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product)
    return (
      <div
        className="flex justify-center items-center font-bold"
        style={{ fontSize: "1.5rem" }}
      >
        Product is now loading...
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card
        className="border rounded-2xl p-5 bg-blue-950 delay-100 hover:scale-105 transition-all"
        style={{ width: "35rem" }}
      >
        <div className="flex justify-center">
          <Card.Img
            src={product.image}
            alt="Image"
            style={{ width: "300px", height: "300px", objectFit: "contain" }}
          />
        </div>
        <Card.Body>
          <div>
            <Card.Title
              style={{ fontSize: "1.2rem" }}
              className="font-extrabold text-white"
            >
              {product.title}
            </Card.Title>
            <Card.Text className="text-amber-300 font-bold">
              ${product.price}
            </Card.Text>
          </div>
          <Card.Text className="text-gray-200">{product.description}</Card.Text>
          <Card.Text className="text-gray-400">
            Item Number {product.id}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
