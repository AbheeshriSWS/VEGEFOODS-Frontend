import { toast } from "react-toastify";


const Navbar = ({ onToggle }) => {
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

        <button className="purple-icon-btn" onClick={() => toast.success("Powering Off")}>
          <i className="mdi mdi-power"></i>
        </button>

      </div>

    </div>
  );
};

export default Navbar;