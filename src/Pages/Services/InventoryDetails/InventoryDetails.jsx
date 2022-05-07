import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSWRConfig } from "swr";
import useInventories from "../../hooks/useInventories";
import useUserEmail from "../../hooks/useUserEmail";
import Spinner from "../../Shared/Spinner/Spinner";
import { signOut } from "firebase/auth";
import auth from "../../../Firebase.init";

const InventoryDetails = () => {
  const { mutate } = useSWRConfig();
  const [email, loadingUser, errorUser] = useUserEmail();
  const { id } = useParams();
  const URL = `https://the-treasure-chest.herokuapp.com/inventory/${id}?email=${email}`;
  let [data = {}, isError, isLoading] = useInventories(URL);

  const [soldItem, setSoldItem] = useState(0);
  const [quantityItm, setQuantityItm] = useState(0);
  const navigate = useNavigate();
  const restockInputRef = useRef("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSoldItem(data.sold);
    setQuantityItm(data.quantity);
  }, [data]);

  const handleRestock = (e) => {
    const inputQuantity = +restockInputRef.current.value;
    if (inputQuantity) {
      const newQuantity = quantityItm + inputQuantity;
      setQuantityItm(newQuantity);
      posting(newQuantity, soldItem);
    }
  };

  const handleDelivered = () => {
    if (quantityItm > 0) {
      const newQuantity = quantityItm - 1;
      const newSold = soldItem + 1;
      setSoldItem(newSold);
      setQuantityItm(newQuantity);
      posting(newQuantity, newSold);
    }
  };

  const posting = async (quantity, sold) => {
    setLoading(true);
    const url = `https://the-treasure-chest.herokuapp.com/updateinventory/${id}?email=${email}`;
    try {
      const { data } = await axios.post(
        url,
        {
          quantity,
          sold,
        },
        {
          headers: {
            auth: `${localStorage.getItem("token")}`,
          },
        }
      );
      if (data.modifiedCount) {
        mutate(URL);
        console.log("use here toast");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const { name, img, price, supplier, description, quantity, sold } = data;
  if (isLoading || loading || loadingUser) return <Spinner />;
  const error = isError || errorUser;

  if (error?.message?.includes("403") || error?.message?.includes("401")) {
    signOut(auth);
    navigate("/signin");
  }

  return (
    <div className="flex flex-col justify-center my-5 max-w-3xl mx-2 md:mx-auto ">
      {error ? (
        <p className=" text-center text-red-700">{error.message}</p>
      ) : (
        <>
          <div>
            <h2 className="text-center font-semibold text-4xl italic md:max-w-2xl my-5">
              {name}
            </h2>
          </div>
          <div className="">
            <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-white shadow-lg pb-3">
              <img
                className="w-full md:h-auto object-cover md:w-52 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={img}
                alt=""
              />
              <div className=" relative p-4 md:p-6 pt-0 flex flex-col justify-start">
                <div className="flex justify-evenly text-gray-700 text-base mb-2 mt-3 md:mt-0">
                  <p className="">PRICE:$ {price}</p>
                  <p className="">QUANTITY: {quantity}</p>
                  <p className="">Sold: {sold}</p>
                </div>
                <p className="text-gray-700 text-base mb-4 text-justify">
                  {description}
                </p>
                <p className=" text-left text-xs font-semibold">
                  SUPPLIER: {supplier}
                </p>
                <div className="flex pb-2 md:p-0 my-5  mx-auto w-full md:w-2/3 md:bottom-6 md:inset-x-0 md:absolute">
                  <input
                    ref={restockInputRef}
                    type="number"
                    min={1}
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    name="restock"
                    id="exampleNumber0"
                    placeholder="Restock the item"
                  />
                  <button
                    onClick={handleRestock}
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    ReStock
                  </button>
                </div>
                <button
                  onClick={handleDelivered}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className=" m-auto md:w-2/3 bottom-0 inset-x-0 absolute  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Delivered
                </button>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 justify-center mt-8">
            <button
              onClick={() => navigate(`/manageinventories`)}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-3  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Manage Inventories
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default InventoryDetails;
