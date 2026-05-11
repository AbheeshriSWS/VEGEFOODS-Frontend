import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        border border-gray-100
        shadow-sm
        p-6
        transition-all
        hover:shadow-md
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;