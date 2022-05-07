import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialSignin from "../SocialSignin/SocialSignin";
import Spinner from "../../Shared/Spinner/Spinner";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isChecked, setIsChecked] = useState(false);
  const [
    createUserWithEmailAndPassword,
    userEmailPass,
    loadingEmailPass,
    errorEmailPass,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorUpdateProfile] = useUpdateProfile(auth);

  const [token] = useToken(userEmailPass);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    try {
      await createUserWithEmailAndPassword(emailValue, passwordValue);
      await updateProfile({ displayName: nameValue });
    } catch (err) {
      console.log(err);
    }
  };

  let error = errorEmailPass || errorUpdateProfile;
  let isLoading = loadingEmailPass || updating;

  useEffect(() => {
    // when got error. Ischecked is true & issue on disabling signup btn.
    // handle that issue
    setIsChecked(false);
  }, [isLoading]);

  if (isLoading) {
    return <Spinner />;
  }

  if (token) {
    navigate("/");
  }

  return (
    <section>
      <div className="container px-6 py-12 h-full">
        <div className="flex flex-col justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <h2 className="px-6 py-3 font-semibold text-xl md:text-4xl italic hover:animate-pulse text-blue-500 mb-5 md:mb-10 md:shadow-lg shadow-slate-200">
            THE TREASURE CHEST
          </h2>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={async (e) => await handleSignUp(e)}>
              <div className="mb-6">
                {/* <!-- Name input --> */}

                <input
                  ref={nameRef}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name"
                  required
                />
              </div>
              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  ref={emailRef}
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  required
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <input
                  ref={passwordRef}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Display Error */}

              {error && (
                <p className="animate-pulse text-center form-group form-check mb-3 text-red-600 hover:text-red-700 focus:text-red-700 ">
                  {error.message}
                </p>
              )}

              <div className="form-group form-check mb-3">
                <input
                  onClick={() => setIsChecked(true)}
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label
                  className={`form-check-label inline-block text-gray-800 transition duration-200 ease-in-out ${
                    !isChecked
                      ? " text-red-600 hover:text-red-700 focus:text-red-700 "
                      : "text-blue-600 border-blue-600"
                  }`}
                  htmlFor="exampleCheck2"
                >
                  Accept term & condition
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className={`inline-block px-7 py-3  text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ${
                  isChecked ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400"
                }`}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                disabled={!isChecked}
              >
                Sign Up
              </button>
              <div className="flex justify-evenly items-center mt-5">
                <p className="text-sm font-semibold">
                  Already have an account?
                  <Link
                    to="/signin"
                    className="pl-2 text-md text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Sign in
                  </Link>
                </p>
              </div>

              <SocialSignin />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
