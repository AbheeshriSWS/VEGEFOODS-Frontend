import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = ( { collapsed } ) => {
  const navigate = useNavigate();

  const handleLogout = () => {

  localStorage.removeItem("admin");

  navigate("/admin/login");
};


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

        {/* <li>
          <NavLink
            to="/admin/forms"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <i className="mdi mdi-form-select"></i>
            <span className="menu-title">Forms</span>
            
          </NavLink>
        </li> */}

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

           
            <button
  className="btn btn-danger w-100 mt-4"
  onClick={handleLogout}
>
  Logout
</button>
          
      </ul>

    </div>
  );
};

export default Sidebar;