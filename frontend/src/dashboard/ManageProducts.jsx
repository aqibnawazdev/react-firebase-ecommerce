import React from "react";
import { product } from "../data";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Modal from "../components/Modal";

function ManageProducts() {
  const [showModal, setShowModal] = React.useState(false);
  const handleDelete = () => {};
  const handleUpdtae = () => {};
  return (
    <div className="w-full ">
      <div className="mt-10 flex flex-col ">
        <h2 className="font-bold text-2xl mb-8 border-b-2 border-b-red-500 self-start">
          All Products
        </h2>
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
            {product.map((p) => (
              <tr key={p.id} className="items-start shadow-sm">
                <td
                  scope="col"
                  className="flex items-center py-1 gap-2 relative"
                >
                  <img src={`/img/${p.img}`} alt="" width={40} />
                  <span className="text-xs hidden md:flex">{p.title}</span>
                </td>
                <td scope="col" className="text-xs py-1">
                  ${p.price}
                </td>
                <td scope="col" className="py-1">
                  <div className="w-[20px] h-full">
                    {50 - Math.floor(Math.random() * 5 + 1)}
                  </div>
                </td>
                <td scope="col" className="flex gap-2 py-1">
                  <button
                    className="text-[10px] "
                    onClick={() => handleDelete(p.id)}
                  >
                    <FaTrashAlt size={15} />
                  </button>
                  <button
                    className=" text-[10px]"
                    onClick={() => handleUpdtae(p.id)}
                  >
                    <FaEdit size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="bg-red-500 hover:bg-red-900 text-sm text-white p-2 mt-10 rounded self-start"
          onClick={() => setShowModal(true)}
        >
          Add New Product
        </button>
      </div>
      {showModal ? (
        <Modal>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
            <div className="relative my-6 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid 0 rounded-t">
                  <h3 className="text-1xl font-semibold">Create New Product</h3>
                </div>
                {/*body*/}
                <div className="relative p-4">
                  <form action="" className="flex flex-col gap-5 ">
                    <div className="flex flex-col text-sm">
                      <label for="title">Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Product name"
                        className="border p-1"
                      />
                    </div>
                    <div className="flex flex-col text-sm">
                      <label for="Price">Price</label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter Price"
                        className="border p-1"
                      />
                    </div>
                    <div className="flex flex-col text-sm">
                      <label for="quantity">Quantity</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="Enter quantity"
                        className="border p-1"
                      />
                    </div>
                    <div className="flex flex-col text-sm">
                      <label for="description">Product Description</label>
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Enter short description"
                        className="border p-1"
                      />
                    </div>
                    <div className="flex flex-col text-sm">
                      <label for="files">
                        <input type="file" multiple />
                      </label>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-500 text-white  font-semibold  text-sm px-6 py-3 rounded shadow hover:shadow-lg  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Add
                  </button>
                </div>
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
