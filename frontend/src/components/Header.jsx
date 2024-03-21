import React, { useContext, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart, CiSearch } from "react-icons/ci";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GlobalContext } from "../globalContext/GlobalContext";
function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { state } = useContext(GlobalContext);
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
                      <a
                        href="#"
                        className="block py-2 pl-3  rounded bg-primary-70 hover:underline"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>
                      <a
                        href="#"
                        className="block py-2 pl-3 text-gray-700 hover:underline"
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about"}>
                      <a
                        href="#"
                        className="block py-2 pl-3 text-gray-700 hover:underline"
                      >
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/auth/register"}>
                      <a
                        href="#"
                        className="block py-2 pl-3 text-gray-70 hover:underline"
                      >
                        Sign Up
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* secondary menu*/}
            <div className="hidden lg:flex items-center justify-between">
              <div className="xs:flex items-center ">
                <div className="lg:order-2 flex items-center">
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
                        {state.cartItemCount}
                      </button>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
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
                      <a
                        href="#"
                        className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="hover:bg-slate-200">
                    <Link to={"/"}>
                      <a
                        href="#"
                        className="block py-2 pr-4 pl-3 text-gray-700 "
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li className="hover:bg-slate-200">
                    <Link to={"/about"}>
                      <a
                        href="#"
                        className="block py-2 pr-4 pl-3 text-gray-700 "
                      >
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="hover:bg-slate-200">
                    <Link to={"/auth/register"}>
                      <a
                        href="#"
                        className="block py-2 pr-4 pl-3 text-gray-700 "
                      >
                        Sign Up
                      </a>
                    </Link>
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
