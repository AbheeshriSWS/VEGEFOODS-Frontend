import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">

      <div className="admin-logo">
        Purple Admin
      </div>

      <ul className="admin-menu">

        <li>
          <NavLink to="/admin/dashboard">
            <i className="mdi mdi-view-dashboard"></i> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/users">
            <i className="mdi mdi-account"></i> Users
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/settings">
            <i className="mdi mdi-cog-outline"></i> Settings
          </NavLink>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;