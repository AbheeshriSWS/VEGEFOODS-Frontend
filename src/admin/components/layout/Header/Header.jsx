import React from "react";
import { MdSearch, MdNotifications } from "react-icons/md";

const Header = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6">

      {/* LEFT */}
      <div className="ps-3 pt-2">
        <h2 className="text-lg font-semibold text-[#2f3e2c]">
          Dashboard Overview
        </h2>
        <p className="text-sm text-gray-500">
          Welcome back to VEGEFOODS admin
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 pe-3 pt-2">

        <div className="flex items-center bg-[#f7f9f4] px-3 py-2 rounded-xl">
          <MdSearch />
          <input className="bg-transparent outline-none px-2 text-sm border-none" placeholder="Search..." />
        </div>

        <MdNotifications className="text-xl text-gray-600" />

        <div className="w-9 h-9 rounded-full bg-[#82ae46] text-white flex items-center justify-center py-1 px-2">
          A
        </div>

      </div>

    </header>
  );
};

export default Header;