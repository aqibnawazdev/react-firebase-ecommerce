import React, { startTransition, useContext, useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart, CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CiCircleRemove } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../globalContext/GlobalContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { showToastMessage } from "../utils/showToast";
function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [userProfileToggle, setUserProfileToggle] = useState(false);
  const [user, setUser] = useState();
  const { state } = useContext(GlobalContext);
  const [admin, setAdmin] = useState(null);
  const getClaim = () => {
    auth.currentUser
      .getIdTokenResult()
      .then((idTokenResult) => {
        setAdmin(idTokenResult.claims.admin);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cartItemTotal = () => {
    return state.cart.reduce(
      (total, currentItem) => currentItem.quantity + total,
      0
    );
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getClaim();
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        showToastMessage({ type: "success", message: "Logout successfull..." });
        localStorage.removeItem("user");
        navigate("/auth/login");
      })
      .catch((err) => {});
  };
  return (
    <div className="app border-b sticky z-20 bg-white top-0 left-0">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            <div className="flex items-center gap-16 py-5">
              {/* logo */}
              <a href="/" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Exclusive
                </span>
              </a>
              {/* primary menu*/}
              <div className="hidden lg:flex">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <Link to={"/"}>
                      <span
                        className="block py-2 pl-3  rounded bg-primary-70 hover:underline"
                        aria-current="page"
                      >
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>
                      <span className="block py-2 pl-3 text-gray-700 hover:underline">
                        Contact
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about"}>
                      <span className="block py-2 pl-3 text-gray-700 hover:underline">
                        About
                      </span>
                    </Link>
                  </li>
                  <li>
                    {!user && (
                      <Link to={"/auth/register"}>
                        <span className="block py-2 pl-3 text-gray-70 hover:underline">
                          Sign Up
                        </span>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            {/* secondary menu*/}
            <div className="hidden lg:flex items-center justify-between">
              <div className="xs:flex items-center ">
                <div className="lg:order-2 flex gap-2 items-center">
                  <div className="search-box bg-gray-100 hidden sm:flex justify-center items-center py-1">
                    <input
                      type="search"
                      className="bg-gray-100 focus:outline-none ms-2"
                    />
                    <CiSearch size={20} className="me-1 font-bold" />
                  </div>
                  <Link to={"/wishlist"}>
                    <span className="relative">
                      <CiHeart size={25} className="mx-2 cursor-pointer" />
                      <button className="bg-red-500 w-4 h-4 rounded-full text-[10px] text-white absolute top-[-8px]">
                        {2}
                      </button>
                    </span>
                  </Link>
                  <Link to={"/cart"}>
                    <span className="relative">
                      <IoCartOutline size={25} className="cursor-pointer" />
                      <button className="bg-red-500 w-4 h-4 rounded-full text-[10px] text-white absolute top-[-8px]">
                        {cartItemTotal()}
                      </button>
                    </span>
                  </Link>
                  {/* User dropdown menu */}
                  {user && (
                    <span
                      className="relative"
                      onClick={() => setUserProfileToggle(!userProfileToggle)}
                    >
                      <div className="cursor-pointer w-[25px] h-[25px] rounded-full">
                        {(
                          <img
                            src={user.photoURL}
                            alt=""
                            className="rounded-full"
                          />
                        ) || <CiUser size={25} />}
                      </div>
                      {userProfileToggle && (
                        <div className="absolute w-[560px] left-1/2 z-10 mt-5 flex max-w-max -translate-x-1/2 px-4">
                          <div className="w-[200px] max-w-md flex-auto overflow-hidden rounded bg-[#0009] text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                            {!admin ? (
                              <div className="p-2">
                                <div className="group relative gap-1 items-center flex  rounded cursor-pointer text-white py-2 hover:bg-[#0002]">
                                  <FaRegUser size={15} />
                                  <span className="text-sm font-thin">
                                    Manage My account
                                  </span>
                                </div>
                                <div className="group relative gap-1 items-center flex rounded cursor-pointer text-white py-2 hover:bg-[#0002]">
                                  <FiShoppingBag size={15} />
                                  <span className="text-sm font-thin">
                                    My Orders
                                  </span>
                                </div>
                                <div className="group relative gap-1 items-center flex  rounded cursor-pointer text-white py-2 hover:bg-[#0002]">
                                  <CiCircleRemove size={15} />
                                  <span className="text-sm font-thin">
                                    My Cancellation
                                  </span>
                                </div>
                                <div className="group relative gap-1 items-center flex  rounded cursor-pointer text-white py-2 hover:bg-[#0002]">
                                  <FaRegStar size={15} />
                                  <span className="text-sm font-thin">
                                    Reviews
                                  </span>
                                </div>
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
                                  <Link to={"/admin/dashboard"}>
                                    <span className="text-sm text-white font-thin">
                                      Admin Dashboard
                                    </span>
                                  </Link>
                                </div>
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
                            )}
                          </div>
                        </div>
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <Link to={"/cart"}>
                <span className={toggleMenu ? "relative hidden" : "block"}>
                  <IoCartOutline size={25} className="cursor-pointer" />
                  <button className="bg-red-500 w-4 h-4 rounded-full text-[10px] text-white absolute  top-2 ">
                    {cartItemTotal()}
                  </button>
                </span>
              </Link>
              {user && (
                <span className={toggleMenu ? "relative hidden" : "block"}>
                  <div className="cursor-pointer w-[25px] h-[25px] rounded-full">
                    {(
                      <img
                        src={state.currentUser.photoURL}
                        alt=""
                        className="rounded-full"
                      />
                    ) || <CiUser size={25} />}
                  </div>
                </span>
              )}
              <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className={toggleMenu ? "hidden" : "flex items-center"}
              >
                <CgMenuRight className="h-6" size={25} />
              </button>
              <button
                className={toggleMenu ? "flex items-center" : "hidden"}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <RiCloseLine className="h-6" size={25} />
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <div className="gap-8 ">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li className="hover:bg-slate-200">
                    <Link>
                      <span
                        className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900"
                        aria-current="page"
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="hover:bg-slate-200">
                    <Link to={"/"}>
                      <span
                        className="block py-2 pr-4 pl-3 text-gray-700 "
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        Contact
                      </span>
                    </Link>
                  </li>
                  <li className="hover:bg-slate-200">
                    <Link to={"/about"}>
                      <span
                        className="block py-2 pr-4 pl-3 text-gray-700 "
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        About
                      </span>
                    </Link>
                  </li>
                  <li className="hover:bg-slate-200">
                    {!state?.currentUser?.name && (
                      <Link to={"/auth/register"}>
                        <span className="block py-2 pl-3 text-gray-70 hover:underline">
                          Sign Up
                        </span>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
