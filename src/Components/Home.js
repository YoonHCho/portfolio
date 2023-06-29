import React, { useEffect, useRef } from "react";
import "./Home.css";
import About from "./About";
import { useSharedEffect } from "../App";

const Home = () => {
  const { observerRef } = useSharedEffect();
  // const observerRef = useRef(null);

  // useEffect(() => {
  //   observerRef.current = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("show");
  //       } else {
  //         entry.target.classList.remove("show");
  //       }
  //     });
  //   });

  //   const hiddenElements = document.querySelectorAll(".hidden");
  //   hiddenElements.forEach(el => observerRef.current.observe(el));

  //   // Cleanup function to disconnect the IntersectionObserver
  //   return () => {
  //     observerRef.current.disconnect();
  //   };
  // }, []);

  return (
    <>
      <div className="hidden">Home</div>
      <About className="hidden" />
      <div className="hidden">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
      </div>
      <div className="hidden">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
      </div>
      <div className="hidden">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
      </div>
      <div className="hidden">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum dignissimos sequi a, voluptates aperiam atque possimus natus
          eligendi veniam.
        </p>
      </div>
    </>
  );
};

export default Home;
