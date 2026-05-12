import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/admin.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`purple-admin ${collapsed ? "collapsed" : ""}`}>

      <ToastContainer />

      <Sidebar collapsed={collapsed} />

      <div className="purple-main">

        <Navbar onToggle={() => setCollapsed(!collapsed)} />

        <div className="purple-content">
          <Outlet />
        </div>
        <Footer />
      </div>

    </div>
  );
};

export default AdminLayout;