import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Navbar = ({ onToggle }) => {

    const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const confirmLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };
  

  return (
    <div className="purple-navbar">
      <div className="d-flex">
        <button
        className="btn btn-light me-2"
        onClick={onToggle}
      >
        ☰
      </button>

      <div className="purple-search">

        <i className="mdi mdi-magnify"></i>

        <input
          type="text"
          placeholder="Search projects"
        />

      </div>
      </div>

      <div className="purple-nav-right">

        <button className="purple-icon-btn" onClick={() => toast.success("Mail clicked")}>
          <i className="mdi mdi-email-outline"></i>
        </button>

        <button className="purple-icon-btn" onClick={() => toast.success("No Notifications")}>
          <i className="mdi mdi-bell-outline"></i>
        </button>

        <button className="purple-icon-btn" onClick={() => setShowLogoutModal(true)}>
          <i className="mdi mdi-power"></i>
        </button>

      </div>


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

export default Navbar;