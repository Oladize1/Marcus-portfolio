import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const initialProjects = [
  {
    "_id": "69bfa064af940bcd0624ce6f",
    "projectTitle": "ChatStream",
    "projectdesc": "A modern chat application with futuristic UI and seamless Authentication.",
    "projectTags": [
      "Node js",
      "Express js",
      "Socket.io",
      "React js",
      "TypeScript"
    ],
    "projectSrcLink": "https://github.com/Oladize1/ChatStream.git",
    "projectLink": "https://chatstream-07t0.onrender.com/",
    "projectImg": "https://res.cloudinary.com/dfyoot4td/image/upload/v1774210280/lxmq0qq2uazhraag8qfm.png",
    "createdAt": "2026-03-22T07:55:16.989Z",
    "updatedAt": "2026-03-22T20:11:13.853Z",
    "__v": 0
  },
  {
    "_id": "69cc0e91d732fb975a8a1a37",
    "projectTitle": "Admin Dashboard",
    "projectdesc": "A centralized admin dashboard for managing portfolio content and communication. It supports full project CRUD operations and handles contact messages with database storage and instant email alerts.",
    "projectTags": [
      "React",
      "TailwindCss",
      "typescript",
      "Nodemailer"
    ],
    "projectSrcLink": "https://github.com/Oladize1/Marcus-portfolio.git",
    "projectLink": "https://marcus-portfolio-admin.netlify.app/dashboard",
    "projectImg": "https://res.cloudinary.com/dfyoot4td/image/upload/v1774980760/vmjbhq2ouddb3oo1houf.png",
    "createdAt": "2026-03-31T18:12:34.163Z",
    "updatedAt": "2026-03-31T18:12:34.163Z",
    "__v": 0
  }
];

const HomePage = () => {
	 const [projects, setProjects] = useState(initialProjects);

   useEffect(() => {
     const fetchProjects = async () => {
       try {
         const { data } = await api.get("/projects");
         if (Array.isArray(data)) {
           setProjects(data.slice(0, 3));
         }
       } catch (err) {
         console.error("Failed to fetch projects", err);
       }
     };
     fetchProjects();
   }, []);

  return (
    <>
      {/* Intro section */}
      <section className="py-12 flex flex-col lg:flex-row items-center gap-8 mx-2 md:mx-4">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Building{" "}
            <span className="text-primary-100">digital experiences</span> that
            matter
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
            I create elegant, high-performance web applications with a focus on
            user experience and clean code. Passionate about solving complex
            problems with simple solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-secondary-200 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </Link>
            <Link
              to="/contact-me"
              className="px-6 py-3 border border-primary-100 text-primary-100  rounded-full hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </div>
          {/* Next: "Add animated scroll down indicator" */}
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative px-4 md:px-0 mb-8 lg:mb-0">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transform sm:hover:scale-[1.02] motion-safe:active:scale-[1.02] sm:motion-safe:focus:scale-[1.02] transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-600/20 z-10"></div>
            <img
              src="./Hero-image.jpg"
              loading="lazy"
              alt="Developer working on code"
              className="w-full h-full object-cover"
              keywords="developer, coding, programming, workspace, computer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <p className="font-mono text-sm">
                  Currently working on: React + Node.js projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About me & Technical Experience section */}
      <section className="py-12 md:py-16 px-4 md:px-0 mx-2 md:mx-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-100 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-3">About Me</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm a passionate and self-driven developer currently studying
                  at the University of Ibadan. My journey into web development
                  began with curiosity — experimenting with HTML, CSS, and
                  JavaScript — and has grown into a deep commitment to building
                  user-focused, functional applications.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I’ve been actively learning full stack development through
                  real-world projects, exploring technologies like React,
                  Nodejs, Zustand, socket.io, MongoDB, and Tailwind CSS. Whether
                  it's building a Chat Application or crafting responsive
                  interfaces, I love turning ideas into working solutions that
                  matter.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Outside of coding, I enjoy learning about software
                  architecture, collaborating with other developers, and finding
                  creative ways to solve everyday problems with code. My goal is
                  simple: keep growing, keep building, and deliver software that
                  makes an impact.
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://github.com/Oladize1"
                    target="blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-secondary-200 dark:hover:bg-primary-900 transition-colors duration-300"
                  >
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pamilerin-oladunjoye-896ba4313/"
                    target="blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-secondary-200 dark:hover:bg-primary-900 transition-colors duration-300"
                  >
                    <i className="fa-brands fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href="https://x.com/Marcus_1406"
                    target="blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-secondary-200 dark:hover:bg-primary-900 transition-colors duration-300"
                  >
                    <i className="fa-brands fa-twitter text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/5">
            <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="material-symbols-outlined mr-2">code</span>
                  Frontend Development
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Crafting responsive UIs with React, Next.js, and modern CSS
                  frameworks like Tailwind CSS.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="material-symbols-outlined mr-2">
                    storage
                  </span>
                  Backend Development
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Building robust APIs and server-side applications with
                  Node.js, Express, and MongoDB.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="material-symbols-outlined mr-2">
                    devices
                  </span>
                  Responsive Design
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating seamless experiences across devices with mobile-first
                  approach and adaptive layouts.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="material-symbols-outlined mr-2">speed</span>
                  Performance Optimization
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Enhancing load times and user experience through code
                  splitting, lazy loading, and caching strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className="py-16 mx-2 md:mx-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 col-span-3 text-center">
              No projects at the moment.
            </p>
          ) : (
            projects.map((project) => (
              <div
                key={project._id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={project.projectImg}
                    loading="lazy"
                    alt={project.projectTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-2 justify-end">
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        >
                          <span className="material-symbols-outlined text-white">
                            visibility
                          </span>
                        </a>
                        <a
                          href={project.projectSrcLink}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        >
                          <span className="material-symbols-outlined text-white">
                            code
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">
                      {project.projectTitle}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.projectdesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(project.projectTags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-primary-50 dark:hover:border-primary-100 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Projects
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Skills section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-2 md:mx-4">
          <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
            <div className="flex items-center gap-3 mb-3">
              <i className="fa-brands fa-react text-2xl text-blue-500"></i>
              <h3 className="text-lg font-semibold">Frontend</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-xs">
                  check_circle
                </span>
                React & Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-xs">
                  check_circle
                </span>
                Zustand
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                TypeScript
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
            <div className="flex items-center gap-3 mb-3">
              <i className="fa-brands fa-node-js text-2xl text-green-600"></i>
              <h3 className="text-lg font-semibold">Backend</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                Node.js & Express
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                GraphQL & REST
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-2xl text-blue-700">
                storage
              </span>
              <h3 className="text-lg font-semibold">Databases</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                Mongoose
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-2xl text-red-600">
                psychology
              </span>
              <h3 className="text-lg font-semibold">Testing</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                Jest & React Testing Library
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                Cypress
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                TDD Methodology
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                Performance Testing
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-2xl text-yellow-600">
                handyman
              </span>
              <h3 className="text-lg font-semibold">Tools</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                Git & GitHub
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                VS Code
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                Vite
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-100 text-sm">
                  check_circle
                </span>
                NPM
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
