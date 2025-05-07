import React from 'react'
import { Link } from 'react-router-dom'
const SkillsPage = () => {
  return (
    <section className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 relative overflow-hidden">
	  <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">My Skills</h2>
	  
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
	      <div className="mb-4 flex items-center gap-3">
	        <span className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 text-secondary-200 dark:text-primary-400 rounded-full flex items-center justify-center">
	          <span className="material-symbols-outlined text-3xl">code</span>
	        </span>
	        <h3 className="text-xl font-bold">Frontend Development</h3>
	      </div>
	      <div className="space-y-4">
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">HTML/CSS</span>
	            <span className="text-sm font-medium">95%</span>
	          </div>
	          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '95%'}}></div>
	          </div>
	        </div>
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">JavaScript</span>
	            <span className="text-sm font-medium">80%</span>
	          </div>
	          <div  className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div  className="h-full bg-primary-100 rounded-full" style={{width: '80%'}}></div>
	          </div>
	        </div>
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">React</span>
	            <span className="text-sm font-medium">85%</span>
	          </div>
	          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '85%'}}></div>
	          </div>
	        </div>
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">Next.js</span>
	            <span  className="text-sm font-medium">50%</span>
	          </div>
	          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '50%'}}></div>
	          </div>
	        </div>
	      </div>
	    </div>
	    
	    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
	      <div className="mb-4 flex items-center gap-3">
	        <span className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 text-secondary-200 dark:text-primary-400 rounded-full flex items-center justify-center">
	          <span className="material-symbols-outlined text-3xl">dns</span>
	        </span>
	        <h3 className="text-xl font-bold">Backend Development</h3>
	      </div>
	      <div className="space-y-4">
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">Node.js</span>
	            <span className="text-sm font-medium">85%</span>
	          </div>
	          <div  className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '85%'}}></div>
	          </div>
	        </div>
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">Express</span>
	            <span className="text-sm font-medium">80%</span>
	          </div>
	          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div  className="h-full bg-primary-100 rounded-full" style={{width: '80%'}}></div>
	          </div>
	        </div>
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">Python</span>
	            <span className="text-sm font-medium">50%</span>
	          </div>
	          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '50%'}}></div>
	          </div>
	        </div>
	      </div>
	    </div>
	    
	    
	    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
	      <div className="mb-4 flex items-center gap-3">
	        <span className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 text-secondary-200 dark:text-primary-400 rounded-full flex items-center justify-center">
	          <span className="material-symbols-outlined text-3xl">cloud</span>
	        </span>
	        <h3 className="text-xl font-bold">DevOps & Cloud</h3>
	      </div>
	      <div className="space-y-4">
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">Docker</span>
	            <span className="text-sm font-medium">80%</span>
	          </div>
	          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '80%'}}></div>
	          </div>
	        </div>
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">CI/CD</span>
	            <span className="text-sm font-medium">70%</span>
	          </div>
	          <div  className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '70%'}}></div>
	          </div>
	        </div>
	      </div>
	    </div>
	    
	    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
	      <div className="mb-4 flex items-center gap-3">
	        <span className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 text-secondary-200 dark:text-primary-400 rounded-full flex items-center justify-center">
	          <span className="material-symbols-outlined text-3xl">smart_toy</span>
	        </span>
	        <h3 className="text-xl font-bold">Other Skills</h3>
	      </div>
	      <div className="space-y-4">
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">Git/Version Control</span>
	            <span className="text-sm font-medium">95%</span>
	          </div>
	          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '95%'}}></div>
	          </div>
	        </div>
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">Agile/Scrum</span>
	            <span className="text-sm font-medium">85%</span>
	          </div>
	          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '85%'}}></div>
	          </div>
	        </div>
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">TDD</span>
	            <span className="text-sm font-medium">75%</span>
	          </div>
	          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '75%'}}></div>
	          </div>
	        </div>
	        <div>
	          <div className="flex justify-between mb-1">
	            <span className="text-sm font-medium">SEO/Analytics</span>
	            <span  className="text-sm font-medium">80%</span>
	          </div>
	          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
	            <div className="h-full bg-primary-100 rounded-full" style={{width: '80%'}}></div>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
	  
	  <div className="mt-16 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
	    <h3 className="text-xl font-bold mb-6 text-center">Professional Certifications</h3>
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	      <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-primary-100 dark:hover:border-primary-400 transition-colors duration-300">
	        <div  className="flex items-center gap-3 mb-2">
	          <span className="material-symbols-outlined text-primary-100">workspace_premium</span>
	          <h4 className="font-semibold">CS50X - Introduction to Computer Science</h4>
	        </div>
	        <p className="text-sm text-gray-600 dark:text-gray-400">Cambridge Massachusetts, 2023</p>
	      </div>
	      <div  className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-primary-100 dark:hover:border-primary-400 transition-colors duration-300">
	        <div className="flex items-center gap-3 mb-2">
	          <span className="material-symbols-outlined text-primary-100">workspace_premium</span>
	          <h4 className="font-semibold">CS50W -  Web Programming with Python & Javascript</h4>
	        </div>
	        <p className="text-sm text-gray-600 dark:text-gray-400">Cambridge Massachusetts, 2024</p>
	      </div>
	    </div>
	  </div>
	  
	  <div className="mt-10 sm:mt-12 flex justify-center">
	    <Link to="/contact-me" className="inline-flex items-center px-5 py-3 bg-secondary-100 hover:bg-primary-50 text-white rounded-full transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-transform">
	      <span>Get in Touch</span>
	      <span className="material-symbols-outlined ml-2">arrow_forward</span>
	    </Link>
	  </div>
	</section> 
  )
}

export default SkillsPage