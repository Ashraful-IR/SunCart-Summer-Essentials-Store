"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const ProfileEditPage = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    // TODO: submit to API
    console.log("Save profile", { name, url });
    await authClient.updateUser({
      name,
      image: url,
    });
    

  };

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-orange-50 to-amber-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mt-10 mx-auto w-full max-w-4xl">
        <section className="overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl shadow-orange-100 backdrop-blur sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
          <p className="mt-2 text-sm text-gray-600">
            Provide a display name and a profile image URL.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profile image URL
              </label>
              <input
                name="url"
                placeholder="https://example.com/avatar.jpg"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {url ? (
                <div className="mt-4 w-36 overflow-hidden rounded-full border-4 border-amber-300 bg-white">
                  <Image
                    src={url}
                    alt="preview"
                    width={144}
                    height={144}
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="mt-4 w-36 overflow-hidden rounded-full border-4 border-amber-100 bg-white text-center text-sm leading-36 text-gray-400">
                  No image
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Display name
              </label>
              <input
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mt-4 flex items-center justify-start gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-200 transition hover:from-orange-600 hover:to-amber-600"
              >
                Save
              </button>
              <Link href="/MyProfile">
                <button
                  type="button"
                  className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 border border-gray-200"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ProfileEditPage;
