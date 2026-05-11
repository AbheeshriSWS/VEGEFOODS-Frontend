import React from "react";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Header from "../components/layout/Header/Header";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#f7f9f4]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <Header />

        {/* CONTENT AREA */}
        <main className="p-6 bg-[#f7f9f4] min-h-screen">
          {children}
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;