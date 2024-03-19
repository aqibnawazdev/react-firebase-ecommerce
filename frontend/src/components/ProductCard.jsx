import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import "../index.css";
function ProductCard({ src, sale, name, price, orignalPrice, discount }) {
  return (
    <div className="w-[100%] sm:w-[40%] md:w-[30%] lg:w-[23%] productCard shadow h-[330px] mt-3 rounded relative ">
      {discount && (
        <button className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs rounded">
          - {discount} %
        </button>
      )}
      <div className="actions flex flex-col gap-2 items-center absolute top-4 right-4">
        <CiHeart className="bg-white rounded-full cursor-pointer" size={20} />
        <IoEyeOutline
          className="bg-white rounded-full cursor-pointer"
          size={20}
        />
      </div>
      <div className="bg-gray-100 h-[75%] flex flex-col items-center justify-evenly ">
        <img src={src} alt="" className="object-contain" />
        <button className="bg-transparent text-gray-100 hover:text-white w-full py-2 addToCart-btn absolute bottom-20">
          Add to Cart
        </button>
      </div>
      <div className="prod-details p-2 flex flex-col items-start justify-center">
        <h3 className="font-semibold text-sm">{name}</h3>
        <div className="flex gap-2 ">
          <span className="text-red-500">{price}</span>
          <span className="text-gray-500 line-through">{orignalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
