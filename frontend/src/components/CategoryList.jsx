import React from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";

function CategoryList() {
  return (
    <ul className="list-inside hidden md:block w-[20%] border-r border-b-slate-400 me-5">
      <li className="flex gap-2 items-center text-black cursor-pointer my-2">
        Men's fashion <FaChevronRight size={10} />
      </li>
      <li className="flex gap-2 items-center text-black cursor-pointer my-2">
        Electronics
      </li>
      <li className="flex gap-2 items-center text-black cursor-pointer my-2">
        Home & Lifestyle <FaChevronRight size={10} />
      </li>
      <li className="flex gap-2 items-center text-black cursor-pointer my-2">
        Medicine
      </li>
      <li className="flex gap-2 items-center text-black cursor-pointer my-2">
        Sports & Outdoor
      </li>
      <li className="flex gap-2 items-center text-black cursor-pointer my-2">
        Baby's & toys
      </li>
      <li className="flex gap-2 items-center text-black cursor-pointer my-2">
        Baby's & toys
      </li>
      <li className="flex gap-2 items-center text-black cursor-pointer my-2">
        Groceries & Pets
      </li>
      <li className="flex gap-2 items-center text-black cursor-pointer my-2">
        Health & Beauty
      </li>
    </ul>
  );
}

export default CategoryList;
