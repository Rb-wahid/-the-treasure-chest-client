import React from "react";

const TableHead = ({ data }) => {
  return (
    <th
      scope="col"
      className="text-sm font-medium text-white px-6 py-4 text-left"
    >
      {data}
    </th>
  );
};

export default TableHead;
