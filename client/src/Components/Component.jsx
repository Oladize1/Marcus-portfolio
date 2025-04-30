import React from "react";

import "./style.css";

export const Component = () => {
  return (
<div id="webcrumbs"> 
        	<div className=" p-6 font-sans bg-white dark:bg-gray-900 overflow-hidden">
	  <header className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-gray-200 dark:border-gray-800">
	    <div className="mb-4 md:mb-0">
	      <h1  className="text-3xl font-bold text-primary-600 dark:text-primary-400 tracking-tight">Alex Morgan</h1>
	      <p className="text-gray-600 dark:text-gray-400 mt-1">Full Stack Developer & UI/UX Enthusiast</p>
	    </div>
	    <nav className="w-full md:w-auto">
	      <ul className="flex flex-wrap justify-start md:justify-end gap-4 md:gap-6">
	        <li><a href="#about" className="px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-105">About</a></li>
	        <li ><a href="#projects" className="px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-105">Projects</a></li>
	        <li><a href="#skills" className="px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-105">Skills</a></li>
	        <li><a href="#experience" className="px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-105">Experience</a></li>
	        <li><a href="#contact" className="px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-105">Contact</a></li>
	      </ul>
	    </nav>
	  </header>
	
	  <section className="py-12 flex flex-col lg:flex-row items-center gap-8">
	    <div className="w-full lg:w-1/2 order-2 lg:order-1">
	      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Building <span className="text-primary-600 dark:text-primary-400">digital experiences</span> that matter</h2>
	      <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">I create elegant, high-performance web applications with a focus on user experience and clean code. Passionate about solving complex problems with simple solutions.</p>
	      <div className="flex flex-wrap gap-4">
	        <a href="#projects" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">View My Work</a>
	        <a href="#contact" className="px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300 transform hover:-translate-y-1">Contact Me</a>
	      </div>
	      {/* Next: "Add animated scroll down indicator" */}
	    </div>
	    <div className="w-full lg:w-1/2 order-1 lg:order-2 relative px-4 md:px-0 mb-8 lg:mb-0">
	      <div  className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
	        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-600/20 z-10"></div>
	        <img src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a" alt="Developer working on code" className="w-full h-full object-cover" keywords="developer, coding, programming, workspace, computer" />
	        <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20">
	          <div className="flex items-center gap-2">
	            <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
	            <p className="font-mono text-sm">Currently working on: React + Node.js projects</p>
	          </div>
	        </div>
	      </div>
	    </div>
	  </section>
	
	  <section className="py-12 md:py-16 px-4 md:px-0">
	    <div className="flex flex-col md:flex-row gap-12 items-start">
	      <div className="w-full md:w-1/2 lg:w-2/5">
	        <div className="relative group">
	          <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
	          <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
	            <h3 className="text-2xl font-bold mb-3">About Me</h3>
	            <p className="text-gray-600 dark:text-gray-400 mb-4">With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications. My approach combines technical expertise with a keen eye for design.</p>
	            <p className="text-gray-600 dark:text-gray-400">When I'm not coding, you'll find me hiking, reading science fiction, or experimenting with new technologies. I believe in continuous learning and staying ahead of industry trends.</p>
	            <div className="mt-4 flex gap-3">
	              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300">
	                <i className="fa-brands fa-github text-xl"></i>
	              </a>
	              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300">
	                <i className="fa-brands fa-linkedin text-xl"></i>
	              </a>
	              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300">
	                <i className="fa-brands fa-twitter text-xl"></i>
	              </a>
	            </div>
	          </div>
	        </div>
	      </div>
	      
	      <div className="w-full md:w-1/2 lg:w-3/5">
	        <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
	        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
	          <div className="p-5 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
	            <h4 className="text-lg font-semibold mb-2 flex items-center">
	              <span className="material-symbols-outlined mr-2">code</span>
	              Frontend Development
	            </h4>
	            <p className="text-gray-600 dark:text-gray-400">Crafting responsive UIs with React, Next.js, and modern CSS frameworks like Tailwind CSS.</p>
	          </div>
	          <div className="p-5 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
	            <h4 className="text-lg font-semibold mb-2 flex items-center">
	              <span className="material-symbols-outlined mr-2">storage</span>
	              Backend Development
	            </h4>
	            <p className="text-gray-600 dark:text-gray-400">Building robust APIs and server-side applications with Node.js, Express, and MongoDB.</p>
	          </div>
	          <div className="p-5 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
	            <h4 className="text-lg font-semibold mb-2 flex items-center">
	              <span className="material-symbols-outlined mr-2">devices</span>
	              Responsive Design
	            </h4>
	            <p className="text-gray-600 dark:text-gray-400">Creating seamless experiences across devices with mobile-first approach and adaptive layouts.</p>
	          </div>
	          <div className="p-5 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
	            <h4 className="text-lg font-semibold mb-2 flex items-center">
	              <span className="material-symbols-outlined mr-2">speed</span>
	              Performance Optimization
	            </h4>
	            <p className="text-gray-600 dark:text-gray-400">Enhancing load times and user experience through code splitting, lazy loading, and caching strategies.</p>
	          </div>
	        </div>
	      </div>
	    </div>
	    {/* Next: "Add education and certifications section" */}
	  </section>
	
	  <section id="projects" className="py-16">
	    <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	      <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
	        <div className="relative h-[200px] overflow-hidden">
	          <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3" alt="E-commerce project" keywords="e-commerce, website, online store, shop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
	            <div className="p-4 w-full">
	              <div  className="flex gap-2 justify-end">
	                <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
	                  <span className="material-symbols-outlined text-white">visibility</span>
	                </a>
	                <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
	                  <span className="material-symbols-outlined text-white">code</span>
	                </a>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="p-5">
	          <div className="flex justify-between items-start mb-2">
	            <h3 className="text-xl font-bold">ShopEase E-commerce</h3>
	            <span className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">Full Stack</span>
	          </div>
	          <p className="text-gray-600 dark:text-gray-400 mb-4">A modern e-commerce platform with real-time inventory, payment processing, and user authentication.</p>
	          <div className="flex flex-wrap gap-2">
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">React</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">Node.js</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">MongoDB</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">Stripe</span>
	          </div>
	        </div>
	      </div>
	
	      <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
	        <div className="relative h-[200px] overflow-hidden">
	          <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284" alt="Task management app" keywords="task management, productivity, app, dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
	            <div className="p-4 w-full">
	              <div className="flex gap-2 justify-end">
	                <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
	                  <span className="material-symbols-outlined text-white">visibility</span>
	                </a>
	                <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
	                  <span className="material-symbols-outlined text-white">code</span>
	                </a>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="p-5">
	          <div className="flex justify-between items-start mb-2">
	            <h3 className="text-xl font-bold">TaskFlow Manager</h3>
	            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">Frontend</span>
	          </div>
	          <p className="text-gray-600 dark:text-gray-400 mb-4">A task management application with drag-and-drop interface, team collaboration, and progress tracking.</p>
	          <div className="flex flex-wrap gap-2">
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">Vue.js</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">Vuex</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">Firebase</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">Tailwind</span>
	          </div>
	        </div>
	      </div>
	
	      <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
	        <div className="relative h-[200px] overflow-hidden">
	          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="Developer blog" keywords="blog, content management, articles, dev blog" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
	            <div className="p-4 w-full">
	              <div className="flex gap-2 justify-end">
	                <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
	                  <span className="material-symbols-outlined text-white">visibility</span>
	                </a>
	                <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
	                  <span className="material-symbols-outlined text-white">code</span>
	                </a>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="p-5">
	          <div className="flex justify-between items-start mb-2">
	            <h3 className="text-xl font-bold">DevInsights Blog</h3>
	            <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">Backend</span>
	          </div>
	          <p className="text-gray-600 dark:text-gray-400 mb-4">A content management system for technical articles with robust search, commenting, and analytics.</p>
	          <div className="flex flex-wrap gap-2">
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">Next.js</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">GraphQL</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">PostgreSQL</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">AWS</span>
	          </div>
	        </div>
	      </div>
	    </div>
	    <div  className="text-center mt-12">
	      <a  href="#" className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 shadow-md hover:shadow-lg">
	        View All Projects
	        <span className="material-symbols-outlined">arrow_forward</span>
	      </a>
	    </div>
	    {/* Next: "Add a project filter by technology" */}
	  </section>
	
	  <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800 -mx-6 px-6">
	    <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
	    
	    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
	      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
	        <div className="flex items-center gap-3 mb-3">
	          <i className="fa-brands fa-react text-2xl text-blue-500"></i>
	          <h3 className="text-lg font-semibold">Frontend</h3>
	        </div>
	        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            React & Next.js
	          </li>
	          <li className="flex items-center gap-2">
	            <span  className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Vue.js & Nuxt
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Tailwind CSS
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            TypeScript
	          </li>
	        </ul>
	      </div>
	      
	      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
	        <div className="flex items-center gap-3 mb-3">
	          <i className="fa-brands fa-node-js text-2xl text-green-600"></i>
	          <h3 className="text-lg font-semibold">Backend</h3>
	        </div>
	        <ul  className="space-y-2 text-gray-600 dark:text-gray-300">
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Node.js & Express
	          </li>
	          <li className="flex items-center gap-2">
	            <span  className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Python & Django
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            GraphQL & REST
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Java & Spring Boot
	          </li>
	        </ul>
	      </div>
	      
	      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
	        <div className="flex items-center gap-3 mb-3">
	          <span className="material-symbols-outlined text-2xl text-blue-700">storage</span>
	          <h3 className="text-lg font-semibold">Databases</h3>
	        </div>
	        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            MongoDB
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            PostgreSQL
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            MySQL & MariaDB
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Redis
	          </li>
	        </ul>
	      </div>
	      
	      <div  className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
	        <div className="flex items-center gap-3 mb-3">
	          <span className="material-symbols-outlined text-2xl text-gray-700 dark:text-gray-300">cloud</span>
	          <h3 className="text-lg font-semibold">DevOps</h3>
	        </div>
	        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            AWS & Azure
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Docker & Kubernetes
	          </li>
	          <li className="flex items-center gap-2">
	            <span  className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            CI/CD (GitHub Actions)
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Terraform
	          </li>
	        </ul>
	      </div>
	      
	      <div  className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
	        <div  className="flex items-center gap-3 mb-3">
	          <span className="material-symbols-outlined text-2xl text-purple-600">palette</span>
	          <h3 className="text-lg font-semibold">Design</h3>
	        </div>
	        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Figma & Adobe XD
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            UI/UX Principles
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Responsive Design
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Animation & Microinteractions
	          </li>
	        </ul>
	      </div>
	      
	      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
	        <div className="flex items-center gap-3 mb-3">
	          <span className="material-symbols-outlined text-2xl text-red-600">psychology</span>
	          <h3 className="text-lg font-semibold">Testing</h3>
	        </div>
	        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Jest & React Testing Library
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Cypress & Selenium
	          </li>
	          <li  className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            TDD Methodology
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Performance Testing
	          </li>
	        </ul>
	      </div>
	      
	      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
	        <div className="flex items-center gap-3 mb-3">
	          <span className="material-symbols-outlined text-2xl text-yellow-600">handyman</span>
	          <h3 className="text-lg font-semibold">Tools</h3>
	        </div>
	        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Git & GitHub/GitLab
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            VS Code & JetBrains IDEs
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Webpack & Vite
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            NPM & Yarn
	          </li>
	        </ul>
	      </div>
	      
	      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
	        <div className="flex items-center gap-3 mb-3">
	          <span className="material-symbols-outlined text-2xl text-green-500">group</span>
	          <h3 className="text-lg font-semibold">Soft Skills</h3>
	        </div>
	        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Team Collaboration
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Problem Solving
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Time Management
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-500 text-sm">check_circle</span>
	            Technical Communication
	          </li>
	        </ul>
	      </div>
	    </div>
	    {/* Next: "Add skill level indicators for each skill" */}
	  </section>
	
	  
	<footer   className="pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
	  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
	    <div className="md:col-span-1">
	      <h3 className="text-xl font-bold mb-4">Alex Morgan</h3>
	      <p className="text-gray-600 dark:text-gray-400 mb-4">Full Stack Developer & UI/UX Enthusiast building digital experiences that matter.</p>
	      <div className="flex gap-4">
	        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300">
	          <i className="fa-brands fa-github text-xl"></i>
	        </a>
	        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300">
	          <i className="fa-brands fa-linkedin text-xl"></i>
	        </a>
	        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300">
	          <i className="fa-brands fa-twitter text-xl"></i>
	        </a>
	      </div>
	    </div>
	    
	    <div className="md:col-span-1">
	      <h3 className="text-lg font-semibold mb-4">Navigation</h3>
	      <ul className="space-y-2">
	        <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">About</a></li>
	        <li ><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Projects</a></li>
	        <li><a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Skills</a></li>
	        <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Contact</a></li>
	      </ul>
	    </div>
	    
	    <div className="md:col-span-1">
	      <h3 className="text-lg font-semibold mb-4">Contact</h3>
	      <ul className="space-y-2">
	        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
	          <span className="material-symbols-outlined text-primary-500">mail</span>
	          alex.morgan@example.com
	        </li>
	        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
	          <span className="material-symbols-outlined text-primary-500">call</span>
	          +1 (555) 123-4567
	        </li>
	        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
	          <span  className="material-symbols-outlined text-primary-500">location_on</span>
	          San Francisco, CA
	        </li>
	      </ul>
	    </div>
	    
	    <div className="md:col-span-1">
	      <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
	      <p className="text-gray-600 dark:text-gray-400 mb-4">Subscribe to receive updates on new projects and tech articles.</p>
	      <div className="flex">
	        <input type="email" placeholder="Your email" className="px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full" />
	        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
	          <span className="material-symbols-outlined">send</span>
	        </button>
	      </div>
	    </div>
	  </div>
	  
	  <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
	    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">© 2023 Alex Morgan. All rights reserved.</p>
	    <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
	      <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Privacy Policy</a>
	      <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Terms of Service</a>
	      <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Cookie Policy</a>
	    </div>
	  </div>
	</footer></div> 
        </div>
  )
}

