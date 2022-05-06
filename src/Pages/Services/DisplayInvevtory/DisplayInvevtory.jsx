import React, { useState } from "react";
import Spinner from "../../Shared/Spinner/Spinner";
import TableData from "../TableData/TableData";
import TableHead from "../TableHead/TableHead";

const DisplayInvevtory = ({ items }) => {
    const [loading, setLoading] = useState(false);
  const tableHeadData = [
    "#",
    "_ID",
    "NAME",
    "PRICE",
    "QUANTITY",
    "SOLD",
    "ACTION",
  ];
  if(loading) return <Spinner/>
  return (
    <div className="md:max-w-7xl md:mx-auto md:mt-12">
      <div className="flex flex-col my-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b bg-gray-800">
                  <tr>
                    {tableHeadData.map((data) => (
                      <TableHead key={Math.random() + "" + data} data={data} />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr
                      key={item._id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 "
                    >
                      <TableData
                        setLoading={setLoading}
                        item={item}
                        index={index + 1}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayInvevtory;
