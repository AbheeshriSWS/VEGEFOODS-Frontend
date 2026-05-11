import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/User";
import AddUser from "../pages/Users/AddUser";
import Settings from "../pages/Settings/Settings";


const AdminRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} />

      <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />

      <Route path="/users" element={<AdminLayout><Users /></AdminLayout>} />

      <Route path="/users/add" element={<AdminLayout><AddUser /></AdminLayout>} />

      <Route path="/settings" element={<AdminLayout><Settings /></AdminLayout>} />

      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />

    </Routes>
  );
};

export default AdminRoutes;