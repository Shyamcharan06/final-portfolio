import React from "react";

const Projects = () => {
  const projectList = [
    {
      name: "Football Data Clustering",
      description: "Clusters football data for analysis.",
      link: "https://github.com/Shyamcharan06/Football-Data-Clustering"
    },
    {
      name: "Meme Coin Trading Bot",
      description: "Automated bot for trading meme coins.",
      link: "https://github.com/Shyamcharan06/Meme-Coin-Trading-Bot"
    },
    {
      name: "Task Management System",
      description: "A system to manage and track tasks efficiently.",
      link: "https://github.com/ka0s01/Task-Management-System"
    }
  ];

  return (
    <section
      id="projects"
      className="py-16 px-8 text-text dark:text-darkText bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-900"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
