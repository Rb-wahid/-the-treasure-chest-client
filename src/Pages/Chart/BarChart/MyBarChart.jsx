import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



export default function MyBarChart({
  data: { totalInvest, totalSold, myTotalInvest, myTotalSold },
}) {
  const data = [
    {
      name: "Invest",
      totalInvest,
      totalSold,
    },
    {
      name: "Sold",
      myTotalSold,
      myTotalInvest,
    },
  ];
  return (
    <BarChart
      width={500}
      height={600}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="myInvest" fill="#2299d8" />
      <Bar dataKey="mySold" fill="#7784d8" />
      <Bar dataKey="totalInvest" fill="#82ha9d" />
      <Bar dataKey="totalSold" fill="#82ca9d" />
    </BarChart>
  );
}
