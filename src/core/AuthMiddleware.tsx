import React from "react";
import { Navigate } from "react-router-dom";

const AuthMiddleware = ({ children } : { children: JSX.Element }) => {
  if (!localStorage.getItem("authUser")) {
    return (
      <Navigate to={{pathname: "/auth/login"}} />
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthMiddleware;
