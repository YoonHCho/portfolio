import React from "react";
import "./Tech.css";
import { useSharedEffect } from "../App";

export const importAll = source => {
  let images = {};
  source.keys().forEach(key => (images[key] = source(key)));
  return images;
};

const Tech = () => {
  // const { observerRef } = useSharedEffect();
  useSharedEffect();

  const images = importAll(require.context("../Assets/icons", false, /\.(png!jpe?g|svg)$/));
  return (
    <>
      <div className="container hidden marginTB-75">
        <h2>Technologies</h2>
      </div>
      <div className="container hidden mb-5">
        <div className="row p-1 mx-3">
          {Object.keys(images).map(key => {
            return (
              <div key={key} className="py-2 col-6 col-sm-4 col-md-3 col-lg-2 text-center">
                <img className="text-center img-fluid img-size" src={images[key]} alt="icon" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tech;
