import Link from "next/link";
import React from "react";
import { BiSolidCircle } from "react-icons/bi";
import { FaArrowLeft, FaHome, FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-orange-50 to-amber-50 px-4 py-10 sm:px-6 sm:py-12 md:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center justify-center">
        <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl shadow-orange-100 backdrop-blur sm:p-8 md:p-10 lg:p-12">
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-amber-200/50 blur-3xl"></div>

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-orange-400 to-amber-500 shadow-lg shadow-orange-200">
                  <BiSolidCircle className="h-7 w-7 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 sm:text-2xl">
                  SunCart
                </span>
              </Link>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                  Page not found
                </p>
                <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  404
                </h1>
                <p className="mx-auto max-w-xl text-sm leading-6 text-gray-600 sm:text-base lg:mx-0">
                  The page you&apos;re looking for does not exist, has been
                  moved, or may no longer be available. Try heading back to the
                  SunCart homepage to keep shopping.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200 transition hover:from-orange-600 hover:to-amber-600 hover:shadow-lg"
                >
                  <FaHome className="h-4 w-4" />
                  Go Home
                </Link>
                <Link
                  href="/Product"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-orange-600 shadow-sm transition hover:border-orange-300 hover:bg-orange-50"
                >
                  <FaArrowLeft className="h-4 w-4" />
                  Browse Products
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-full bg-linear-to-br from-orange-100 via-amber-50 to-white p-8 shadow-inner shadow-orange-100">
                <div className="absolute inset-6 rounded-full border border-orange-200/70"></div>
                <div className="absolute inset-12 rounded-full border border-amber-200/80"></div>
                <div className="relative flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-orange-100">
                    <FaSearch className="h-8 w-8 text-orange-500" />
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                    Lost in the catalog?
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-gray-600">
                    Find what you need from the homepage or go back to the
                    store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NotFound;
