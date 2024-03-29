import React, { startTransition, useContext, useState } from "react";
import { product } from "../data";
import { GlobalContext } from "../globalContext/GlobalContext";
import { Link } from "react-router-dom";

function Cart() {
  const { state, dispatch } = useContext(GlobalContext);
  const handlCartItemDelete = (id, quantity) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: { id } });
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      quantity = 1;
    }
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const calcTotalPrice = () => {
    return state.cart.reduce(
      (total, currentItem) => currentItem.price * currentItem.quantity + total,
      0
    );
  };
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <table className="table-auto w-[90%]  overflow-x-auto text-left ">
        <thead className=" shadow-sm">
          <tr className=" bg-gray-100 m-5">
            <th scope="col" className="py-3">
              Product
            </th>
            <th scope="col" className="py-3">
              Price
            </th>
            <th scope="col" className="py-3">
              Quantity
            </th>
            <th scope="col" className="py-3">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody className=" mt-6">
          {state.cart.map((p) => (
            <tr key={p.id} className="items-start shadow-sm">
              <td scope="col" className="flex items-center py-2 gap-2 relative">
                <button
                  className="bg-red-500 cart-prod-remove-btn absolute top-1 left-[-10px] rounded-full w-4 h-4 text-[10px] text-white"
                  onClick={() => handlCartItemDelete(p.id, p.quantity)}
                >
                  X
                </button>
                <img src={p.src} alt="" width={50} />
                <span className="text-xs sm:text-sm hidden md:flex">
                  {p.name}
                </span>
              </td>
              <td scope="col" className=" py-2">
                ${p.price}
              </td>
              <td scope="col" className="py-2">
                <div className=" w-[20px] h-full">
                  <input
                    className="w-[45px] py-1 ps-2 border"
                    type="number"
                    value={p.quantity}
                    onChange={(e) =>
                      handleQuantityChange(p.id, parseInt(e.target.value))
                    }
                  />
                </div>
              </td>
              <td scope="col" className="py-2">
                ${p.price * p.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="actions flex justify-between w-[90%] mt-10 ">
        <button className="w-50 py-2 px-4 border border-black bg-white">
          Return to Shop
        </button>
        <button className="w-50 py-2 px-4 border border-black bg-white">
          Update Cart
        </button>
      </div>
      <div className="flex flex-col md:flex-row w-[90%] justify-between items-start gap-5 mt-10 mb-10">
        <div className="md:w-[60%] flex flex-col sm:flex-row gap-1 sm:gap-3">
          <input type="text" className="py-1 px-3 border border-black" />
          <button className="bg-red-500 w-[70%] md:w-auto py-1 px-3 text-white">
            Apply coupon
          </button>
        </div>
        <div className="shipping-details flex flex-col gap-3 w-[60%] md:w-[30%] border border-black p-5">
          <h2>Cart Total</h2>
          <div className="border-b border-b-black flex justify-between">
            <span className="text-sm">Subtotal: </span>
            <span className="text-sm">${calcTotalPrice()}</span>
          </div>
          <div className="border-b  border-b-black flex justify-between">
            <span className="text-sm">Shipping: </span>
            <span className="text-sm">{"Free"}</span>
          </div>
          <div className=" flex justify-between mt-2">
            <span className="text-sm font-semibold">Total: </span>
            <span className="text-sm font-semibold">${calcTotalPrice()}</span>
          </div>
          <div className="self-center">
            <Link to={"/cart/checkout"}>
              <button className="bg-red-500 py-1 px-2 rounded text-white text-sm">
                Proccess to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
