import React from "react";

function CatCard({ src, name }) {
  return (
    <div className="w-[48%] sm:w-[30%] md:w-[15%] bg-white cursor-pointer hover:bg-red-500 hover:text-white shadow-slate-500 border shadow rounded flex flex-col justify-center items-center py-3">
      <img src={src} alt="" />
      <span className="text-sm">{name}</span>
    </div>
  );
}

export default CatCard;
