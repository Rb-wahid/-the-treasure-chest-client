import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase.init";

const PrivateRoute = ({ children }) => {
  const [user, loadingUser] = useAuthState(auth);
  let location = useLocation();

  if (!user && !loadingUser) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
