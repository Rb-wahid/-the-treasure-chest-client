//import "./styles.css";
import React from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

export default function MyPieChart({
  data: { totalInvest, totalSold, myTotalInvest, myTotalSold },
}) {
  const data02 = [
    { name: "Total Invest", value: +totalInvest },
    { name: "Total sold", value: +totalSold },
  ];
  const data01 = [
    { name: "My Invest", value: +myTotalInvest },
    { name: "My Sold", value: +myTotalSold },
  ];
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data01}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={data02}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
