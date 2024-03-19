import React from "react";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionCatTitle";
const product = [
  {
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    img: "./img/gamepad.png",
  },
  {
    title: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1130,
    img: "./img/keyboard.png",
  },
  {
    title: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 470,
    img: "./img/display.png",
  },
  {
    title: "S-Series Comfort Chair",
    price: 378,
    originalPrice: 450,
    img: "./img/chair.png",
  },
];

function TodayFlashSaleSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-[90%]  border-t mt-10">
        <SectionTitle
          catTitle={"Today's"}
          sectionTitle={"Flash Sales"}
          timer={{ days: "23", hours: "12", minutes: "30", seconds: "33" }}
        />
        <div className="py-5 flex md:justify-between justify-center gap-3 flex-wrap">
          {product.map((m, i) => (
            <ProductCard
              key={i}
              src={m.img}
              name={m.title}
              price={m.price}
              orignalPrice={m.originalPrice}
              discount={40}
            />
          ))}
        </div>
      </div>
      <button className="bg-red-500 text-white p-2 w-[200px]">
        View All Products
      </button>
    </section>
  );
}

export default TodayFlashSaleSection;
