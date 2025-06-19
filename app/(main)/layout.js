import React from "react";
import DashboardProvider from "./provider";

function DashboardLayout({ children }) {
  return (
    <div className="bg-secondary">
      <DashboardProvider>
        <div>{children}</div>
      </DashboardProvider>
    </div>
  );
}

export default DashboardLayout;
