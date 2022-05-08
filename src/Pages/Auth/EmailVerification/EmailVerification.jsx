import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebase.init";

const EmailVerification = ({ email }) => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const handleEmailVerification = async () => {
    await sendEmailVerification();

    toast.success("Send verification link", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {error ? (
        <p className=" text-center text-red-700">{error.message}</p>
      ) : (
        <>
          <div>
            <h2 className="mt-8 mb-4 text-center text-3xl font-semibold text-red-500">
              Verify Your Email
            </h2>
            <input
              type="email"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-500
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput126"
              placeholder="your email"
              name="email"
              defaultValue={email}
              disabled
            />
            <button
              type="button"
              onClick={handleEmailVerification}
              className="
            mt-3
      w-full
      px-6
      py-2.5
      bg-green-600
      text-gray-50
      font-medium
      hover:font-semibold
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-green-700 hover:shadow-lg
      focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Send Email Verification Link
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailVerification;
