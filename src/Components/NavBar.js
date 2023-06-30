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
          {/* <NavLink className="navbar-brand" to="/">
             <img className="logo-height img-fluid" src={LLLogo} alt="Little Lemon Logo" />
           </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
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
            {/* <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/"> */}
            {/* <NavLink to="/">HOME</NavLink> */}
            {/* <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/about"> */}
            {/* <NavLink to="/about">ABOUT</NavLink> */}
            {/* <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/menu"> */}
            {/* <NavLink to="/menu">MENU</NavLink> */}
            {/* <NavLink className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)} to="/reserve"> */}
            {/* <NavLink to="/reserve">RESERVE</NavLink> */}
          </div>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
};

export default NavBar;
