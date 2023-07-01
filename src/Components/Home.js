import React from "react";
import "./Home.css";
import About from "./About";
import Tech from "./Tech";
import Projects from "./Projects";
import Quote from "./Quote";
import { useSharedEffect } from "../App";

const Home = () => {
  // const { observerRef } = useSharedEffect();
  useSharedEffect();
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
      <div className="container ">
        <About />
        <Quote />
        <Tech />
        <Projects />
      </div>
    </>
  );
};

export default Home;
