import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/home/logo.svg";

function Navbar() {
  let activeLinkClass = "text-primary font-semibold !bg-white";
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* menu button for small screens */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>

            <img src={Logo} alt="logo" className="w-10 h-10 ml-2 md:hidden" />
          </label>
          <ul
            tabIndex={0}
            className="menu bg-white menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl hidden md:inline-flex">
          <img src={Logo} alt="logo" className="w-10 h-10" />
          <span className="ml-2 hidden md:block">Cooking</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 bg-white font-medium leading-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkClass : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? activeLinkClass : undefined
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? activeLinkClass : undefined
              }
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? activeLinkClass : undefined
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden md:block"></div>
    </div>
  );
}

export default Navbar;
