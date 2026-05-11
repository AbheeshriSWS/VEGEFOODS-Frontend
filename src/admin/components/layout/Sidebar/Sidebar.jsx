import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdPeople, MdSettings, MdInventory } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-white border-r border-gray-100 h-screen p-6 flex flex-col">

      {/* LOGO */}
      <div className="mb-10 px-3">
        <h1 className="text-2xl font-bold text-[#82ae46]">
          VEGEFOODS
        </h1>
        <p className="text-sm text-gray-500">
          Admin Panel
        </p>
      </div>

      {/* NAV */}
      <nav className="flex flex-col gap-2">

        <NavLink to="/admin/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl ${
              isActive ? "bg-[#82ae46] text-white" : "text-gray-600 hover:bg-[#f3f9ec]"
            }`
          }>
          <MdDashboard /> Dashboard
        </NavLink>

        <NavLink to="/admin/users"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl ${
              isActive ? "bg-[#82ae46] text-white" : "text-gray-600 hover:bg-[#f3f9ec]"
            }`
          }>
          <MdPeople /> Users
        </NavLink>

        <NavLink to="/admin/products"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl ${
              isActive ? "bg-[#82ae46] text-white" : "text-gray-600 hover:bg-[#f3f9ec]"
            }`
          }>
          <MdInventory /> Products
        </NavLink>

        <NavLink to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl ${
              isActive ? "bg-[#82ae46] text-white" : "text-gray-600 hover:bg-[#f3f9ec]"
            }`
          }>
          <MdSettings /> Settings
        </NavLink>

      </nav>

    </aside>
  );
};

export default Sidebar;