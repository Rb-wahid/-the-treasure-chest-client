import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import Spinner from "../../Shared/Spinner/Spinner";
import AddInventory from "../AddInventory/AddInventory";
import DisplayInvevtory from "../DisplayInvevtory/DisplayInvevtory";

const ManageInventories = () => {
  let [items, isError, isLoading] = useInventories();

  const [activeForManage, setActiveForManage] = useState(true);
  const [activeForAdd, setActiveForAdd] = useState(false);
  if (isLoading) return <Spinner />;
  const error = isError;

  return (
    <div className="md:max-w-7xl md:mx-auto md:mt-12">
      {error ? (
        <p className=" text-center text-red-700">{error.message}</p>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg">
              <Link
                to="displayinvevtory"
                onClick={() => {
                  setActiveForManage(true);
                  setActiveForAdd(false);
                }}
                className={`
        rounded-l
        px-6
        py-2.5
        text-white
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:bg-blue-800
        transition
        duration-150
        ease-in-out
         ${activeForManage ? "  bg-blue-900 " : "  bg-blue-600 "}
         ${activeForManage ? "   font-semibold" : " font-medium"}
      `}
              >
                Manage Inventories
              </Link>
              <Link
                onClick={() => {
                  setActiveForManage(false);
                  setActiveForAdd(true);
                }}
                to="addinvevtory"
                className={`
        px-6
        py-2.5
        text-white
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:bg-blue-800
        transition
        duration-150
        ease-in-out
        ${activeForAdd ? "  bg-blue-900   " : "  bg-blue-600   "}
          ${activeForManage ? "   font-semibold" : " font-medium"}
      `}
              >
                Add Inventory
              </Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<DisplayInvevtory items={items} />} />
            <Route
              path="displayinvevtory"
              element={<DisplayInvevtory items={items} />}
            />
            <Route path="addinvevtory" element={<AddInventory />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default ManageInventories;
