import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ( { collapsed } ) => {
  const navigate = useNavigate();

//   const handleLogout = () => {

//   localStorage.removeItem("admin");

//   navigate("/admin/login");
// };

const [showLogoutModal, setShowLogoutModal] = useState(false);

const confirmLogout = () => {
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
  onClick={() => setShowLogoutModal(true)}
>
  Logout
</button>
          
      </ul>


      {showLogoutModal && (
  <div
    className="modal d-block"
    style={{ background: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog">
      <div className="modal-content p-3">

        <h5>Confirm Logout</h5>
        <p>Are you sure you want to logout?</p>

        <div className="d-flex justify-content-end gap-2">

          <button
            className="btn btn-secondary"
            onClick={() => setShowLogoutModal(false)}
          >
            Cancel
          </button>

          <button
            className="btn btn-danger"
            onClick={confirmLogout}
          >
            Logout
          </button>

        </div>

      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Sidebar;