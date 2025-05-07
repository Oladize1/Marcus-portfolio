import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer   className="pt-16 pb-8 border-t mx-10 my-8 border-gray-200 dark:border-gray-800">
	  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
	    <div className="md:col-span-1">
	      <h3 className="text-xl font-bold mb-4">Marcus Oladunjoye</h3>
	      <p className="text-gray-600 dark:text-gray-400 mb-4">Full Stack Developer & UI/UX Enthusiast building digital experiences that matter.</p>
	      <div className="flex gap-4">
	        <a href="https://github.com/Oladize1" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-300">
	          <i className="fa-brands fa-github text-xl"></i>
	        </a>
	        <a href="https://www.linkedin.com/in/pamilerin-oladunjoye-896ba4313/" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-300">
	          <i className="fa-brands fa-linkedin text-xl"></i>
	        </a>
	        <a href="https://x.com/Marcus__1406" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-300">
	          <i className="fa-brands fa-twitter text-xl"></i>
	        </a>
	      </div>
	    </div>
	    
	    <div className="md:col-span-1">
	      <h3 className="text-lg font-semibold mb-4">Navigation</h3>
	      <ul className="space-y-2">
			<li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Home</Link></li>
	        <li><Link to="/about-me" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">About</Link></li>
	        <li ><Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Projects</Link></li>
	        <li><Link to="/my-skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Skills</Link></li>
	        <li><Link to="/contact-me" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Contact</Link></li>
	      </ul>
	    </div>
	    
	    <div className="md:col-span-1">
	      <h3 className="text-lg font-semibold mb-4">Contact</h3>
	      <ul className="space-y-2">
	        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
	          <span className="material-symbols-outlined text-primary-500">mail</span>
	          pamoladize10@gmail.com
	        </li>
	        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
	          <span className="material-symbols-outlined text-primary-500">call</span>
	          +234 (916) 021-1389
	        </li>
	        {/* <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
	          <span  className="material-symbols-outlined text-primary-500">location_on</span>
	          San Francisco, CA
	        </li> */}
	      </ul>
	    </div>
	    
	    {/* <div className="md:col-span-1">
	      <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
	      <p className="text-gray-600 dark:text-gray-400 mb-4">Subscribe to receive updates on new projects and tech articles.</p>
	      <div className="flex">
	        <input type="email" placeholder="Your email" className="px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full" />
	        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
	          <span className="material-symbols-outlined">send</span>
	        </button>
	      </div>
	    </div> */}
	  </div>
	  
	  <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
	    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">© 2025 Marcus Oladunjoye. All rights reserved.</p>
	    <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
	      <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Privacy Policy</a>
	      <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Terms of Service</a>
	      <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">Cookie Policy</a>
	    </div>
	  </div>
	</footer>
  )
}

export default Footer