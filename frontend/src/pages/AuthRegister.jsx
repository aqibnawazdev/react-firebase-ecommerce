import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, db } from "../config/firebase.config";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { dismissToast, showToastMessage } from "../utils/showToast";

function AuthRegister() {
  const navigate = useNavigate();
  const storage = getStorage();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const phoneNumber = data.get("phonenumber");
    const name = data.get("name").replaceAll(" ", "").toLowerCase();
    const file = data.get("profile-pic");
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      showToastMessage({
        type: "loading",
        message: "Please wait, while registering..!!!",
      });
      const userData = res.user;
      if (userData) {
        const metadata = {
          contentType: file.type,
        };
        const storageRef = ref(storage, "images/" + name);
        await uploadBytesResumable(storageRef, file, metadata).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            await updateProfile(userData, {
              displayName: name,
              photoURL: downloadURL,
            });
            const docRef = doc(db, "users", userData.uid);
            await setDoc(docRef, {
              userId: userData.uid,
              displayName: name,
              email: email,
              phoneNumber: phoneNumber,
              photoURL: userData?.photoURL,
              timeStamp: serverTimestamp(),
            });
          });
        });
        dismissToast();
        showToastMessage({
          type: "success",
          message: "Registered sucessfully...",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      const errorMessage = error.message;
      showToastMessage({ type: "error", message: errorMessage });
    }
  };

  return (
    <div className="w-full mt-5 md:mt-10 flex justify-center md:block">
      <div className="w-[90%] object-contain flex md:justify-between justify-center items-center shadow md:shadow-none py-5 md:py-3  gap-10">
        <div className="left w-[50%] hidden md:block">
          <img
            src="/img/auth-screen-img.png"
            alt=""
            height={200}
            className="img overflow-hidden"
          />
        </div>
        <div className="md:w-[40%] w-[90%]">
          <h1 className="text-xl sm:text-3xl font-semibold">
            Create an Account
          </h1>
          <span className="text-xs">Enter your details below</span>
          <form
            action=""
            onSubmit={(event) => handleSubmit(event)}
            className="flex flex-col gap-4 mt-5 "
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="p-1 border-b outline-none border-black sm:w-[80%] w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-1 border-b outline-none border-black sm:w-[80%] w-full"
            />
            <input
              type="number"
              name="phonenumber"
              placeholder="Phone number"
              className="p-1 border-b outline-none border-black sm:w-[80%] w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-1 border-b outline-none border-black sm:w-[80%] w-full"
            />
            <input
              type="file"
              name="profile-pic"
              className="p-1  outline-none sm:w-[80%] w-full"
            />
            <button
              className="p-1 bg-red-500 text-white text-md sm:w-[80%] w-full mt-10"
              type="submit"
            >
              Create account
            </button>
            <button className="p-1 bg-white sm:w-[80%] w-full flex justify-center gap-2 items-center shadow">
              <FcGoogle size={25} />
              <span className="text-md">Singup with Google</span>
            </button>
          </form>
          <Link to={"/auth/login"}>
            <button className="text-sm mt-5">
              Already have an account?{" "}
              <span className="text-sm underline">Login</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthRegister;
