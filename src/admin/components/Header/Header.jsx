import React from "react";

const Header = () => {
  return (
    <div className="admin-header">

      {/* LEFT SIDE - SEARCH */}
      <div className="header-left">
        <input
          type="text"
          placeholder="Search projects..."
          className="header-search"
        />
      </div>

      {/* RIGHT SIDE - USER */}
      <div className="header-right">
        <i className="mdi mdi-bell-outline icon"></i>

        <div className="user-box">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
          />
          <span>Admin</span>
        </div>
      </div>

    </div>
  );
};

export default Header;