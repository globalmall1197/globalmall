import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Product Detail</h2>
      <p>Showing details for product ID: {id}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Add to Cart</button>
    </div>
  );
}