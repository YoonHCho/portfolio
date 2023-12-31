import "./App.css";
import { useEffect, useRef } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./Components/SharedPage";
import Home from "./Components/Home";
import About from "./Components/About";
import Tech from "./Components/Tech";
import Projects from "./Components/Projects";

// custom hook to share the useEffect with other components
export const useSharedEffect = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observerRef.current.observe(el));

    // Cleanup function to disconnect the IntersectionObserver
    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  return { observerRef };
};

const App = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observerRef.current.observe(el));

    // Cleanup function to disconnect the IntersectionObserver
    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SharedPage />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Tech />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
