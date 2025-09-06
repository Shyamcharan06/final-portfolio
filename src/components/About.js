import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-8 text-text dark:text-darkText bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <p className="mb-4 text-center max-w-2xl mx-auto">
        Hi! I'm Shyamcharan, a passionate frontend developer. I love building responsive and interactive websites using React and Tailwind CSS.I study at VIT Chennai University.I am pursuing my B.Tech in Computer Science and Engineering.
      </p>
      <p className="text-center">Skills: React, Tailwind CSS, JavaScript, HTML, CSS</p>
    </section>
  );
};

export default About;
