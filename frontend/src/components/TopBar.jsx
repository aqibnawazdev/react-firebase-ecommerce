import React from "react";

function TopBar() {
  return (
    <div className="bg-black text-white py-1">
      <div className="w[90%] w-full flex justify-center align-middle">
        <p className="text-[14px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <a className="outline-none underline mx-3 font-semibold text-[14px] cursor-pointer">
          Show Now
        </a>
      </div>
      <div>
        <p>English icon</p>
      </div>
    </div>
  );
}

export default TopBar;
