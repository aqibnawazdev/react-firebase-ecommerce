import React from "react";
import { CiCircleRemove, CiLogout } from "react-icons/ci";
import { FaRegStar, FaRegUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

function UserFloatMenuMobile({
  admin,
  handleLogout,
  setUserProfileToggle,
  userProfileToggle,
}) {
  return (
    <div className="absolute w-[300px]  z-10 mt-5 flex max-w-max -translate-x-1/2 px-4">
      <div className="w-[200px] max-w-md flex-auto overflow-hidden rounded bg-[#0009] text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        {!admin ? (
          <div className="p-2">
            <Link to={"/myaccount"}>
              <div
                className="group relative gap-1 items-center flex  rounded cursor-pointer text-white py-2 hover:bg-[#0002]"
                onClick={() => setUserProfileToggle(!userProfileToggle)}
              >
                <FaRegUser size={15} />
                <span className="text-sm font-thin">Manage My account</span>
              </div>
            </Link>
            <Link to={"/myorders"}>
              <div
                className="group relative gap-1 items-center flex rounded cursor-pointer text-white py-2 hover:bg-[#0002]"
                onClick={() => setUserProfileToggle(!userProfileToggle)}
              >
                <FiShoppingBag size={15} />
                <span className="text-sm font-thin">My Orders</span>
              </div>
            </Link>
            <Link to={"/mycancellation"}>
              <div
                className="group relative gap-1 items-center flex  rounded cursor-pointer text-white py-2 hover:bg-[#0002]"
                onClick={() => setUserProfileToggle(!userProfileToggle)}
              >
                <CiCircleRemove size={15} />
                <span className="text-sm font-thin">My Cancellation</span>
              </div>
            </Link>
            <Link to={"/myreviews"}>
              <div
                className="group relative gap-1 items-center flex  rounded cursor-pointer text-white py-2 hover:bg-[#0002]"
                onClick={() => setUserProfileToggle(!userProfileToggle)}
              >
                <FaRegStar size={15} />
                <span className="text-sm font-thin">Reviews</span>
              </div>
            </Link>
            <div className="group relative gap-1 items-center flex rounded cursor-pointer text-white py-2 hover:bg-[#0002]">
              <CiLogout size={15} />
              <span
                className="text-sm font-thin"
                onClick={() => handleLogout()}
              >
                Logout
                <span className="absolute inset-0"></span>
              </span>
            </div>
          </div>
        ) : (
          <div className="p-2">
            <div className="group relative gap-1 items-center flex  rounded cursor-pointer text-white py-2 hover:bg-[#0002]">
              <FaRegUser size={15} />
              <Link
                to={"/admin/dashboard"}
                onClick={() => setUserProfileToggle(!userProfileToggle)}
              >
                <span className="text-sm text-white font-thin">
                  Admin Dashboard
                </span>
              </Link>
            </div>
            <div className="group relative gap-1 items-center flex rounded cursor-pointer text-white py-2 hover:bg-[#0002]">
              <CiLogout size={15} />
              <span
                className="text-sm font-thin"
                onClick={() => (
                  handleLogout(), setUserProfileToggle(!userProfileToggle)
                )}
              >
                Logout
                <span className="absolute inset-0"></span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserFloatMenuMobile;
