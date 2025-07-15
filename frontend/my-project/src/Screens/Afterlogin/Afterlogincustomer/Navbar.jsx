import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const isActive = (tab) =>
    active === tab ? "text-[#FFA31A] scale-105" : "text-black";

  return (
    <div className="navbar md:px-20 bg-white shadow-sm fixed w-full z-10">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> 
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>

        <ul className='gap-4 text-sm hidden md:flex'> 
          <li
            className={`cursor-pointer transition-all duration-300 hover:text-[#FFA31A] hover:scale-105 ${isActive("home")}`}
            onClick={() => setActive("home")}
          >
            Home
          </li>
          <li
            className={`cursor-pointer transition-all duration-300 hover:text-[#FFA31A] hover:scale-105 ${isActive("dashboard")}`}
            onClick={() => setActive("dashboard")}
          >
            Dashboard
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <span className='flex items-center gap-2 text-sm hover:text-[#FFA31A] transition-all duration-300 hover:scale-105'>
          Location
          <FaLocationDot />
        </span>

        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>

        <FaUserCircle className='text-4xl md:text-2xl hover:text-[#FFA31A] transition-all duration-300 hover:scale-105' />
      </div>
    </div>
  );
};

export default Navbar;