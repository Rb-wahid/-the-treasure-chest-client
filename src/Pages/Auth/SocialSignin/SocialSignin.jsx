import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import { useSignInWithGithub } from "react-firebase-hooks/auth";

const SocialSignin = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }
  return (
    <>
      <div className="flex items-center my-3 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">OR</p>
      </div>
      {error && (
        <p className="animate-pulse text-center form-group form-check mb-3 text-red-600 hover:text-red-700 focus:text-red-700 ">
          {error.message}
        </p>
      )}

      <Link
        onClick={async () => await signInWithGithub()}
        className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{ backgroundColor: "#2D333B" }}
        to="#!"
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <i>
          <BsGithub className="w-4 h-4 mr-2" />
        </i>
        Continue with GitHub
      </Link>
    </>
  );
};

export default SocialSignin;
