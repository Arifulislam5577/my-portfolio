import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12 w-100">
        <div className="sidebar p-5  col-span-1 w-full md:col-span-1 items-center flex justify-between h-screen ">
          <SideBar />
        </div>
        <div className="content p-5  col-span-1 w-full md:col-span-11">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Home;
