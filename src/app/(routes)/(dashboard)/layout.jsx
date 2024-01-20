import React from "react";
import NavbarCustom from "@/app/components/NavbarCustom";
const DashboardLayout = ({ children }) => (
  <div data-test="layout-dashboard">
    <NavbarCustom />
    <div className="flex justify-center px-5">
      {children}
    </div>
  </div>
);

export default DashboardLayout;
