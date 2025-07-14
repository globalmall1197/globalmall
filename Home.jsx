import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Global Mall</h1>
      <p className="mb-4">Shop the best products at the best prices.</p>
      <Link to="/products" className="text-blue-500 underline">
        View Products
      </Link>
    </div>
  );
}