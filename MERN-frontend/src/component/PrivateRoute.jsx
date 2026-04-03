import React from "react";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return children;
}

export default PrivateRoute;
