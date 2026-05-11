import React from "react";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="text-2xl font-bold text-[#2f3e2c] mt-2">
            {value}
          </h2>
        </div>

        <div className="text-[#82ae46] text-2xl">
          {icon}
        </div>

      </div>
    </div>
  );
};

export default StatCard;