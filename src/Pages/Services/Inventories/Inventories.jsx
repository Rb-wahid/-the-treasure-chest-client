import React from "react";
import useInventories from "../../hooks/useInventories";
import Spinner from "../../Shared/Spinner/Spinner";
import Inventory from "../Inventory/Inventory";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";

const Inventories = ({ size }) => {
  let [items = [], isError, isLoading] = useInventories();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (size) {
    items = items.slice(0, size);
  }
  const error = isError;

  if (error?.message?.includes("403") || error?.message?.includes("401")) {
    signOut(auth);
    navigate("/signin");
  }
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
        </>
      )}
    </div>
  );
};

export default Inventories;
