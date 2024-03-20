import React from "react";
import { FcGoogle } from "react-icons/fc";

function AuthLogin() {
  return (
    <div className="w-full mt-5 md:mt-10 flex justify-center md:block">
      <div className="w-[90%] object-contain flex md:justify-between justify-center items-center shadow md:shadow-none py-5 md:py-3  gap-10">
        <div className="left w-[50%] hidden md:block">
          <img
            src="./img/auth-screen-img.png"
            alt=""
            height={200}
            className="img overflow-hidden"
          />
        </div>
        <div className="md:w-[40%] w-[90%]">
          <h1 className="text-xl sm:text-3xl font-semibold">
            Login to Exclusive
          </h1>
          <span className="text-xs">Enter your details below</span>
          <form action="" className="flex flex-col gap-4 mt-5 ">
            <input
              type="email"
              placeholder="Email"
              className="p-1 border-b outline-none border-black sm:w-[80%] w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-1 border-b outline-none border-black sm:w-[80%] w-full"
            />
            <div className="action-buttons flex justify-between items-center sm:w-[80%] w-full mt-10">
              <button className="p-2 w-[100px] bg-red-500 text-white text-md ">
                Login
              </button>
              <button className="cursor-pointer p-1text-xs text-red-500 hover:underline">
                Forget Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthLogin;
