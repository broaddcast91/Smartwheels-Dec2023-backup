import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import Sidebar from "../../components/admin/Sidebar";

function Dashboard() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex-auto">
        <AdminNavbar />
        <span className="text-center strong"><h2>Total number of records</h2></span>
      </div>
    </div>
  );
}

export default Dashboard;
