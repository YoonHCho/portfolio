import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const style = {
  navActive: "nav-font px-3 nav-item nav-link nav-active",
  navNonActive: "nav-font px-3 nav-item nav-link hover",
};

const NavBar = () => {
  const navigate = ["HOME", "ABOUT", "TECHNOLOGIES", "PROJECTS"];
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light pd mb-5 font">
        <div className="container">
          <div className="navbar-nav mx-auto">
            {navigate.map((ele, index) => {
              return (
                <NavLink
                  to={ele === "HOME" ? "/" : `/${ele.toLowerCase()}`}
                  className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)}
                  key={index}
                >
                  {ele.toUpperCase()}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
