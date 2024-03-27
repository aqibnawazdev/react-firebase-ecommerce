import React, { useContext } from "react";
import { GlobalContext } from "../globalContext/GlobalContext";

function Checkout() {
  const { state } = useContext(GlobalContext);
  const calcTotalPrice = () => {
    return state.cart.reduce(
      (total, currentItem) => currentItem.price * currentItem.quantity + total,
      0
    );
  };
  return (
    <div className="checkout w-full flex justify-center">
      <div className="w-[85%]">
        <h1 className="text-2xl mt-6">Billing Details</h1>
        <form action="" className="mt-10 flex justify-between">
          <div className="left w-[40%]">
            <div className="flex flex-col gap-1">
              <label className="text-[#6b6b6b]" htmlFor="fullname">
                Full Name:
              </label>
              <input
                className="border py-1 px-1 text-[#6b6b6b] bg-[#F5F5F5] outline-none"
                type="text"
                required
                id="fullname"
                name="fullname"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#6b6b6b]" htmlFor="company">
                Company
              </label>
              <input
                className="border py-1 px-1 text-[#6b6b6b] bg-[#F5F5F5] outline-none"
                type="text"
                required
                id="company"
                name="company"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#6b6b6b]" htmlFor="streetAddress">
                Street Address:
              </label>
              <input
                className="border py-1 px-1 text-[#6b6b6b] bg-[#F5F5F5] outline-none"
                type="text"
                required
                id="streetAddress"
                name="streetAddress"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#6b6b6b]" htmlFor="apartment">
                Apartment, Floor etc.(optional)
              </label>
              <input
                className="border py-1 px-1 text-[#6b6b6b] bg-[#F5F5F5] outline-none"
                type="text"
                id="apartment"
                name="apartment"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#6b6b6b]" htmlFor="town">
                Town/City
              </label>
              <input
                className="border py-1 px-1 text-[#6b6b6b] bg-[#F5F5F5] outline-none"
                type="text"
                required
                id="town"
                name="town"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#6b6b6b]" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                className="border py-1 px-1 text-[#6b6b6b] bg-[#F5F5F5] outline-none"
                type="number"
                required
                id="phoneNumber"
                name="phoneNumber"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#6b6b6b]" htmlFor="email">
                Email Address
              </label>
              <input
                className="border py-1 px-1 text-[#6b6b6b] bg-[#F5F5F5] outline-none"
                type="text"
                required
                id="email"
                name="email"
              />
            </div>
            <div className="flex items-center mt-5 mb-5 gap-2">
              <input type="checkbox" className="py-1" />
              <span className="text-xs">
                Save this information for faster checkout next time.
              </span>
            </div>
          </div>

          <div className="right flex flex-col w-[40%]">
            <div className="products flex flex-col justify-center gap-3 w-[80%]">
              {state.cart.map((item) => (
                <div className="flex justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-[30px] h-[30px]"
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <div className="text-sm font-bold">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="price flex flex-col gap-4 mt-6 w-[80%]">
              <div className="border-b-2 border-b-[#bababa] flex justify-between">
                <span className="text-sm ">Subtotal: </span>
                <span className="text-sm font-semibold">
                  ${calcTotalPrice()}
                </span>
              </div>
              <div className="border-b-2  border-b-[#bababa] flex justify-between">
                <span className="text-sm">Shipping: </span>
                <span className="text-sm font-semibold">{"Free"}</span>
              </div>
              <div className=" flex justify-between mt-2">
                <span className="text-sm font-semibold">Total: </span>
                <span className="text-sm font-semibold">
                  ${calcTotalPrice()}
                </span>
              </div>
            </div>

            <div className="paymentMethod flex flex-col justify-center gap-2 mt-5  w-[80%]">
              <div className="flex justify-between gap-2 ">
                <span className="flex gap-2 items-center">
                  <input type="radio" name="paymentmethod" />
                  <label htmlFor="bank">Bank</label>
                </span>
                <img src="/img/bank-logo.png" className="w-[120px]" alt="" />
              </div>
              <div className="flex gap-2 items-center text-sm">
                <input type="radio" name="paymentmethod" id="cashondelivery" />
                <label htmlFor="cashondelivery">Cash on delivery</label>
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-1 sm:gap-3 mt-5">
              <input
                type="text"
                className="flex-grow px-3 border border-black h-9"
              />
              <button className="bg-red-500 px-2 w-100 h-9 py-1 text-white text-sm rounded">
                Apply coupon
              </button>
            </div>
            <button className="bg-red-500 self-start py-2 px-4 text-white text-sm rounded mt-5">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
