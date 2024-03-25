import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[200px] h-[490px] shadow border-r">
      <div className="flex flex-col pt-2 gap-2 ">
        <Link to={"/admin/dashboard"}>
          <span className="hover:bg-black flex justify-start ps-2 py-2 w-full hover:text-white">
            Dashboard
          </span>
        </Link>
        <Link to={"/admin/dashboard/manageproducts"}>
          <span className="hover:bg-black flex justify-start ps-2 py-2 w-full hover:text-white">
            Manage Products
          </span>
        </Link>

        <Link to={"/admin/dashboard/manageorders"}>
          <span className="hover:bg-black flex justify-start ps-2 py-2 w-full hover:text-white">
            Manage Orders
          </span>
        </Link>

        <Link to={"/admin/dashboard/manageproducts"}>
          <span className="hover:bg-black flex justify-start ps-2 py-2 w-full hover:text-white">
            Profile{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
