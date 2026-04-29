import Link from "next/link";
import React from "react";
import { FaGoogle, FaFacebook, FaShieldAlt } from "react-icons/fa";
import {
  MdEmail,
  MdLock,
  MdPerson,
  MdImage,
  MdCheckCircle,
  MdLocalOffer,
  MdFavoriteBorder,
  MdCloudDownload,
} from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { BiSolidCircle } from "react-icons/bi";

const RegPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-orange-50 to-amber-50 py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="hidden lg:flex flex-col justify-center space-y-6 md:space-y-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                  <BiSolidCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">SunCart</h2>
              </Link>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Join Our Community
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Create an account to unlock exclusive benefits and start
                shopping your favorite summer essentials.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MdCheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Exclusive Deals
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Access member-only discounts up to 40% off
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MdLocalOffer className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Rewards Program
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Earn 5% cashback on every purchase
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MdFavoriteBorder className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Save Favorites
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Build wishlists and get alerts on price drops
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MdCloudDownload className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fast Shipping</h4>
                  <p className="text-gray-600 text-sm">
                    Free shipping on orders over $50
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-7 md:p-8 space-y-5 sm:space-y-6">
              <div className="lg:hidden text-center mb-4 sm:mb-6">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 mb-3 sm:mb-4"
                >
                  <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                    <BiSolidCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    SunCart
                  </h2>
                </Link>
              </div>

              <div className="text-center space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Create Account
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  Join thousands of happy shoppers
                </p>
              </div>

              <form className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <MdPerson className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Profile Photo URL
                  </label>
                  <div className="relative">
                    <MdImage className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <input
                      type="url"
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    Paste the link to your profile photo (JPG, PNG)
                  </p>
                </div>

                {/* <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <MdLock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <input
                      type="password"
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      placeholder="••••••••"
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    At least 8 characters with uppercase, lowercase & numbers
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <MdLock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <input
                      type="password"
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      placeholder="••••••••"
                    />
                  </div>
                </div> */}

                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer shrink-0"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs sm:text-sm text-gray-600 cursor-pointer"
                  >
                    I agree to the
                    <Link
                      href="/terms"
                      className="text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      Terms of Service
                    </Link>
                    and
                    <Link
                      href="/privacy"
                      className="text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer shrink-0"
                    defaultChecked
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-xs sm:text-sm text-gray-600 cursor-pointer"
                  >
                    Send me exclusive deals and updates
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg mt-4 sm:mt-6 text-sm sm:text-base"
                >
                  Create Account
                </button>
              </form>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-gray-500 text-xs font-medium">OR</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <button className="flex items-center justify-center gap-1 sm:gap-2 border border-gray-300 rounded-lg py-2 sm:py-2.5 hover:bg-gray-50 transition">
                  <FaFacebook className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:inline">
                    Facebook
                  </span>
                </button>
                <button className="flex items-center justify-center gap-1 sm:gap-2 border border-gray-300 rounded-lg py-2 sm:py-2.5 hover:bg-gray-50 transition">
                  <FaGoogle className="w-4 sm:w-5 h-4 sm:h-5 text-red-500" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:inline">
                    Google
                  </span>
                </button>
              </div>

              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <p className="text-center text-gray-600 text-xs sm:text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/LogIn"
                    className="text-orange-600 hover:text-orange-700 font-semibold transition"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <FaShieldAlt className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 shrink-0" />
                <span>Your data is encrypted and secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegPage;
