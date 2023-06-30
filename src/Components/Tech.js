import React from "react";
import "./Tech.css";
import { useSharedEffect } from "../App";

const importAll = source => {
  let images = {};
  source.keys().forEach(key => (images[key] = source(key)));
  return images;
};

const Tech = () => {
  const { observerRef } = useSharedEffect();

  const images = importAll(require.context("../Assets/icons", false, /\.(png!jpe?g|svg)$/));
  return (
    <>
      <div className="container hidden marginTB-75">
        <h2>The Technologies Use, but not limited to</h2>
      </div>
      <div className="container hidden">
        <div>Tech</div>
        <p>this is tech</p>
        <div className="row p-1 justify-content-between mx-3">
          {/* {Object.keys(images).map(key => {
          return <img src={images[key]} alt="icon" key={key} className="img-size" />;
        })} */}
          {Object.keys(images).map(key => {
            return (
              <div key={key} className="bg-white m-1 py-2 col-4 col-sm-3 col-md-2">
                <img src={images[key]} alt="icon" className="img-size" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tech;
