import React from 'react'

const ProjectPage = () => {
  return (
    <section className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-800 -mx-6 px-4 sm:px-6">
	  <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">My Projects</h2>
	  
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
	    <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group">
	      <div className="relative h-48 sm:h-56 overflow-hidden">
	        <img src="https://images.unsplash.com/photo-1547658719-da2b51169166" alt="E-commerce App" keywords="web app, e-commerce, shop, online store" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
	        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
	          <div className="p-4 sm:p-5 text-white">
	            <h3 className="text-lg sm:text-xl font-bold">E-commerce Platform</h3>
	            <p className="text-sm">Full-stack online shopping experience</p>
	          </div>
	        </div>
	      </div>
	      <div className="p-4 sm:p-5">
	        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">E-commerce Platform</h3>
	        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">A modern e-commerce solution with seamless checkout process, product management, and order tracking.</p>
	        <div className="flex flex-wrap gap-2 mb-4">
	          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs">React</span>
	          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs">Node.js</span>
	          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs">MongoDB</span>
	          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs">Stripe</span>
	        </div>
	        <div className="flex justify-between items-center">
	          <a href="#" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors duration-300 text-sm font-medium">
	            View Project
	            <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
	          </a>
	          <div className="flex gap-2">
	            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-300">
	              <i className="fa-brands fa-github text-lg"></i>
	            </a>
	            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-300">
	              <span className="material-symbols-outlined text-sm">language</span>
	            </a>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
	</section>
  )
}

export default ProjectPage