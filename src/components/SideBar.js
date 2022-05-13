import {
  ArrowsInCardinal,
  HouseSimple,
  Phone,
  ShareNetwork,
} from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul className="flex flex-col justify-center items-center bg-slate-900 overflow-hidden shadow-2xl rounded-lg border ">
      <li className="hover:bg-slate-800 w-full p-5 transition-all">
        <Link to="/" className="flex items-center gap-1 text-white ">
          <HouseSimple color="#fff" weight="bold" size={24} />
        </Link>
      </li>

      <li className="hover:bg-slate-800 w-full p-5 transition-all">
        <Link to="skill" className="flex items-center gap-1 text-white ">
          <ArrowsInCardinal size={24} color="#fff" weight="fill" />
        </Link>
      </li>
      <li className="hover:bg-slate-800 w-full p-5 transition-all">
        <Link to="project" className="flex items-center gap-1 text-white ">
          <ShareNetwork size={24} color="#fff" weight="fill" />
        </Link>
      </li>
      <li className="hover:bg-slate-800 w-full p-5 transition-all">
        <Link to="contact" className="flex items-center gap-1 text-white ">
          <Phone size={24} color="#fff" weight="fill" />
        </Link>
      </li>
    </ul>
  );
};

export default SideBar;
