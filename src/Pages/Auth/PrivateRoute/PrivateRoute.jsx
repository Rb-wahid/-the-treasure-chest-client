import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserEmail from "../../hooks/useUserEmail";

const PrivateRoute = ({ children }) => {
//  const [user, loadingUser] = useAuthState(auth);
  const [email, loadingUser] = useUserEmail()
  let location = useLocation();

  if (!email && !loadingUser) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
