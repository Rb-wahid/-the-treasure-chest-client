import React from "react";
import { Link } from "react-router-dom";
import MyBarChart from "../Chart/BarChart/MyBarChart";
import MyPieChart from "../Chart/PieChart/MyPieChart";
import useReport from "../hooks/useReport";
import useUserEmail from "../hooks/useUserEmail";
import DynamicTitle from "../Shared/DynamicTitle/DynamicTitle";
const InventoryReport = () => {
  const [email] = useUserEmail();
  const allInventory = "https://the-treasure-chest.herokuapp.com/inventory";
  const myInventory = `https://the-treasure-chest.herokuapp.com/myinventory?email=${email}`;
  const [totalInvest, totalSold] = useReport(allInventory);
  const [myTotalInvest, myTotalSold] = useReport(myInventory);
  const data = { totalInvest, totalSold, myTotalInvest, myTotalSold };

  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <DynamicTitle title={"Report"} />
      <div className="grid grid-cols-2 gap-12">
        <div>
          <p className="text-2xl font-semibold text-sky-600">
            Total Invest:{" "}
            <span className="text-green-500 font-bold">
              {totalInvest}
            </span>
          </p>
          <p className="text-2xl font-semibold text-sky-600">
            My Invest:{" "}
            <span className="text-green-500 font-bold">{myTotalInvest}</span>
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-sky-600">
            Total Sold:{" "}
            <span className="text-green-500 font-bold">{totalSold}</span>
          </p>
          <p className="text-2xl font-semibold text-sky-600">
            My Sold:{" "}
            <span className="text-green-500 font-bold">{myTotalSold}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center my-12">
        <MyBarChart data={data} />
        <div className="mb-20">
          <MyPieChart data={data} />
        </div>
      </div>
      <div className="font-semibold flex justify-center items-center mt-6">
        <span className="text-sky-600 mr-3 text-3xl font-semibold">Go to</span>
        <Link
          to="/manageinventories/addinvevtory"
          type="button"
          className=" inline-block px-6 py-3 bg-black text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Inventory
        </Link>
      </div>
    </div>
  );
};

export default InventoryReport;
