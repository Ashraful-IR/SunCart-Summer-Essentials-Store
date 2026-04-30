import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaShoppingBag, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    return (
        <div
              key={product.id}
              className="group relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-2xl shadow-orange-100/50 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/70 hover:-translate-y-2"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/40 pointer-events-none z-10"></div>

              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-linear-to-br from-gray-100 to-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="h-full w-full object-contain transition-all duration-700 group-hover:scale-125 group-hover:rotate-1"
                />
                
                {/* Brand Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg shadow-orange-100/50">
                  <p className="text-xs font-semibold text-orange-600 tracking-widest uppercase">
                    {product.brand}
                  </p>
                </div>

                {/* Stock Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <p className="text-xs font-semibold text-white">In Stock</p>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-20 p-6 sm:p-7 flex flex-col h-64 justify-between">
                {/* Product Name */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {product.category}
                  </p>
                </div>

                {/* Rating and Price Container */}
                <div className="space-y-4">
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
                    <span className="text-sm text-gray-500 font-medium pb-1">USD</span>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/product/${product.id}`}
                    className="mt-4 group/btn flex items-center justify-center gap-2 w-full rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200/60 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-xl hover:shadow-orange-300/70 active:scale-95"
                  >
                    <FaShoppingBag className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    View Details
                  </Link>
                </div>
              </div>
            </div>
    );
};

export default ProductCard;