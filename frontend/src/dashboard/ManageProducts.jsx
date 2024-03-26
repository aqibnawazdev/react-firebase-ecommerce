import React, { useContext, useState } from "react";
import { product } from "../data";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { GlobalContext } from "../globalContext/GlobalContext";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { showToastMessage } from "../utils/showToast";
import { db } from "../config/firebase.config";

function ManageProducts() {
  const [showModal, setShowModal] = useState(false);
  const [modelData, setModelData] = useState({});
  const { state, dispatch } = useContext(GlobalContext);

  console.log(modelData);
  const handleModelState = (e) => {
    setModelData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id)).then(() => {
      showToastMessage({
        type: "success",
        message: "Item deleted successfully..",
      });
    });
  };
  const handleUpdte = async (e, id) => {
    e.preventDefault();
    console.log("clicked");
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, {
      ...modelData,
    }).then(() => {
      showToastMessage({ type: "success", message: "Item updated..." });
    });
  };
  return (
    <div className="w-full ">
      <div className="mt-10 flex flex-col ">
        <div className="flex justify-between items-center w-[90%] mb-2 ">
          <h2 className="font-bold text-2xl border-b-2 border-b-red-500 ">
            All Products
          </h2>
          <Link to={"/admin/dashboard/addproduct"}>
            <button className="bg-red-500 hover:bg-red-900 text-sm text-white p-2 rounded ">
              Add New Product
            </button>
          </Link>
        </div>

        <table className="table-auto w-[90%] overflow-x-auto text-left">
          <thead className="shadow-sm ">
            <tr className=" bg-gray-100 m-5">
              <th scope="col" className="py-3 px-2">
                Product Name
              </th>
              <th scope="col" className="py-3">
                Price
              </th>
              <th scope="col" className="py-3">
                Quantity
              </th>
              <th scope="col" className="py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="mt-6">
            {state.products?.map((p) => (
              <tr key={p.pId} className="items-start shadow-sm">
                <td
                  scope="col"
                  className="flex items-center py-1 gap-2 relative"
                >
                  <img src={p.images[0]} alt="" width={40} height={20} />
                  <span className="text-xs hidden md:flex">{p.title}</span>
                </td>
                <td scope="col" className="text-sm py-1">
                  ${p.price}
                </td>
                <td scope="col" className="py-1">
                  <div className="w-[20px] h-full text-sm">{p.stock}</div>
                </td>
                <td scope="col" className="py-1">
                  <button
                    className="text-[10px] mx-2"
                    onClick={() => handleDelete(p.pId)}
                  >
                    <FaTrashAlt size={15} />
                  </button>
                  <button
                    className=" text-[10px]"
                    onClick={() => {
                      setShowModal(true),
                        setModelData({
                          pId: p.pId,
                          title: p.title,
                          description: p.description,
                          price: p.price,
                          stock: p.stock,
                        });
                    }}
                  >
                    <FaEdit size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal ? (
        <Modal>
          <div className="justify-center items-center flex  fixed inset-0 z-50 ">
            <div className="relative my-6 mx-auto w-[50%] ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid 0 rounded-t">
                  <h3 className="text-2xl font-semibold">Upadate Product</h3>
                </div>
                {/*body*/}
                <div className="relative p-4">
                  <form
                    action=""
                    onSubmit={(e) => handleUpdte(e, modelData.pId)}
                    className="flex flex-col gap-5 "
                  >
                    <div className="flex flex-col text-sm">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Product name"
                        className="border p-2"
                        value={modelData.title}
                        onChange={(e) => handleModelState(e)}
                      />
                    </div>
                    <div className="flex flex-col text-sm">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter Price"
                        className="border p-2"
                        value={modelData.price}
                        onChange={(e) => handleModelState(e)}
                      />
                    </div>
                    <div className="flex flex-col text-sm">
                      <label htmlFor="quantity">Quantity</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="Enter quantity"
                        className="border p-2"
                        value={modelData.stock}
                        onChange={(e) => handleModelState(e)}
                      />
                    </div>
                    <div className="flex flex-col text-sm">
                      <label htmlFor="description">Product Description</label>
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Enter short description"
                        className="border p-2"
                        value={modelData.description}
                        onChange={(e) => handleModelState(e)}
                      />
                    </div>
                    <div className="flex items-center justify-end gap-4 p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none border border-gray-400 rounded "
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-red-500 text-white  text-sm px-6 py-2 rounded outline-none"
                        type="submit"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </Modal>
      ) : null}
    </div>
  );
}

export default ManageProducts;
