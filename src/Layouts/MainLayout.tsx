import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
