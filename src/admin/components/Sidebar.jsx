import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="purple-sidebar">

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
            Dashboard
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
            Products
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
            Orders
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
            Users
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/forms"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <i className="mdi mdi-form-select"></i>
            Forms
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
            Settings
          </NavLink>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;