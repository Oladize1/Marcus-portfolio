import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
	{/* Intro section */}
    <section className='py-12 flex flex-col lg:flex-row items-center gap-8 mx-10'>
       <div className="w-full lg:w-1/2 order-2 lg:order-1">
	      <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Building <span className="text-primary-100">digital experiences</span> that matter</h2>
	      <p className="text-gray-400 mb-6 text-lg">I create elegant, high-performance web applications with a focus on user experience and clean code. Passionate about solving complex problems with simple solutions.</p>
	      <div className="flex flex-wrap gap-4">
	        <Link to="#projects" className="px-6 py-3 bg-secondary-200 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">View My Work</Link>
	        <Link to="#contact" className="px-6 py-3 border border-primary-100 text-primary-100  rounded-full hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1">Contact Me</Link>
	      </div>
	      {/* Next: "Add animated scroll down indicator" */}
	    </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2 relative px-4 md:px-0 mb-8 lg:mb-0">
	      <div  className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
	        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-600/20 z-10"></div>
	        <img src="./Hero-image.jpg" loading='lazy' alt="Developer working on code" className="w-full h-full object-cover" keywords="developer, coding, programming, workspace, computer" />
	        <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20">
	          <div className="flex items-center gap-2">
	            <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
	            <p className="font-mono text-sm">Currently working on: React + Node.js projects</p>
	          </div>
	        </div>
	      </div>
	    </div>
    </section>
	{/* About me & Technical Experience section */}
    <section className='py-12 md:py-16 px-4 md:px-0 mx-10'>
      <div className='flex flex-col md:flex-row gap-12 items-start'>
          <div className="w-full md:w-1/2 lg:w-2/5">
	        <div className="relative group">
	          <div className="absolute -inset-1 bg-gradient-to-r from-primary-100 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
	          <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
	            <h3 className="text-2xl font-bold mb-3">About Me</h3>
	            <p className="text-gray-600 dark:text-gray-400 mb-4">With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications. My approach combines technical expertise with a keen eye for design.</p>
	            <p className="text-gray-600 dark:text-gray-400">When I'm not coding, you'll find me hiking, reading science fiction, or experimenting with new technologies. I believe in continuous learning and staying ahead of industry trends.</p>
	            <div className="mt-4 flex gap-3">
	              <a href="https://github.com/Oladize1" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-secondary-200 dark:hover:bg-primary-900 transition-colors duration-300">
	                <i className="fa-brands fa-github text-xl"></i>
	              </a>
	              <a href="https://www.linkedin.com/in/pamilerin-oladunjoye-896ba4313/" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-secondary-200 dark:hover:bg-primary-900 transition-colors duration-300">
	                <i className="fa-brands fa-linkedin text-xl"></i>
	              </a>
	              <a href="https://x.com/Marcus__1406" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-secondary-200 dark:hover:bg-primary-900 transition-colors duration-300">
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
	            <p className="text-gray-600 dark:text-gray-400">Crafting responsive UIs with React, Next.js, and modern CSS frameworks like Tailwind CSS.</p>
	          </div>
	          <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
	            <h4 className="text-lg font-semibold mb-2 flex items-center">
	              <span className="material-symbols-outlined mr-2">storage</span>
	              Backend Development
	            </h4>
	            <p className="text-gray-600 dark:text-gray-400">Building robust APIs and server-side applications with Node.js, Express, and MongoDB.</p>
	          </div>
	          <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
	            <h4 className="text-lg font-semibold mb-2 flex items-center">
	              <span className="material-symbols-outlined mr-2">devices</span>
	              Responsive Design
	            </h4>
	            <p className="text-gray-600 dark:text-gray-400">Creating seamless experiences across devices with mobile-first approach and adaptive layouts.</p>
	          </div>
	          <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
	            <h4 className="text-lg font-semibold mb-2 flex items-center">
	              <span className="material-symbols-outlined mr-2">speed</span>
	              Performance Optimization
	            </h4>
	            <p className="text-gray-600 dark:text-gray-400">Enhancing load times and user experience through code splitting, lazy loading, and caching strategies.</p>
	          </div>
	        </div>
	      </div>
      </div>
    </section>

	{/* Projects section */}
    <section className='py-16 mx-10'>
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	      <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
	        <div className="relative h-[200px] overflow-hidden">
	          <img src="./blog-image.png" loading='lazy' alt="Developer blog" keywords="blog, content management, articles, dev blog" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
	            <div className="p-4 w-full">
	              <div className="flex gap-2 justify-end">
	                <a href="https://dizeblog-1.onrender.com/" target='blank' className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
	                  <span className="material-symbols-outlined text-white">visibility</span>
	                </a>
	                <a href="https://github.com/Oladize1/DizeBlog.git" target='blank' className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
	                  <span className="material-symbols-outlined text-white">code</span>
	                </a>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="p-5">
	          <div className="flex justify-between items-start mb-2">
	            <h3 className="text-xl font-bold">Dize Blog</h3>
	            <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">Backend</span>
	          </div>
	          <p className="text-gray-600 dark:text-gray-400 mb-4">A content management system for technical articles with robust search, commenting, and analytics.</p>
	          <div className="flex flex-wrap gap-2">
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">React.js</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">Zustand</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">MongoDB</span>
	            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md">Render.io</span>
	          </div>
	        </div>
	      </div>
	    </div>
      <div className="text-center mt-12">
	      <a  href="#" className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-primary-50 dark:hover:border-primary-100 transition-all duration-300 shadow-md hover:shadow-lg">
	        View All Projects
	        <span className="material-symbols-outlined">arrow_forward</span>
	      </a>
	    </div>  
    </section>

	{/* Skills section */}
	<section className="py-16 bg-gray-50 dark:bg-gray-800">
		<h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10'>
			 <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-500 border border-transparent">
	        <div className="flex items-center gap-3 mb-3">
	          <i className="fa-brands fa-react text-2xl text-blue-500"></i>
	          <h3 className="text-lg font-semibold">Frontend</h3>
	        </div>
	        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-xs">check_circle</span>
	            React & Next.js
	          </li>
	          <li className="flex items-center gap-2">
	            <span  className="material-symbols-outlined text-primary-100 text-xs">check_circle</span>
	            Zustand
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            Tailwind CSS
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
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
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            Node.js & Express
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            GraphQL & REST
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
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            MongoDB
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            Mongoose
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
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            Jest & React Testing Library
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            Cypress
	          </li>
	          <li  className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            TDD Methodology
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
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
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            Git & GitHub
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            VS Code
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            Vite
	          </li>
	          <li className="flex items-center gap-2">
	            <span className="material-symbols-outlined text-primary-100 text-sm">check_circle</span>
	            NPM
	          </li>
	        </ul>
	      </div>

		</div>

	</section>
    </>
  )
}

export default HomePage