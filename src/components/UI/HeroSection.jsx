"use client";

import { useEffect, useRef, useState } from "react";
import { DotLottie } from "@lottiefiles/dotlottie-web";
import { IoClose } from "react-icons/io5";

const HeroSection = () => {
  const canvasRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return undefined;

    const dotLottie = new DotLottie({
      canvas: canvasRef.current,
      src: "https://lottie.host/0cbdb3ef-2fa5-4d1d-9e4e-f66c879e010d/D0bRr9d93F.lottie",
      loop: true,
      autoplay: true,
    });

    return () => {
      dotLottie.destroy();
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm">
      <section className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-amber-200/70 bg-linear-to-br from-amber-50 via-white to-orange-100 shadow-2xl shadow-black/30">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close intro modal"
          className="absolute left-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md transition hover:bg-white"
        >
          <IoClose className="h-5 w-5" />
        </button>

        <div className="grid items-center gap-8 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-12">
          <div className="space-y-5 text-center md:text-left">
            <span className="inline-flex rounded-full bg-amber-200/70 px-4 py-1 text-sm font-semibold tracking-wide text-amber-900">
              New season, new essentials
            </span>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Shop the bright side of summer.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Discover curated summer picks, fresh deals, and lightweight essentials
              made for sunny days and easy shopping.
            </p>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl items-center justify-center rounded-3xl bg-white/70 p-4 shadow-inner shadow-orange-100">
            <canvas
              ref={canvasRef}
              id="dotLottie-canvas"
              className="aspect-square h-80 w-full max-w-105 sm:h-95 md:h-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
