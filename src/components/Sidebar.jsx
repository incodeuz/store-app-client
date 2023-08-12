import React from "react";
import { sidebarRoutes } from "../utils/routing";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-1">
      {sidebarRoutes.map((link, index) => (
        <NavLink
          key={index}
          className="px-3 py-3 flex gap-3 items-center rounded-l-md duration-100 hover:bg-white"
          to={link.to}
        >
          <i className={`${link.icon} text-[20px] leading-0`}></i>
          <p className="p-0 m-0 leading-0 mt-[5px]">{link.title}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
