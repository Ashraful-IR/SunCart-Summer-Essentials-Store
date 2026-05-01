"use client";

import Link from "next/link";
import React from "react";
import { BiSolidCircle } from "react-icons/bi";
import { FaShieldAlt } from "react-icons/fa";
import { Fa0, FaFacebook, FaGoogle } from "react-icons/fa6";
import TextField from "@/components/UI/TextField";

const LogPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-orange-50 to-amber-50 flex items-center justify-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center justify-center">
          <div className="hidden lg:flex flex-col justify-center space-y-6 md:space-y-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6 md:mb-8">
                <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                  <BiSolidCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                  SunCart
                </h2>
              </Link>
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Your Summer Shopping Destination
              </h3>
              <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">
                Discover exclusive deals on summer essentials, stylish swimwear,
                and outdoor gear.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-7 md:w-8 h-7 md:h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-900">
                    Fast Checkout
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Save your details for quick repeat orders
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-7 md:w-8 h-7 md:h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <FaShieldAlt className="w-4 md:w-5 h-4 md:h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-900">
                    Secure Payments
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    SSL encrypted & trusted payment methods
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-7 md:w-8 h-7 md:h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-900">
                    Free Shipping
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    On orders over $50 - Track in real-time
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-7 md:w-8 h-7 md:h-8 bg-amber-100 rounded-full flex items-center justify-center shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-900">
                    Earn Rewards
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Points on every purchase you can redeem
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-7 md:p-8 space-y-5 sm:space-y-6">
              <div className="lg:hidden text-center mb-4 sm:mb-6">
                <Link
                  href="/"
                  className="flex justify-center items-center gap-2 mb-4 sm:mb-6"
                >
                  <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                    <BiSolidCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    SunCart
                  </h2>
                </Link>
              </div>

              <div className="text-center space-y-1 sm:space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Welcome Back!
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  Sign in to continue shopping
                </p>
              </div>

              <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <TextField isRequired name="email" type="email">
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      placeholder="you@example.com"
                    />
                  </div>
                </TextField>

                <TextField isRequired name="password" type="password">
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      placeholder="••••••••"
                    />
                  </div>
                </TextField>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs sm:text-sm">
                  <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer shrink-0"
                    />
                    <span>Remember me</span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg mt-4 sm:mt-6 text-sm sm:text-base"
                >
                  Sign In
                </button>
              </form>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-gray-500 text-xs font-medium">OR</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <button className="flex items-center justify-center gap-1.5 sm:gap-2 border border-gray-300 rounded-lg py-2 sm:py-2.5 hover:bg-gray-50 transition">
                  <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-black">
                    <FaFacebook color="blue" size={16} />{" "}
                    <span className="hidden sm:inline">Facebook</span>
                  </span>
                </button>
                <button className="flex items-center justify-center gap-1.5 sm:gap-2 border border-gray-300 rounded-lg py-2 sm:py-2.5 hover:bg-gray-50 transition">
                  <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-black">
                    <FaGoogle color="red" size={16} />{" "}
                    <span className="hidden sm:inline">Google</span>
                  </span>
                </button>
              </div>

              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <p className="text-center text-gray-600 text-xs sm:text-sm">
                  Don&apos;t have an account?
                  <Link
                    href="/Registration"
                    className="text-orange-600 hover:text-orange-700 font-semibold transition"
                  >
                    Create one now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogPage;
