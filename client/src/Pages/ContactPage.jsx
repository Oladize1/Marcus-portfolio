import React from 'react'

const ContactPage = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 relative overflow-hidden">
	  <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Get In Touch</h2>
	  
	  <div className="max-w-6xl mx-auto">
	    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
	      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
	        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
	        
	        <div className="space-y-4">
	          <div className="flex items-start gap-4">
	            <span className="w-10 h-10 bg-primary-100 dark:bg-primary-900/40 text-secondary-100 dark:text-primary-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
	              <span className="material-symbols-outlined">mail</span>
	            </span>
	            <div>
	              <h4 className="font-semibold text-lg">Email</h4>
	              <a href="mailto:alex.morgan@example.com" className="text-gray-600 dark:text-gray-400 hover:text-secondary-100 dark:hover:text-primary-400 transition-colors">pamoladize10@gmail.com</a>
	            </div>
	          </div>
	          
	          <div className="flex items-start gap-4">
	            <span className="w-10 h-10 bg-primary-100 dark:bg-primary-900/40 text-secondary-100 dark:text-primary-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
	              <span className="material-symbols-outlined">call</span>
	            </span>
	            <div>
	              <h4 className="font-semibold text-lg">Phone</h4>
	              <a href="tel:+15551234567" className="text-gray-600 dark:text-gray-400 hover:text-secondary-100 dark:hover:text-primary-400 transition-colors">+234 (916) 021-1389</a>
	            </div>
	          </div>
	          
	          {/* <div className="flex items-start gap-4">
	            <span className="w-10 h-10 bg-primary-100 dark:bg-primary-900/40 text-secondary-100 dark:text-primary-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
	              <span className="material-symbols-outlined">location_on</span>
	            </span>
	            <div>
	              <h4 className="font-semibold text-lg">Location</h4>
	              <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
	            </div>
	          </div>
	           */}
	          <div className="flex items-start gap-4">
	            <span className="w-10 h-10 bg-primary-100 dark:bg-primary-900/40 text-secondary-100 dark:text-primary-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
	              <span className="material-symbols-outlined">schedule</span>
	            </span>
	            <div >
	              <h4 className="font-semibold text-lg">Working Hours</h4>
	              <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 9am - 6pm</p>
	            </div>
	          </div>
	        </div>
	        
	        <div className="mt-8">
	          <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
	          <div className="flex gap-4">
	            <a href="https://github.com/Oladize1" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/70 transition-all duration-300 transform hover:scale-110">
	              <i className="fa-brands fa-github text-xl"></i>
	            </a>
	            <a href="https://www.linkedin.com/in/pamilerin-oladunjoye-896ba4313/" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/70 transition-all duration-300 transform hover:scale-110">
	              <i className="fa-brands fa-linkedin text-xl"></i>
	            </a>
	            <a href="https://x.com/Marcus__1406" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/70 transition-all duration-300 transform hover:scale-110">
	              <i className="fa-brands fa-twitter text-xl"></i>
	            </a>
	          </div>
	        </div>
	      </div>
	      {/* Form */}
	      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
	        <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
	        
	        <form>
	          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
	            <div>
	              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
	              <input 
	                type="text" 
	                id="name" 
	                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300" 
	                placeholder="Your name"
	              />
	            </div>
	            <div>
	              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
	              <input 
	                type="email" 
	                id="email" 
	                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300" 
	                placeholder="Your email"
	              />
	            </div>
	          </div>
	          
	          <div className="mb-4">
	            <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
	            <input 
	              type="text" 
	              id="subject" 
	              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300" 
	              placeholder="Subject"
	            />
	          </div>
	          
	          <div className="mb-6">
	            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
	            <textarea 
	              id="message" 
	              rows="6" 
	              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300" 
	              placeholder="Your message"
	            ></textarea>
	          </div>
	          
	          <button 
	            type="submit" 
	            className="w-full sm:w-auto px-6 py-3 bg-secondary-100 hover:bg-secondary-200 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
	          >
	            <span>Send Message</span>
	            <span className="material-symbols-outlined">send</span>
	          </button>
	        </form>
	      </div>
	    </div>
	    {/* FAQ */}
	    <div className="mt-12 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
	      <h3 className="text-xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
	      
	      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
	        <details className="group border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-400 transition-colors duration-300">
	          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
	            <span>What services do you offer?</span>
	            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
	          </summary>
	          <div className="mt-3 text-gray-600 dark:text-gray-400">
	            I specialize in full-stack web development, UI/UX design, responsive websites, web applications, and mobile app development using modern frameworks and technologies.
	          </div>
	        </details>
	        
	        <details className="group border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-400 transition-colors duration-300">
	          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
	            <span>What is your typical process for a project?</span>
	            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
	          </summary>
	          <div className="mt-3 text-gray-600 dark:text-gray-400">
	            My process typically involves discovery, planning, design, development, testing, and deployment phases. I believe in an iterative approach with regular client feedback throughout the project lifecycle.
	          </div>
	        </details>
	        
	        <details className="group border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-400 transition-colors duration-300">
	          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
	            <span>How long does a typical project take?</span>
	            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
	          </summary>
	          <div className="mt-3 text-gray-600 dark:text-gray-400">
	            Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I'll provide a detailed timeline during our initial consultation.
	          </div>
	        </details>
	        
	        <details className="group border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-400 transition-colors duration-300">
	          <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
	            <span>Do you provide ongoing support?</span>
	            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
	          </summary>
	          <div className="mt-3 text-gray-600 dark:text-gray-400">
	            Yes, I offer various maintenance and support packages to ensure your project continues to run smoothly after launch. This includes updates, bug fixes, and performance optimization.
	          </div>
	        </details>
	      </div>
	    </div>
	  </div>
	  
	  <div  className="mt-10 sm:mt-12 flex justify-center"></div>
	</section>
	
  )
}

export default ContactPage