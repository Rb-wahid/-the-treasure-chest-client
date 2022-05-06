import React from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import Spinner from "../../Shared/Spinner/Spinner";
import Inventory from "../Inventory/Inventory";

const Inventories = ({ size }) => {
  let [items = [], isError, isLoading] = useInventories();
  const navigate = useNavigate();
  console.log("loading", isLoading);
  if (isLoading) return <Spinner />;
  if (size) {
    items = items.slice(0, size);
  }
  const error = isError;
  return (
    <div className=" md:max-w-7xl md:m-auto  md:my-12">
      {error ? (
        <p className=" text-center text-red-700">{error.message}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-4 mt-12 gap-8 md:gap-x-12">
            {items.map((inventory) => (
              <Inventory
                key={inventory._id}
                isLoading={isLoading}
                inventory={inventory}
              />
            ))}
          </div>
          <div className="flex space-x-2 justify-center mt-8">
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
        </>
      )}
    </div>
  );
};

export default Inventories;
