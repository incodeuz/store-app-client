import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import MainSection from "../components/MainSection";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full h-[80px] flex items-center justify-between px-5 bg-slate-300">
        <nav className="w-full">
          <Navbar />
        </nav>
      </header>
      <section className="mt-[80px]">
        <div className="w-full flex items-start">
          <aside className="fixed left-0 top-[80px] z-50 w-full max-w-[250px] h-[calc(100vh-80px)] bg-slate-300 pl-5">
            <Sidebar />
          </aside>
          <main className="p-7 w-full ml-[250px]">
            <Outlet />
          </main>
        </div>
      </section>
    </>
  );
};

export default MainLayout;
