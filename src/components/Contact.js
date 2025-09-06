import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-8 bg-background dark:bg-darkBackground text-text dark:text-darkText flex justify-center items-center"
      data-aos="fade-up"
    >
      <form className="flex flex-col w-full max-w-md bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <input
          type="text"
          placeholder="Name"
          className="mb-4 p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text dark:text-darkText"
        />
        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text dark:text-darkText"
        />
        <textarea
          placeholder="Message"
          className="mb-4 p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text dark:text-darkText"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-secondary text-white rounded hover:bg-teal-600 transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
