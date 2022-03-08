import React from "react";
import { Link } from "react-router-dom";

import {
  Atom,
  ChartBar,
  Code,
  GithubLogo,
  HouseLine,
  Phone,
} from "phosphor-react";

const Navbar = () => {
  return (
    <nav className="navbar lg:w-24 w-full float-left mr-5">
      <div className=" bg-gray-900 h-20 lg:h-screen py-10 px-10 lg:px-0 flex lg:flex-col flex-row justify-between items-center  ">
        <Link to="/" className="block border p-2 transition">
          <Code size={32} color="#ffffff" />
        </Link>

        <ul className="flex lg:flex-col flex-row items-center justify-center gap-5 place-items-center ">
          <li className="border p-2  transition hover:bg-gray-700">
            <Link to="/">
              <HouseLine size={32} color="#ffffff" />
            </Link>
          </li>

          <li className="border p-2  transition hover:bg-gray-700">
            <Link to="/project">
              <Atom size={32} color="#ffffff" />
            </Link>
          </li>
          <li className="border p-2  transition hover:bg-gray-700">
            <Link to="/contact">
              <Phone size={32} color="#ffffff" />
            </Link>
          </li>
          <li className="border p-2  transition hover:bg-gray-700">
            <Link to="/skill">
              <ChartBar size={32} color="#ffffff" />
            </Link>
          </li>
        </ul>

        <a
          href="https://github.com/Arifulislam5577"
          target="_blank"
          rel="noreferrer"
          className="block border p-2 transition"
        >
          <GithubLogo size={32} color="#ffffff" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
