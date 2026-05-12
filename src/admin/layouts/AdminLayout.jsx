import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/admin.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AdminLayout = () => {
  return (
    <div className="purple-admin">

      <Sidebar />

      <div className="purple-main">

        <Navbar />

        <div className="purple-content">
          <Outlet />
        </div>
        <Footer />
      </div>

    </div>
  );
};

export default AdminLayout;