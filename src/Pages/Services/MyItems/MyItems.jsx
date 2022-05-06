import React from "react";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import useUserEmail from "../../hooks/useUserEmail";
import Spinner from "../../Shared/Spinner/Spinner";
import DisplayInvevtory from "../DisplayInvevtory/DisplayInvevtory";

const MyItems = () => {
  const [email, loadingUser, errorUser] = useUserEmail();
  const URL = `https://the-treasure-chest.herokuapp.com/myinventory?email=${email}`;
  let [myItems = [], isError, isLoading] = useInventories(URL);

  if (isLoading || loadingUser) return <Spinner />;

  const error = isError || errorUser;

  return (
    <div>
      {error ? (
        <p className="md:max-w-7xl md:mx-auto md:mt-12 text-center text-red-700">
          {error.message}
        </p>
      ) : myItems.length === 0 ? (
        <div className="h-[300px] flex flex-col justify-center items-center text-3xl font-semibold text-red-500">
          <h1>You are not added any item</h1>
          <div className="font-semibold flex justify-center items-center mt-6">
            <span className="text-black mr-3">Go to</span>
            <Link
              to="/manageinventories/addinvevtory"
              type="button"
              className=" inline-block px-6 py-3 bg-black text-white font-semibold text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
            >
              Add Inventory
            </Link>
          </div>
        </div>
      ) : (
        <>
          <DisplayInvevtory items={myItems} />
        </>
      )}
    </div>
  );
};

export default MyItems;