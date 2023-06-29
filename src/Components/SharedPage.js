import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const SharedPage = () => {
  return (
    <>
      <NavBar />
      <div>This is shared</div>
      <p>shared paragraph</p>
      <Outlet />
    </>
  );
};

export default SharedPage;
