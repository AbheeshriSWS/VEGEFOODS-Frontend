import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [showLogoutModal, setShowLogoutModal] = useState(false);

 const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location.reload();
};

const confirmLogout = () => {
  setShowLogoutModal(true);
};

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light sticky-top bg-light">
      <div className="container">

        <NavLink className="navbar-brand" to="/">
          Vegefoods
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Shop
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item d-flex align-items-center">
            {user ? (
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span>Welcome {user.username}</span>

                <button className="logout-btn" onClick={confirmLogout}>
                  <i className="mdi mdi-power"></i>
                </button>
              </div>
            ) : (
              <>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? "nav-link active px-2" : "nav-link px-2"
                }
              >
                Sign In
              </NavLink>

              <span className="nav-link px-0 mb-0">/</span>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "nav-link active px-2" : "nav-link px-2"
                }
              >
                Sign Up
              </NavLink>             
            </>
             )}
             </li>

            <li className="nav-item cta cta-colored">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <span className="icon-shopping_cart"></span>[0]
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
      {showLogoutModal && (
  <div className="logout-overlay">
    <div className="logout-modal">
      <h4>Confirm Logout</h4>
      <p>Are you sure you want to logout?</p>

      <div className="logout-actions">
        <button
          className="btn btn-secondary"
          onClick={() => setShowLogoutModal(false)}
        >
          Cancel
        </button>

        <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  </div>
)}
    </nav>
  );
}

export default Navbar;