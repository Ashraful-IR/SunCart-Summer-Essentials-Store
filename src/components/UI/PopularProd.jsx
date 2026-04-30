import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingBag } from "react-icons/fa";

const PopularProducts = ({ products = [] }) => {
  const top = products.slice(0, 3);

  return (
    <section className="container mx-auto text-black py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900">
          Popular Products
        </h2>
        <div className="mt-4 h-1 w-24 bg-linear-to-r from-orange-400 to-amber-500 mx-auto rounded-full"></div>
        <p className="mt-6 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto">
          Bestselling summer essentials loved by our community
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {top.map((product) => (
          <article
            key={product.id}
            className=" group relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-2xl shadow-orange-100/50 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/70 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-linear-to-br from-gray-100 to-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                height={224}
                width={300}
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-125 group-hover:rotate-1"
              />
            </div>

            {/* Content */}
            <div className="relative z-20 p-6 sm:p-7 flex flex-col gap-4 justify-between">
              {/* Product Name */}
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  {product.category}
                </p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {product.description}
                </p>
              </div>

              {/* Rating and Price Container */}
              <div className="flex flex-col justify-between items-start gap-3 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-gray-900">
                      {product.rating}
                    </span>
                    <span className="text-xs text-gray-500">Excellent</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 font-medium pb-1">
                    USD
                  </span>
                </div>

                {/* Button */}
                <Link
                  href={`/product/${product.id}`}
                  className="mt-4 group/btn flex items-center justify-center gap-2 w-full rounded-2xl bg-linear-to-r from-orange-400 to-amber-400 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200/60 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-xl hover:shadow-orange-300/70 active:scale-95"
                >
                  <FaShoppingBag className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                  View Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
