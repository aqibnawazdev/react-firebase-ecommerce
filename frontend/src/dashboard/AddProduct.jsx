import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db, storage } from "../config/firebase.config";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { showToastMessage } from "../utils/showToast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function AddProduct() {
  const prodcutRef = doc(collection(db, "products"));

  const uploadImage = async (title, category, image) => {
    const storageRef = ref(
      storage,
      `${category}/${title}/${Date.now().toString()}`
    );
    const response = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(response.ref);
    return url;
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = data.get("title");
    const category = data.get("category");
    const price = data.get("price");
    const quantity = data.get("quantity");
    const discount = data.get("discount");
    const coupon = data.get("coupon");
    const description = data.get("description");
    const files = data.getAll("files");
    const imgPromises = Array.from(files, (image) =>
      uploadImage(title, category, image)
    );
    const imageRes = await Promise.all(imgPromises);
    await setDoc(prodcutRef, {
      title,
      category,
      price,
      stoke: quantity,
      discountPercentage: discount,
      coupon,
      description,
      images: imageRes,
      cateatedAt: serverTimestamp(),
      updatedAt: Date.now(),
    }).then(() => {
      showToastMessage({
        type: "success",
        message: "Product added successfully..",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  return (
    <div className="w-full flex justify-center overflow-y-auto">
      <div className="w-[60%]  columns-2 border border-gray-200 p-6 mt-6 rounded flex flex-col bg-white ">
        <div className="mb-10">
          <h3 className="text-2xl font-semibold">Add New Product</h3>
        </div>
        <form
          action=""
          className="flex flex-col gap-5 "
          onSubmit={(e) => handleAddProduct(e)}
        >
          <div className="flex flex-col text-sm">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Product name"
              className="border p-2"
            />
          </div>

          <div className="input-type-num flex justify-between">
            <div className="flex flex-col text-sm w-[48%]">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter Price"
                className="border p-2"
              />
            </div>
            <div className="flex flex-col w-[48%] text-sm">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Enter quantity"
                className="border p-2"
              />
            </div>
          </div>
          <div className="input-type-num flex justify-between">
            <div className="flex flex-col w-[48%] text-sm">
              <label htmlFor="discount">Discount</label>
              <input
                type="number"
                id="discount"
                name="discount"
                placeholder="Enter discount"
                className="border p-2"
              />
            </div>
            <div className="flex flex-col w-[48%] text-sm">
              <label htmlFor="coupon">Coupon</label>
              <input
                type="text"
                id="coupon"
                name="coupon"
                placeholder="Enter coupon"
                className="border p-2"
              />
            </div>
          </div>
          <div className="input-type-num flex justify-between">
            <div className="flex flex-col w-[48%] text-sm">
              <label htmlFor="title">Category</label>
              <select
                type="select"
                id="category"
                name="category"
                className="border p-2"
              >
                <optgroup name="catergory" label="Select a category">
                  <option value="electronics">Electronics</option>
                  <option value="smartphones">Smart Phones</option>
                  <option value="laptops">Laptops</option>
                  <option value="mens">Men's</option>
                  <option value="fragrances">Fragrances</option>
                  <option value="sports">Sports & Outdoor</option>
                  <option value="toys">Baby Toys</option>
                  <option value="health">Health & Beauty</option>
                  <option value="skincare">Skincare</option>
                  <option value="groceries">Groceries</option>
                  <option value="home-decoration">Home decoration</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="flex flex-col text-sm">
            <label htmlFor="description">Product Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter short description"
              className="border p-2"
            />
          </div>
          <div className="flex flex-col text-sm">
            <label htmlFor="files">
              <input type="file" multiple name="files" id="files" />
            </label>
          </div>
          <div className="flex justify-between">
            <Link to={"/admin/dashboard/manageproducts"}>
              <button
                className="bg-red-white text-red-500 border border-gray-400 w-[120px] font-semibold text-sm px-6 py-2 rounded hover:shadow focus:outline-none ease-linear transition-all duration-150"
                type="submit"
              >
                Back
              </button>
            </Link>

            <button
              className="bg-red-500 text-white w-[120px] font-semibold text-sm px-6 py-2 rounded shadow hover:shadow-lg focus:outline-none ease-linear transition-all duration-150"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
