import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Users from "../pages/Users";
import Orders from "../pages/Orders";
import Forms from "../pages/Forms";
import Settings from "../pages/Settings";
import AdminLogin from "../pages/AdminLogin";

import AddUser from "../pages/AddUser";

import ProtectedAdmin from "./ProtectedAdmin";


const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route
        path="dashboard"
        element={
          <ProtectedAdmin>
            <Dashboard />
          </ProtectedAdmin>
        }
      />
      <Route
        path="products"
        element={
          <ProtectedAdmin>
            <Products />
          </ProtectedAdmin>
        }
      />
      <Route
        path="users"
        element={
          <ProtectedAdmin>
            <Users />
          </ProtectedAdmin>
        }
      />
      
      <Route
        path="orders"
        element={
          <ProtectedAdmin>
            <Orders />
          </ProtectedAdmin>
        }
      />

      <Route
        path="settings"
        element={
          <ProtectedAdmin>
            <Settings />
          </ProtectedAdmin>
        }
      />

      <Route
        path="users/add"
        element={
          <ProtectedAdmin>
            <AddUser />
          </ProtectedAdmin>
        }
      />

      <Route
        path="login"
        element={
            <AdminLogin />
        }
      />
      </Route>
        
    </Routes>
  );
};

export default AdminRoutes;