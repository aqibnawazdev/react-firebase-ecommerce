import React from "react";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionCatTitle";
import { product } from "../data";

function TodayFlashSaleSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-[90%] border-t mt-10">
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
