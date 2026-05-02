"use client";

import { authClient } from "../../../lib/auth-client";
import React from "react";
import Image from "next/image";
import { BiSolidCircle } from "react-icons/bi";
import {
  FaRegEnvelope,
  FaRegEdit,
  FaRegStar,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";
import profileImage from "../../../assets/Image/PP1.jpg";
import Link from "next/link";

const MyProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const isLoggedIn = Boolean(user);
  return (
    <main className="relative overflow-hidden bg-linear-to-br from-blue-50 via-orange-50 to-amber-50 px-4 py-6 sm:px-6 sm:py-10 md:px-8 md:py-12">
      <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl sm:h-64 sm:w-64"></div>
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl sm:h-72 sm:w-72"></div>
      <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl sm:h-80 sm:w-80"></div>
      <p className="text-left text-sm font-medium text-gray-600 mb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition"
        >
          <FaArrowRight className="w-2 h-2" />
          <span>Back to Home</span>
        </Link>
      </p>
      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-5xl items-center justify-center sm:min-h-[calc(100vh-5rem)]">
        {isLoggedIn ? (
          <section className="grid w-full gap-4 overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-4 shadow-2xl shadow-orange-100 backdrop-blur sm:gap-6 sm:p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div className="flex flex-col items-center justify-center rounded-2xl bg-linear-to-br from-orange-100 via-amber-50 to-white p-5 text-center shadow-inner shadow-orange-100 sm:p-6 md:p-8">
              <div className="relative mb-5 aspect-square w-full max-w-52 overflow-hidden rounded-full border-4 border-amber-300 bg-white sm:max-w-60 md:max-w-68">
                <Image
                  src={user?.image || profileImage}
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 13rem, (max-width: 768px) 15rem, 17rem"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-500">
                Active member
              </p>
              <h1 className="mt-2 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                {user?.name || "Md Ashraful Islam"}
              </h1>
              <p className="mt-3 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
                Manage your personal details, track account activity, and keep
                your profile information up to date.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-orange-100 bg-white p-5 sm:p-6 md:p-8">
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:items-center">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 sm:h-12 sm:w-12">
                    <FaRegStar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 sm:text-base">
                      Profile overview
                    </p>
                    <p className="text-sm leading-6 text-gray-600">
                      A consistent look with the rest of SunCart.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 rounded-2xl bg-linear-to-br from-blue-50 via-white to-amber-50 p-4 sm:space-y-4 sm:p-5">
                  <div className="flex items-start gap-3 rounded-xl bg-white/80 p-3 shadow-sm sm:items-center">
                    <FaRegEnvelope className="h-4 w-4 text-orange-500" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                        Email address
                      </p>
                      <p className="break-all text-sm font-semibold text-gray-900 sm:break-normal">
                        {user?.email || "ashraful@example.com"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/EditProfile" className="w-full">
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200 transition hover:from-orange-600 hover:to-amber-600 hover:shadow-lg ">
                  <FaRegEdit className="h-4 w-4" />
                  Edit Profile
                </button>
              </Link>
            </div>
          </section>
        ) : (
          <section className="w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-orange-100 backdrop-blur sm:p-10">
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-orange-100 to-amber-100 text-orange-500 sm:h-20 sm:w-20">
                <FaUser className="h-7 w-7 sm:h-9 sm:w-9" />
              </div>

              {/* Heading */}
              <h2 className="mb-3 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                View Your Profile
              </h2>

              {/* Description */}
              <p className="mb-8 max-w-sm text-sm leading-6 text-gray-600 sm:text-base">
                Sign in to your account to view your profile, track your
                activity, and manage your personal details.
              </p>

              {/* CTA Buttons */}
              <div className="flex w-full flex-col gap-3 sm:gap-4">
                <Link href="/LogIn" className="w-full">
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200 transition hover:from-orange-600 hover:to-amber-600 hover:shadow-lg active:shadow-md">
                    <span>Log In</span>
                    <FaArrowRight className="h-4 w-4" />
                  </button>
                </Link>
                <Link href="/Registration" className="w-full">
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-orange-200 bg-white px-6 py-3 text-sm font-semibold text-orange-600 transition hover:border-orange-300 hover:bg-orange-50 active:bg-white">
                    Create Account
                  </button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default MyProfile;
