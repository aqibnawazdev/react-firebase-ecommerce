import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { RiLoopRightFill } from "react-icons/ri";
import { product, SingleProdImages } from "../data";
import SectionTitle from "../components/SectionCatTitle";
import ProductCard from "../components/ProductCard";

function ProductDetails({ name, desc, price, ratings, colors }) {
  const [selectedView, setSelectedView] = useState(null);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-[90%] flex justify-center flex-col items-start md:flex-row gap-4">
          <div className="w-full md:w-[50%] flex flex-col md:flex-row gap-5">
            {/* image tabs column */}
            <div className="tabs-img md:w-[15%] flex md:flex-col gap-3">
              {SingleProdImages.map((img) => (
                <div
                  key={img.name}
                  className="w-[80px] h-[80px] flex items-center justify-center bg-gray-200 p-2 cursor-pointer"
                  onClick={() => setSelectedView(img.src)}
                >
                  <img src={img.src} width={70} />
                </div>
              ))}
            </div>
            {/* Product imag view Column */}
            <div className="img-view flex-grow md:w-[70%] bg-gray-200 p-2 flex items-center justify-center ">
              <img
                src={selectedView ? selectedView : "./img/gamepad-top.png"}
                alt=""
                width={300}
                height={350}
              />
            </div>
          </div>
          {/* Product Details Column */}
          <div className="Product details md:w-[40%]">
            <h1 className="text-xl font-semibold">Havic HV G-92 Gamepad</h1>

            {/* Ratings */}
            <div className="reviews flex gap-1 mt-2">
              <span className="star flex">
                <FaStar color="#FFAD33" />
                <FaStar color="#FFAD33" />
                <FaStar color="#FFAD33" />
                <FaStar color="#FFAD33" />
                <CiStar color="gray" />
              </span>
              <span className="ratings text-xs">({150} reviews)</span>{" "}
              <span className="divider bg-gray-300 w-[1px]"></span>
              <span className="availibility text-xs text-green-500">
                {"Instock"}
              </span>
            </div>

            {/* Price */}
            <div className="price mt-2">${price || "190.00"}</div>

            {/* Description  */}
            <p className="desc text-gray-800 font-light text-sm w-[350px] mt-2">
              {desc ||
                "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."}{" "}
            </p>
            <div className="w-full h-[1px] bg-black my-2"></div>

            {/* Colours */}
            <div className="colors flex gap-1 items-center">
              <span>Colours:</span>
              <div className="color w-[15px] cursor-pointer h-[15px] bg-green-600 rounded-full">
                {" "}
              </div>
              <div className="color w-[15px] cursor-pointer h-[15px] bg-red-400 rounded-full">
                {" "}
              </div>
              <div className="color w-[15px] cursor-pointer h-[15px] bg-orange-400 rounded-full">
                {" "}
              </div>
            </div>

            {/* Sizes */}
            <div className="sizes flex gap-1 items-center mt-1">
              <span>Size:</span>
              <div className="size w-[25px] border border-black text-sm flex items-center justify-center h-[25px] hover:bg-red-500 hover:text-white cursor-pointer bg-white rounded">
                {"XS"}
              </div>
              <div className="size w-[25px] border border-black text-sm flex items-center justify-center h-[25px] hover:bg-red-500 hover:text-white cursor-pointer bg-white rounded">
                {"S"}
              </div>
              <div className="size w-[25px] border border-black text-sm flex items-center justify-center h-[25px] hover:bg-red-500 hover:text-white cursor-pointer bg-white rounded">
                {"M"}
              </div>
              <div className="size w-[25px] border border-black text-sm flex items-center justify-center h-[25px] hover:bg-red-500 hover:text-white cursor-pointer bg-white rounded">
                {"L"}
              </div>
              <div className="size w-[25px] border border-black text-sm flex items-center justify-center h-[25px] hover:bg-red-500 hover:text-white cursor-pointer bg-white rounded">
                {"XL"}
              </div>
            </div>

            {/* Actions */}

            <div className="actions mt-9 flex gap-5">
              <div className="quantity flex">
                <button className="sub text-2xl p-4 text-gray-600 w-[30px] rounded-l h-[30px] flex items-center justify-center bg-white  border border-gray-500">
                  -
                </button>
                <div className="quantity text-2xl p-4 text-gray-600 w-[70px]   h-[30px] flex items-center justify-center bg-white  border border-gray-500">
                  {quantity}
                </div>
                <button className="add text-2xl p-4 text-white w-[30px] rounded-r  h-[30px] flex items-center justify-center border-red-500  border bg-red-500">
                  +
                </button>
              </div>
              <div className="addBtn">
                <button className="w-[140px] h-[30px] p-4 flex items-center justify-center rounded bg-red-500 text-white text-1xl">
                  Buy Now
                </button>
              </div>
              <div className="favBtn cursor-pointer border border-gray-500 rounded flex items-center justify-center w-[30px] h-[30px]  ">
                <CiHeart size={25} color="gray" />
              </div>
            </div>

            {/* Shippment policy*/}
            <div className="shipment mt-8 border border-black">
              <div className="freeDelivery flex gap-2 p-3">
                <FaTruckFast size={25} />
                <span>
                  <p className="text-sm">Free delivery</p>
                  <p className=" text-xs w-[300px]">
                    Enter your postal code for Delivery Availability
                  </p>
                </span>
              </div>
              <div className="divider h-[2px] w-full bg-gray-200"></div>
              <div className="return delivery flex gap-2 p-3">
                <RiLoopRightFill size={25} />
                <span>
                  <p className="text-sm">Return delivery</p>
                  <p className=" text-xs w-[300px]">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full flex justify-center items-center">
        <div className="w-[90%] border-t mt-10 flex flex-col justify-start">
          <SectionTitle catTitle={"Related items"} />
          <div className="py-5 flex md:justify-between justify-center gap-3 flex-wrap">
            {product.map((m, i) => (
              <ProductCard
                key={i}
                src={m.img}
                name={m.title}
                price={m.price}
                orignalPrice={m.originalPrice}
                discount={20}
              />
            ))}
          </div>
          <button className="bg-red-500  self-center text-white p-2 w-[200px] mb-5">
            View All Products
          </button>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
