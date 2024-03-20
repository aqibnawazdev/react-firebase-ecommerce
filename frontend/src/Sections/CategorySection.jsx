import React from "react";
import CatCard from "../components/CatCard";
import SectionTitle from "../components/SectionCatTitle";
const categories = [
  {
    title: "Phones",
    img: "./img/Category-CellPhone.png",
  },
  {
    title: "Computers",
    img: "./img/Category-Computer.png",
  },
  {
    title: "Smart Watches",
    img: "./img/Category-SmartWatch.png",
  },
  {
    title: "Camera",
    img: "./img/Category-Camera.png",
  },
  {
    title: "HeadPhones",
    img: "./img/Category-Headphone.png",
  },
  {
    title: "Gaming",
    img: "./img/Category-Gamepad.png",
  },
];
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
