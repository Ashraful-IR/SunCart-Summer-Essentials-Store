import React from "react";
import Link from "next/link";
import { FaSun, FaTint, FaLeaf } from "react-icons/fa";

const tips = [
  {
    id: 1,
    icon: FaSun,
    title: "Sun Protection",
    text: "Use broad-spectrum SPF 30+ and reapply frequently when outdoors.",
  },
  {
    id: 2,
    icon: FaTint,
    title: "Stay Hydrated",
    text: "Drink water regularly and choose lightweight, hydrating formulas.",
  },
  {
    id: 3,
    icon: FaLeaf,
    title: "Light Skincare",
    text: "Prefer non-greasy, fast-absorbing moisturizers for hot days.",
  },
];

const brands = [
  { id: 1, name: "SunShade", color: "from-amber-400 to-orange-400" },
  { id: 2, name: "SkinGuard", color: "from-sky-400 to-cyan-400" },
  { id: 3, name: "AquaFresh", color: "from-blue-400 to-indigo-500" },
  { id: 4, name: "BeachCo", color: "from-rose-300 to-pink-400" },
];

const ExtraSection = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900">
          Summer Essentials
        </h2>
        <div className="mt-4 h-1 w-24 bg-linear-to-r from-orange-400 to-amber-500 mx-auto rounded-full"></div>
        <p className="mt-6 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto">
          Your complete guide to staying fresh, protected, and beautiful all season long
        </p>
      </div>

      <div className="rounded-3xl overflow-hidden bg-linear-to-br from-amber-50 to-white/60 p-6 shadow-xl">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Tips Column */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Summer Care Tips
              </h2>
              <p className="mt-2 text-gray-600 max-w-xl">
                Practical, gentle tips to keep skin and body happy through the
                sunny season.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-1">
              {tips.map((t) => {
                const Icon = t.icon;
                return (
                  <li
                    key={t.id}
                    className="group flex items-start gap-4 rounded-2xl bg-white/75 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-lg bg-linear-to-br ${"from-amber-100 to-orange-100"} text-white shadow-md`}
                    >
                      <div className="rounded-md bg-white/0 p-2 text-orange-500">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">{t.title}</p>
                      <p className="mt-1 text-sm text-gray-600">{t.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-2">
              <Link
                href="/Product"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600 transition"
              >
                Explore Summer Picks
              </Link>
            </div>
          </div>

          {/* Brands Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Top Brands</h3>
            <p className="mt-2 text-gray-600">
              Curated brands known for quality and summer-ready formulas.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {brands.map((b) => (
                <div
                  key={b.id}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-white/80 p-4 text-center shadow hover:shadow-lg transition"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br ${b.color} text-white font-bold text-lg shadow-md`}
                  >
                    {b.name.charAt(0)}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    {b.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
