import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Users from "../pages/Users";
import Orders from "../pages/Orders";
import Settings from "../pages/Settings";
import AddUser from "../pages/AddUser";
import AdminLogin from "../pages/AdminLogin";

import ProtectedAdmin from "./ProtectedAdmin";

const AdminRoutes = () => {
  return (
    <Routes>

      {/* LOGIN OUTSIDE LAYOUT */}
      <Route path="login" element={<AdminLogin />} />

      {/* ADMIN LAYOUT ROUTES */}
      <Route element={<AdminLayout />}>

        {/* THIS FIXES /admin BLANK PAGE */}
        <Route
          index
          element={<ProtectedAdmin><Dashboard /></ProtectedAdmin>}
        />

        <Route
          path="dashboard"
          element={<ProtectedAdmin><Dashboard /></ProtectedAdmin>}
        />

        <Route
          path="products"
          element={<ProtectedAdmin><Products /></ProtectedAdmin>}
        />

        <Route
          path="users"
          element={<ProtectedAdmin><Users /></ProtectedAdmin>}
        />

        <Route
          path="users/add"
          element={<ProtectedAdmin><AddUser /></ProtectedAdmin>}
        />

        <Route
          path="orders"
          element={<ProtectedAdmin><Orders /></ProtectedAdmin>}
        />

        <Route
          path="settings"
          element={<ProtectedAdmin><Settings /></ProtectedAdmin>}
        />

      </Route>

    </Routes>
  );
};

export default AdminRoutes;