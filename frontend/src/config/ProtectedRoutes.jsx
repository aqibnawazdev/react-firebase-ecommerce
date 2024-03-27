import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../globalContext/GlobalContext";

export const ProtectAuth = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    user ? setUser(user) : setUser({});
  }, []);
  const userAvailable = Object.keys(user).length > 0;
  if (userAvailable) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export const ProtectDashboard = ({ children }) => {
  const { state } = useContext(GlobalContext);

  if (!state.adminClaim) {
    return <Navigate to={"/"} />;
  }
  return children;
};
