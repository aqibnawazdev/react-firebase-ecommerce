import React, { useEffect } from "react";
import { useContext, useReducer, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/firebase.config";
import { collection, query, onSnapshot } from "firebase/firestore";

const initialState = {
  cart: [],
  adminClaim: null,
  cartItemCount: 0,
  currentUser: {},
  proudcts: [],
};

export const GlobalContext = createContext("");
const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartItemCount: state.cartItemCount + action.payload.num,
      };
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        cartItemCount: state.cartItemCount - action.payload.num,
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "AUTH_STATE_CHANGE":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "ADMIN_CLAIM":
      return {
        ...state,
        adminClaim: action.payload,
      };
    case "PRODUCT_FETCH":
      return {
        ...state,
        products: action.payload,
      };
    case "ORDERS_FETCH":
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

const GolbalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const productRef = collection(db, "products");
  const ordersRef = collection(db, "orders");
  useEffect(() => {
    const unsubscribe = onSnapshot(productRef, (querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        const product = {
          pId: doc.id,
          ...doc.data(),
        };
        products.push(product);
      });
      dispatch({ type: "PRODUCT_FETCH", payload: products });
    });

    const userdata = JSON.parse(localStorage.getItem("user"));
    if (userdata) {
      dispatch({ type: "AUTH_STATE_CHANGE", payload: userdata });
    }
    () => {
      return unsubscribe;
    };
  }, [state.currentUser.uid]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GolbalContextProvider;
