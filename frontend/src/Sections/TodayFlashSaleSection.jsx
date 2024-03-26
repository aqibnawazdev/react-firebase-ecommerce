import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionCatTitle";
import { product } from "../data";
import { GlobalContext } from "../globalContext/GlobalContext";

function TodayFlashSaleSection() {
  const { state } = useContext(GlobalContext);
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-[90%] border-t mt-10">
        <SectionTitle
          catTitle={"Today's"}
          sectionTitle={"Flash Sales"}
          timer={{ days: "23", hours: "12", minutes: "30", seconds: "33" }}
        />
        <div className="py-5 flex md:justify-between justify-center gap-3 flex-wrap">
          {state.products?.map((m, i) => (
            <ProductCard
              key={i}
              src={m.images[0]}
              name={m.title}
              price={m.price}
              orignalPrice={m.price + 30}
              discount={m.discountPercentage}
              id={m.pId}
              desc={m.description}
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
