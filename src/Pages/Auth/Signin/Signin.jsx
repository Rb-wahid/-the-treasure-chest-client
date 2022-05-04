import React, { useRef, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import Spinner from "../../Shared/Spinner/Spinner";

const Signin = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [
    signInWithEmailAndPassword,
    userEmailPass,
    loadingEmailPass,
    errorEmailPass,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorResetPass] =
    useSendPasswordResetEmail(auth);
  const [user, loadingUser, errorUser] = useAuthState(auth);
  const [hasEmail, setHasEmail] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  let error = errorUser || errorEmailPass || errorResetPass;
  let isLoading = loadingEmailPass || loadingUser || sending;

  const handleSignin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };

  const handleResetPass = async () => {
    const email = emailRef.current.value;
    console.log("email", email);
    if (!email) {
      setHasEmail(false);
    } else {
      setHasEmail(true);
      await sendPasswordResetEmail(email);
    }
  };
  if (isLoading) return <Spinner />;

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <section>
      <div className="container px-6 py-12 h-full">
        <div className="flex flex-col justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <h2 className="px-6 py-3 font-semibold text-xl md:text-4xl italic hover:not-italic text-blue-500 mb-5 md:mb-10 md:shadow-lg shadow-slate-200">
            THE TREASURE CHEST
          </h2>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={async (e) => handleSignin(e)}>
              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  ref={emailRef}
                  type="text"
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

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className={`inline-block px-7 py-3  text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ${
                  hasEmail ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400"
                }`}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                disabled={!hasEmail}
              >
                Sign In
              </button>

              {/* Handle error why click forgot password btn without email */}
              {!hasEmail && (
                <p className="mt-3 animate-pulse text-center form-group form-check mb-3 text-red-600 hover:text-red-700 focus:text-red-700 ">
                  Enter your email first
                </p>
              )}
              <div className="flex flex-col md:flex-row justify-evenly items-center mt-5">
                <Link
                  to="#!"
                  onClick={async () => handleResetPass()}
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </Link>
                <p className="mt-3 md:mt-0 text-sm font-semibold">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="pl-2 text-md text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
