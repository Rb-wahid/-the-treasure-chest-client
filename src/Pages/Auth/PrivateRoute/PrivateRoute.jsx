import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase.init";
import useUserEmail from "../../hooks/useUserEmail";
import Spinner from "../../Shared/Spinner/Spinner";
import EmailVerification from "../EmailVerification/EmailVerification";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [email, loadingUser] = useUserEmail();
  let location = useLocation();

  if (!email && !loadingUser) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  if (loading || loadingUser) {
    return <Spinner />;
  }
  console.log(user?.emailVerified);
  if (!user?.emailVerified) {
    return <EmailVerification email={email} />;
  }

  return children;
};

export default PrivateRoute;
