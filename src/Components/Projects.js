import React, { useState, useEffect } from "react";
import { useSharedEffect } from "../App";
import { importAll } from "./Tech";
import "./Project.css";
import projData from "../Assets/projectsData";

const proImg = ["./full1.gif", "./full2.gif", "./gfront1.gif", "./gfront2.gif"];

const Projects = () => {
  // const { observerRef } = useSharedEffect();
  useSharedEffect();
  const [width, setWidth] = useState(window.innerWidth);

  const images = importAll(require.context("../Assets/proj", false, /\.gif$/));

  useEffect(() => {
    const widthChange = () => setWidth(window.innerWidth);
    window.addEventListener("resize", widthChange);

    return () => window.removeEventListener("resize", widthChange);
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="hidden">Projects</h2>
        <div className="row hidden">
          {projData.map((ele, index) => {
            return (
              <div className={`${width > 992 ? "row col-lg-6 my-3" : "row my-3"}`} key={index}>
                <div className={`${width > 992 ? "col-lg-6 my-3" : "col-sm-6 col-lg-3 my-3"}`}>
                  <img className="img-fluid proj-img" src={images[proImg[index]]} alt="icon" />
                </div>
                <div className={`${width > 992 ? "col-lg-6 my-3" : "col-sm-6 col-lg-3 my-3"}`} key={index}>
                  <h2>{ele.name}</h2>
                  <span>{ele.type} </span>
                  <span>
                    <a href={ele.code} target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </span>
                  <span> | </span>
                  <span>
                    <a href={ele.live ? ele.live : ele.demo} target="_blank" rel="noopener noreferrer">
                      {ele.live ? "Live" : "Demo"}
                    </a>
                  </span>
                  <p className="mt-3">{ele.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
