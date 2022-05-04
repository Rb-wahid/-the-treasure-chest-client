import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/logo/bg.svg";
import dog from "../../../assets/logo/dog.png";
import error from "../../../assets/logo/error.png";
import neutral from "../../../assets/logo/neutral.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Not Found page for Desk top */}
      <div className=" hidden md:block -mt-24 w-screen h-screen object-cover  relative bg-[#A0C3D2]">
        <div className="h-screen flex justify-center text-6xl font-extrabold md:pt-56">
          Woof, something went wrong!
          <button
            onClick={() => navigate("/")}
            type="button"
            class="absolute mt-36 inline-block px-10 py-5 bg-black text-white font-bold text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Back To Home
          </button>
        </div>
        <div></div>
        <img className=" absolute  bottom-0 -left-5" src={bg} alt="" />
        <img
          className=" absolute md:w-96 right-36 bottom-36"
          src={dog}
          alt=""
        />
        <div className="flex justify-center ">
          <img
            className=" absolute md:w-96 bottom-0 left-48"
            src={error}
            alt=""
          />
        </div>
        <img
          className="rotate-90 absolute md:w-96 -left-28 bottom-36 top-72"
          src={neutral}
          alt=""
        />
      </div>
    </>
  );
};

export default NotFound;
