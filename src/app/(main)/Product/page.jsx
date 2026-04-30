import { getData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingBag } from "react-icons/fa";
import React from "react";
import ProductCard from "@/components/UI/ProductCard";

const Prodpage = async () => {
  const products = await getData();

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-orange-50 to-amber-50 px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Curated Collection
          </h1>
          <div className="mt-2 h-1 w-24 bg-linear-to-r from-orange-400 to-amber-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto">
            Discover premium summer essentials hand-picked for comfort and style
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Prodpage;
