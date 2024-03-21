import React from "react";
import { useContext, useReducer, createContext } from "react";
import { product } from "../data";

const initialState = {
  cart: [],
  cartItemCount: 0,
  totalPrice: 0,
};

export const GlobalContext = createContext("");
const GlobalReducer = (state, action) => {
  console.log(action.payload, "payload");
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "CART_ITEM_COUNT":
      return {
        ...state,
        cartItemCount: state.cartItemCount + action.payload.num,
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        ),
      };
    case "UPDATE_TOTAL":
      return {
        ...state,
        totalPrice: state.cart.reduce(
          (total, item) => item.price * item.quantity + total,
          0
        ),
      };
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
const GolbalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  console.log(state);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GolbalContextProvider;
