import React, { useState, useEffect } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="transition-colors duration-500 bg-background dark:bg-darkBackground">
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 shadow-md z-50">
        <h1 className="font-bold text-xl text-text dark:text-darkText">Shyamcharan</h1>
        <div className="flex items-center space-x-4">
          <a href="#landing" className="hover:text-teal-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-teal-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-teal-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-teal-500 transition-colors">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
