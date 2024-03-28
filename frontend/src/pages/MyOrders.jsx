import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../globalContext/GlobalContext";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firebase.config";

function MyOrders() {
  const { state } = useContext(GlobalContext);
  const [myOrders, setMyOrders] = useState([]);
  const orderRef = collection(db, "orders");
  const q = query(orderRef, where("user.userId", "==", state.currentUser.uid));

  useEffect(() => {
    const unsub = onSnapshot(q, (querySnapshot) => {
      const orders = [];
      querySnapshot.forEach((doc) => {
        const order = {
          orderId: doc.id,
          ...doc.data(),
        };
        orders.push(order);
      });
      setMyOrders(orders);
    });
    () => {
      return unsub;
    };
  }, []);
  console.log(myOrders);

  const handleOrderCancel = (orderId) => {};
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%]">
        <div className="mt-10 flex flex-col ">
          <div className="flex justify-between items-center w-[90%] mb-2 ">
            <h2 className="font-bold text-2xl border-b-2 border-b-red-500 ">
              My Orders
            </h2>
          </div>

          <table className="table-auto w-[90%] overflow-x-auto text-left">
            <thead className="shadow-sm ">
              <tr className=" bg-gray-100 m-5">
                <th scope="col" className="py-3 px-2">
                  OrderId
                </th>
                <th scope="col" className="py-3">
                  Order date
                </th>
                <th scope="col" className="py-3">
                  Order status
                </th>
                <th scope="col" className="py-3">
                  Total Amount
                </th>
                <th scope="col" className="py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="mt-6">
              {myOrders?.map((o) => (
                <tr key={o.orderId} className="items-start w-full shadow-sm">
                  <td scope="col" className=" py-1">
                    {o.orderId}
                  </td>
                  <td scope="col" className="  py-1">
                    {o.createdAt.toDate().toLocaleDateString()}
                  </td>

                  <td
                    scope="col"
                    className={`text-sm py-1 +
                      ${
                        o.orderStatus === "pending"
                          ? "text-red-500"
                          : "text-green-700"
                      }`}
                  >
                    {o.orderStatus}
                  </td>
                  <td scope="col" className="py-1">
                    <div className="w-[20px] h-full text-sm">
                      ${o.totalPrice}
                    </div>
                  </td>
                  <td scope="col" className="py-1">
                    <button
                      className=" text-[13px] bg-red-500 text-white py-1 px-2 hover:bg-red-800 rounded"
                      onClick={() => handleOrderCancel(o.orderId)}
                    >
                      Cancel Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
