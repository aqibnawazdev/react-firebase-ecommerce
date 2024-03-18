import React from "react";
import { FaChevronDown } from "react-icons/fa6";

function TopBar() {
  return (
    <div className="bg-black text-white py-1 w-full">
      <div className="w-[90%] flex justify-end">
        <div className=" w-[70%] flex justify-between items-center">
          <div className="flex justify-center ">
            <p className="text-[14px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a className="outline-none underline mx-3 font-semibold text-[14px] cursor-pointer">
              Show Now
            </a>
          </div>
          <div className="flex justify-between items-center cursor-pointer">
            <p className="text-[14px]">English</p>
            <FaChevronDown size={"14px"} className="ms-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
