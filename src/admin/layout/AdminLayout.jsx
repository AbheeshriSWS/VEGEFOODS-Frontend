import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import "../assets/styles/main.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="admin-main">

        <Header />

        <div className="admin-content">
          {children}
        </div>

        <footer className="admin-footer">
          © 2026 Purple Admin Clone
        </footer>

      </div>

    </div>
  );
};

export default AdminLayout;