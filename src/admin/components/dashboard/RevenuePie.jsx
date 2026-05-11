import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Vegetables", value: 45 },
  { name: "Fruits", value: 30 },
  { name: "Dairy", value: 15 },
  { name: "Others", value: 10 }
];

const COLORS = ["#82ae46", "#a3c76d", "#cde6a0", "#e5f2d3"];

const RevenuePie = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />

      </PieChart>
    </ResponsiveContainer>
  );
};

export default RevenuePie;