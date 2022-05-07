import React from "react";
import Footer from "../Shared/Footer/Footer";
import Inventories from "../Services/Inventories/Inventories";
import ContactUs from "./ContactUs/ContactUs";
import Facilities from "./Facilities/Facilities";
import header from "../../assets/header.avif";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative flex items-center justify-center">
        <img
          className=" w-full h-[400px] backdrop-contrast-200 blur-[2px]"
          src={header}
          alt=""
        />
        <h2 className="border-b-2 text-6xl font-bold font-sans  absolute text-center animate-headShake  italic px-6 py-3 shadow-lg shadow-cyan-500/50 backdrop-blur-sm text-gray-50 ">
          Welcome to{" "}
          <span className=" backdrop-blur-sm ">THE TREASURE CHEST ...</span>
        </h2>
      </div>
      <div className="border-y-2 my-10">
        <h2 className="py-6 text-center text-4xl font-bold text-sky-500 italic">
          Inventory Items
        </h2>
      </div>
      <Inventories size={6} />
      <div className="flex space-x-2 justify-center">
        <button
          onClick={() => navigate(`/manageinventories`)}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-3 font-semibold bg-blue-600 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Manage Inventories
        </button>
      </div>
      <Facilities />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
