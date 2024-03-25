import React, { useEffect } from "react";
import { useContext, useReducer, createContext } from "react";
import { product } from "../data";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";

const initialState = {
  cart: [],
  cartItemCount: 0,
  currentUser: {},
};

export const GlobalContext = createContext("");
const GlobalReducer = (state, action) => {
  console.log(action.payload);
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

    default:
      return state;
  }
};
const GolbalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("user"));
    if (userdata) {
      dispatch({ type: "AUTH_STATE_CHANGE", payload: userdata });
    }
  }, [state.currentUser.uid]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GolbalContextProvider;
