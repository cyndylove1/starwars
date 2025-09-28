import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/sidebarContent/sidebar";
import { useState } from "react";
import Header from "../../../components/header";

export default function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex min-h-screen">
        <div
          className={`fixed top-0 left-0 h-screen overflow-y-auto z-50 ${
            isSidebarOpen ? "block" : "hidden lg:block"
          }`}
        >
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
        <div className="flex-1 lg:ml-[250px] mr-6 w-full">
          <div className="fixed top-0 right-0 left-0 lg:left-[240px] z-20">
            <Header onMenuClick={toggleSidebar} />
          </div>
          <main className="h-[calc(100vh-82px)] h-full pt-[4rem] bg-(--skyblue) ">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
