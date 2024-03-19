import React from "react";
import CategoryList from "../components/CategoryList";
import HeroSlider from "../components/HeroSlider";

function HeroSection() {
  return (
    <div className="flex justify-center  mt-6">
      <div className="w-[90%] flex justify-center ">
        <CategoryList />
        <HeroSlider />
      </div>
    </div>
  );
}

export default HeroSection;
