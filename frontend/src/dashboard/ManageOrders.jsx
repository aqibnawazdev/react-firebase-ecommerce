import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../globalContext/GlobalContext";
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.config";
import { showToastMessage } from "../utils/showToast";

function ManageOrders() {
  const { state, dispatch } = useContext(GlobalContext);
  const [orderStatus, setOrderStatus] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [orders, setOrders] = useState(null);
  const ordersRef = collection(db, "orders");
  useEffect(() => {
    const unsub = onSnapshot(ordersRef, (querySnapshot) => {
      const orders = [];
      querySnapshot.forEach((doc) => {
        const order = {
          orderId: doc.id,
          ...doc.data(),
        };
        orders.push(order);
      });
      //   dispatch({ type: "ORDERS_FETCH", payload: orders });
      setOrders(orders);
    });
    () => {
      return unsub;
    };
  }, []);
  console.log(orderStatus);
  console.log("PaymentStatus", orderStatus);
  const handleOrderUpdate = async (orderId) => {
    console.log(orderId);
    const orderRef = doc(db, "orders", orderId);

    try {
      await updateDoc(orderRef, {
        orderStatus: orderStatus,
        paymentStatus: paymentStatus,
        updatedAt: Date.now(),
      });
      showToastMessage({ type: "success", message: "Order updated...!" });
    } catch (error) {
      showToastMessage({ type: "fail", message: error.message });
    }
  };
  const orderChange = (e) => {
    console.log("value", e.target.value);
    setOrderStatus(e.target.value);
  };
  return (
    <div className="w-full ">
      <div className="mt-10 flex flex-col ">
        <div className="flex justify-between items-center w-[90%] mb-2 ">
          <h2 className="font-bold text-2xl border-b-2 border-b-red-500 ">
            All Orders
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
                Pay method
              </th>
              <th scope="col" className="py-3">
                Payment status
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
            {orders?.map((o) => (
              <tr key={o.orderId} className="items-start w-full shadow-sm">
                <td scope="col" className=" py-1">
                  {o.orderId}
                </td>
                <td scope="col" className="  py-1">
                  {o.createdAt.toDate().toLocaleDateString()}
                </td>
                <td scope="col" className="py-1">
                  {o.method}
                </td>

                <td scope="col" className="py-1">
                  <div className="w-[20px] h-full text-sm">
                    <select
                      name="paymentStatus"
                      id=""
                      value={paymentStatus || o.paymentStatus}
                      onChange={(e) => setPaymentStatus(e.target.value)}
                    >
                      <option value={o.paymentStatus}>{o.paymentStatus}</option>
                      <option
                        value={o.paymentStatus === "paid" ? "pending" : "paid"}
                      >
                        {o.paymentStatus === "paid" ? "pending" : "paid"}
                      </option>
                    </select>
                  </div>
                </td>
                <td scope="col" className="text-sm py-1">
                  <select
                    name="orderStatus"
                    id=""
                    onChange={orderChange}
                    value={orderStatus || o.orderStatus}
                  >
                    <option value={o.orderStatus}>{o.orderStatus}</option>
                    <option
                      value={
                        o.orderStatus === "accepted" ? "pending" : "accepted"
                      }
                    >
                      {o.orderStatus === "accepted" ? "pending" : "accepted"}
                    </option>
                  </select>
                </td>
                <td scope="col" className="py-1">
                  <div className="w-[20px] h-full text-sm">${o.totalPrice}</div>
                </td>
                <td scope="col" className="py-1">
                  <button
                    className=" text-[13px] bg-red-500 text-white py-1 px-2 hover:bg-red-800 rounded"
                    onClick={() => handleOrderUpdate(o.orderId)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageOrders;
