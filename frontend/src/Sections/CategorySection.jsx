import React from "react";
import CatCard from "../components/CatCard";
import SectionTitle from "../components/SectionCatTitle";
import { categories } from "../data";

function CategorySection() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-[90%] border-t mt-5">
        <SectionTitle
          catTitle={"Categories"}
          sectionTitle={"Browse By Category"}
        />
        <div className="py-5 flex md:justify-between justify-center gap-3 flex-wrap">
          {categories.map((c, i) => (
            <CatCard key={i} src={c.img} name={c.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
