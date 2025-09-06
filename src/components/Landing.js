import React from "react";

const Landing = () => {
  return (
    <section
      id="landing"
      className="h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-600 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-700"
      data-aos="fade-up"
    >
      <h1 className="text-5xl font-bold mb-4">Shyamcharan Bharathi</h1>
      <p className="text-xl animate-pulse">Frontend Developer | ML Enthusiast</p>
    </section>
  );
};

export default Landing;
