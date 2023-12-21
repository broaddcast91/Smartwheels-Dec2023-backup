import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [path, setPath] = useState(null);
  useEffect(() => {
    const location = window.location.pathname;
    setPath(location);
  }, []);
  return (
    <div className="w-72 bg-gray-800 text-white">
      <img
        src={require("../../assets/white_logo.png")}
        className="h-20 mx-auto mt-5"
        alt="smartwheels white logo in sidebar"
      />
      <div className="flex flex-col space-y-5 mt-10">
        {/* <Link
          to="/admin/dashboard"
          className={`${
            path === "/admin/dashboard" ? "bg-white text-black" : ""
          } hover:bg-white py-2 pl-5 hover:text-black rounded-l-full`}
        >
          Dashboard
        </Link> */}
     
        <Link
          to="/admin/enquiries"
          className={`${
            path === "/admin/enquiries" ? "bg-white text-black" : ""
          } hover:bg-white py-2 pl-5 hover:text-black rounded-l-full`}
        >
          Enquiries
        </Link>
        {/* <Link
          to="/admin/services"
          className={`${
            path === "/admin/services" ? "bg-white text-black" : ""
          } hover:bg-white py-2 pl-5 hover:text-black rounded-l-full`}
        >
          Services
        </Link>
        <Link
          to="/admin/contact"
          className={`${
            path === "/admin/contact" ? "bg-white text-black" : ""
          } hover:bg-white py-2 pl-5 hover:text-black rounded-l-full`}
        >
          Contact Us
        </Link> */}
      </div>
    </div>
  );
}

export default Sidebar;
