import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

const AdminRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} />

      <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />

      <Route path="/users" element={<AdminLayout><h1>Users</h1></AdminLayout>} />

      <Route path="/settings" element={<AdminLayout><h1>Settings</h1></AdminLayout>} />

      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />

    </Routes>
  );
};

export default AdminRoutes;