import React, { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        if (typeof data === "string") {
          setProjects([]);
        } else {
          setProjects(data);
        }
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading)
    return (
      <section className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-800 -mx-6 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">
          My Projects
        </h2>
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      </section>
    );

  if (error)
    return (
      <section className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-800 -mx-6 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">
          My Projects
        </h2>
        <p className="text-center text-red-500">{error}</p>
      </section>
    );

  return (
    <section className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-800 -mx-6 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">
        My Projects
      </h2>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No projects at the moment. Check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.projectImg}
                  alt={project.projectTitle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 sm:p-5 text-white">
                    <h3 className="text-lg sm:text-xl font-bold">
                      {project.projectTitle}
                    </h3>
                    <p className="text-sm">{project.projectdesc}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.projectTitle}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                  {project.projectdesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.projectTags ?? []).map((tech, index) => {
                    const colors = [
                      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
                      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
                      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
                      "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
                      "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
                      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
                    ];
                    const colorClass = colors[index % colors.length];
                    return (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-full text-xs ${colorClass}`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors duration-300 text-sm font-medium"
                  >
                    View Project
                    <span className="material-symbols-outlined ml-1 text-sm">
                      arrow_forward
                    </span>
                  </a>
                  <div className="flex gap-2">
                    <a
                      href={project.projectSrcLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-300"
                    >
                      <i className="fa-brands fa-github text-lg"></i>
                    </a>
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-300"
                    >
                      <span className="material-symbols-outlined text-sm">
                        language
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectPage;
