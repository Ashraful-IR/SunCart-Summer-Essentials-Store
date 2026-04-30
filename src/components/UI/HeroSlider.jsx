"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/bMmZLNFw/e6369569fcc6e4dfa55c5d95f0aa45ed.jpg",
      title: "Summer Essentials",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/nNbtX8zr/154fa541587cdab59bbe15a3184b7372.jpg",
      title: "Premium Quality",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/pBDHTmtH/d78d39e685b2bcae481356d032d1196c.jpg",
      title: "Best Prices",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      className="container mx-auto mt-2 h-140 w-full border-4 border-amber-300 rounded-xl shadow-2xl shadow-orange-200/60"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="80vw"
              priority
              className="h-120 w-full object-cover transition-all duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
