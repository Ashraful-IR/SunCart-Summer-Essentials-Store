import ExtraSection from "@/components/UI/ExtraSection";
import HeroSection from "@/components/UI/HeroSection";
import HeroSlider from "@/components/UI/HeroSlider";
import PopularProducts from "@/components/UI/PopularProd";
import { getData } from "@/lib/data";
import React from "react";

const HomePage = async () => {
  const products = await getData();
  return (
    <div>
      <HeroSection />
      <HeroSlider />
      <PopularProducts products={products} />
      <ExtraSection />
    </div>
  );
};

export default HomePage;
