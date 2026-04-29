import ExtraSection from "@/components/UI/ExtraSection";
import HeroPage from "@/components/UI/HeroSection";
import PopularProducts from "@/components/UI/PopuarProd";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <PopularProducts />
      <ExtraSection />
    </div>
  );
};

export default HomePage;
