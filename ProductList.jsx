import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "₹15,000" },
  { id: 2, name: "Headphones", price: "₹1,500" },
  { id: 3, name: "Shoes", price: "₹2,200" }
];

export default function ProductList() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="border p-4 rounded shadow hover:shadow-lg">
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}