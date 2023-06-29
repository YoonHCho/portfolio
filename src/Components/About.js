import React from "react";
import pic from "../Assets/profile.jpg";
import "./About.css";
import { useSharedEffect } from "../App";

const About = () => {
  const { observerRef } = useSharedEffect();

  return (
    <>
      <div className="hidden">
        <img src={pic} alt="me" />
        <h1>About</h1>
      </div>
    </>
  );
};

export default About;
