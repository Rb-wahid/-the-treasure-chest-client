import React from "react";
import { useNavigate } from "react-router-dom";

const Inventory = ({
  inventory: { _id, name, img, price, quantity, supplier, description, sold },
}) => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h5 className="text-blue-500 text-2xl font-semibold pb-2 rounded-lg bg-white shadow-sm italic hover:animate-pulse">
        {name}
      </h5>
      <div className="flex justify-center my-5 hover:animate-pulse">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className="w-full h-96 md:h-auto object-cover md:w-52 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={img}
            alt=""
          />

          <div className="p-6 flex flex-col justify-start relative">
            <div className="flex justify-evenly">
              <p className=" mb-4 font-semibold text-base text-blue-500">
                PRICE: <span className="text-red-500">${price}</span>
              </p>
              <p className="text-blue-500 font-semibold text-base mb-4">
                QUANTITY: <span className="text-red-500">{quantity}</span>
              </p>
              <p className="text-blue-500 text-base mb-4 font-semibold">
                SOLD: <span className="text-red-500">{sold}</span>
              </p>
            </div>
            <p className="text-gray-700 text-base mb-4 text-justify">
              {description}
            </p>
            <p className=" text-left text-xs  text-gray-500">
              SUPPLIER: <span className="font-semibold">@{supplier}</span>
            </p>
            <div className="mt-3 flex space-x-2 justify-center w-full absolute bottom-0 mb-2">
              <button
                onClick={() => navigate(`/inventorydetails/${_id}`)}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Stock Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
