import React, { useState } from "react";
import brand from "../../../assets/logo//brand.png";
import CustomLink from "../CustomLink/CustomLink";
import "tw-elements";
import { Link } from "react-router-dom";
import auth from "../../../Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [click, setClick] = useState(false);
  const [user, loadingUser] = useAuthState(auth);
  return (
    <div className={`${loadingUser ? "hidden" : "block"}`}>
      <nav
        className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-2
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            onClick={() => setClick(!click)}
            className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <Link
              className=" hidden
        md:flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      "
              to="/"
            >
              <img
                className="pb-2"
                src={brand}
                style={{ height: "60px", width: "145px" }}
                alt=""
                loading="lazy"
              />
            </Link>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <CustomLink
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/"
                >
                  Home
                </CustomLink>
              </li>

              <li className="nav-item p-2">
                <CustomLink
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/manageinventories"
                >
                  Manage Inventories
                </CustomLink>
              </li>

              <li className="nav-item p-2">
                <CustomLink
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/blogs"
                >
                  Blogs
                </CustomLink>
              </li>
            </ul>
          </div>
          {/* <!-- Collapsible wrapper -->

  <!-- Right elements --> */}
          {/* for mobile */}
          <div className={`${click ? "hidden" : ""}`}>
            <Link
              className=" md:hidden
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      "
              to="/"
            >
              <img
                src={brand}
                style={{ height: "65px", width: "110px" }}
                alt=""
                loading="lazy"
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="flex flex-col md:flex-row relative">
              {user ? (
                <>
                  <div className="nav-item p-2">
                    <CustomLink
                      className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                      to="/myitems"
                    >
                      My Items
                    </CustomLink>
                  </div>
                  <div className="nav-item p-2">
                    <CustomLink
                      className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                      to="/inventoryreport"
                    >
                      Inventory Report
                    </CustomLink>
                  </div>
                  <div className="nav-item p-2">
                    <CustomLink
                      className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                      to="/about"
                    >
                      About
                    </CustomLink>
                  </div>
                  <div className="nav-item p-2">
                    <Link
                      className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                      to="/"
                      onClick={() => signOut(auth)}
                    >
                      Sign Out
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="nav-item p-2">
                    <CustomLink
                      className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                      to="/about"
                    >
                      About
                    </CustomLink>
                  </div>
                  <div className="nav-item p-2">
                    <CustomLink
                      className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                      to="/signin"
                    >
                      Sign In
                    </CustomLink>
                  </div>

                  <div className="nav-item p-2">
                    <CustomLink
                      className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                      to="/signup"
                    >
                      Sign Up
                    </CustomLink>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
