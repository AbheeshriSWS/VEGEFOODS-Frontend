import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ( { collapsed } ) => {
  const navigate = useNavigate();

  return (
    <div className={`purple-sidebar ${collapsed ? "collapsed" : ""}`} id="sidebar">

      {/* PROFILE */}

      <div className="purple-profile">
        <img
          src="https://i.pravatar.cc/100"
          alt=""
        />

        <div>
          <h6>David Grey. H</h6>
          <span>Project Manager</span>
        </div>
      </div>

      {/* MENU */}

      <ul>

        <li>
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <i className="mdi mdi-home"></i>
            <span className="menu-title">Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <i className="mdi mdi-package-variant"></i>
            <span className="menu-title">Products</span>
            
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <i className="mdi mdi-cart"></i>
            <span className="menu-title">Orders</span>
            
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <i className="mdi mdi-account-group"></i>
            <span className="menu-title">Users</span>
            
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <i className="mdi mdi-cog"></i>
            <span className="menu-title">Settings</span>
            
          </NavLink>
        </li>
          
      </ul>
    </div>
  );
};

export default Sidebar;