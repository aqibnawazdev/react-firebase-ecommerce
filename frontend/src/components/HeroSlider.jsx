import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "../index.css";
import { Pagination } from "swiper/modules";
import { SiApple } from "react-icons/si";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

// Import Swiper styles
import "swiper/css";
import { FaCircleArrowRight } from "react-icons/fa6";
function HeroSlider() {
  return (
    // <div className="w-[80%]">
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{
        clickable: true,
        bulletClass: "pagination-button",
      }}
      modules={[Pagination]}
      className="mySwiper "
    >
      <SwiperSlide className="bg-black w-full py-5">
        <div className="slider-content w-full flex flex-col justify-center items-center sm:w-[48%]  sm:items-start text-white">
          <div className="brand flex gap-2">
            <SiApple className="" />
            <span className="text-sm">iPhone 14 Series</span>
          </div>
          <h2 className="md:text-4xl lg:text-6xl text-3xl mt-3">
            Up to 10% <br />
            of a Vocher
          </h2>
          <div className="call-to-action flex gap-2 mt-3 items-center ">
            <button className="border-b py-1 ">Shop now</button>
            <HiOutlineArrowLongRight size={25} className="cursor-pointer" />
          </div>
        </div>
        <img
          className="w-[45%] hidden sm:block"
          src="./img/hero-img.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    // </div>
  );
}

export default HeroSlider;
