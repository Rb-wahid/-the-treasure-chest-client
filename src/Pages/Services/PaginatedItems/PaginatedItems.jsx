import axios from "axios";
import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";
import Spinner from "../../Shared/Spinner/Spinner";
import useInventories from "../../hooks/useInventories";

const PaginatedItems = () => {
  const [url, setUrl] = useState("");
  const [itemPerPage, setItemPerPage] = useState(6);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [inventories = [], error] = useInventories(url);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://the-treasure-chest.herokuapp.com/inventorycount")
      .then(({ data: { count } }) => {
        const tPage = Math.ceil(count / itemPerPage);
        if (tPage < totalPage) {
          setCurrentPage(tPage - 1);
        }
        setTotalPage(tPage);
      });
    setUrl(
      `https://the-treasure-chest.herokuapp.com/getInventory?page=${currentPage}&count=${itemPerPage}`
    );

    setIsLoading(false);
  }, [itemPerPage, currentPage, totalPage]);

  if (isLoading) return <Spinner />;
  if (error) {
    return <p className="mt-12 text-center text-red-700">{error.message}</p>;
  }
  return (
    <section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-4 mt-12 gap-8 md:gap-x-12">
          {inventories.map((inventory) => (
            <Inventory
              key={inventory._id}
              isLoading={isLoading}
              inventory={inventory}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center my-8">
        <button
          onClick={() => {
            currentPage - 1 >= 0 && setCurrentPage(currentPage - 1);
          }}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-3 mx-2 py-2 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Prev
        </button>
        {[...Array(totalPage).keys()].map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className={` 
               font-medium text-xl px-2 border-2 mx-px rounded-md ${
                 currentPage === number
                   ? "bg-blue-500 text-gray-50"
                   : "text-blue-500 bg-gray-50"
               }`}
            key={Math.random() + "" + number}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => {
            currentPage + 1 < totalPage && setCurrentPage(currentPage + 1);
          }}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-3 mx-2 py-2 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Next
        </button>
        <div>
          <label className="font-semibold" htmlFor="">
            Per Page -{" "}
          </label>
          <select
            onChange={(e) => setItemPerPage(e.target.value)}
            className="py-1 ml-2 rounded-md px-2"
          >
            <option selected value="6">
              6
            </option>
            <option value="12">12</option>
            <option value="18">18</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default PaginatedItems;
