import React from 'react'

const AboutMePage = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 px-6">
	    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">About Me</h2>
	    
	    <div className="flex flex-col lg:flex-row items-start gap-10 mx-10">
	      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3">
	        <div className="sticky top-6">
	          <div className="relative group mb-6">
	            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
	            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
	              <img src="./marcus-pic.jpg" loading='lazy' alt="Profile of Marcus Oladunjoye" keywords="developer, coding, professional, portrait" className="w-full h-full object-cover" />
	            </div>
	          </div>
	          
	          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
	            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
	            <ul className="space-y-3">
	              <li className="flex items-center gap-3">
	                <span className="material-symbols-outlined text-primary-100">mail</span>
	                <span>pamoladize10@gmail.com</span>
	              </li>
	              <li className="flex items-center gap-3">
	                <span className="material-symbols-outlined text-primary-100">call</span>
	                <span>+234 (916) 021-1389</span>
	              </li>
	            </ul>
	            
	            <div className="mt-6 flex justify-center gap-4">
	              <a href="https://github.com/Oladize1" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-secondary-200 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-110">
	                <i className="fa-brands fa-github text-xl"></i>
	              </a>
	              <a  href="https://www.linkedin.com/in/pamilerin-oladunjoye-896ba4313/" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-secondary-200 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-110">
	                <i className="fa-brands fa-linkedin text-xl"></i>
	              </a>
	              <a href="https://x.com/Marcus__1406" target='blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-110">
	                <i className="fa-brands fa-twitter text-xl"></i>
	              </a>
	            </div>
	          </div>
	        </div>
	      </div>
	      
	      <div className="w-full lg:w-2/3">
	        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg mb-8">
	          <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-600">My Journey</h3>
	          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
	             I'm a passionate and self-driven developer currently studying at the University of Ibadan. My journey into web development began with curiosity — experimenting with HTML, CSS, and JavaScript — and has grown into a deep commitment to building user-focused, functional applications.
	          </p>
	          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
	            I’ve been actively learning full stack development through real-world projects, exploring technologies like React, Nodejs, Zustand, socket.io, MongoDB, and Tailwind CSS. Whether it's building a Chat Application  or crafting responsive interfaces, I love turning ideas into working solutions that matter.
	          </p>
	          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
	            Outside of coding, I enjoy learning about software architecture, collaborating with other developers, and finding creative ways to solve everyday problems with code. My goal is simple: keep growing, keep building, and deliver software that makes an impact.
	          </p>
	        </div>
	        
	        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
	          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-500">
	            <span className="material-symbols-outlined text-3xl text-primary-100 mb-4">school</span>
	            <h3 className="text-xl font-semibold mb-3">Education</h3>
	            <ul className="space-y-4">
	              <li>
	                <div className="text-lg font-medium">BEd, BSc in Physics</div>
	                <div className="text-gray-500 dark:text-gray-400">University of Ibadan</div>
	                <div className="text-sm text-gray-500 dark:text-gray-400">2021 - 2025</div>
	              </li>
	            </ul>
	          </div>
	          
	          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-500">
	            <span  className="material-symbols-outlined text-3xl text-primary-100 mb-4">workspace_premium</span>
	            <h3 className="text-xl font-semibold mb-3">Certifications</h3>
	            <ul className="space-y-4">
	              <li>
	                <div className="text-lg font-medium">CS50W - Web Programming with Python & Javascript</div>
	                <div className="text-sm text-gray-500 dark:text-gray-400">2024</div>
	              </li>
	              <li>
	                <div  className="text-lg font-medium">CS50X - Introduction to Computer Science</div>
	                <div className="text-sm text-gray-500 dark:text-gray-400">2023</div>
	              </li>
	            </ul>
	          </div>
	        </div>
	        
	        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg mb-8">
  <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-600">Projects</h3>
  <div className="space-y-8">
    
    <div className="relative pl-8 border-l-2 border-primary-100">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-100"></div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <h4 className="text-xl font-semibold">Real-Time Chat App</h4>
        <div className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm inline-block">2025</div>
      </div>
      <div className="text-lg text-gray-600 dark:text-gray-400 mb-2">React.js, Zustand, Socket.io</div>
      <p className="text-gray-600 dark:text-gray-300">
        Built a fully functional real-time chat application using ReactJS for the frontend and Socket.io for communication. Managed state globally with Zustand to ensure a smooth messaging experience.
      </p>
    </div>

    <div className="relative pl-8 border-l-2 border-primary-100">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-100"></div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <h4 className="text-xl font-semibold">Blog Platform</h4>
        <div className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm inline-block">2025</div>
      </div>
      <div className="text-lg text-gray-600 dark:text-gray-400 mb-2">React.js, TailwindCSS, Markdown</div>
      <p className="text-gray-600 dark:text-gray-300">
        Developed a modern blog platform where users can create, edit, and read articles written in Markdown. Focused on performance, SEO, and responsive design using React.js and Tailwind CSS.
      </p>
    </div>

    <div className="relative pl-8 border-l-2 border-primary-100">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-100"></div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <h4 className="text-xl font-semibold">Portfolio Website</h4>
        <div className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm inline-block">2025</div>
      </div>
      <div className="text-lg text-gray-600 dark:text-gray-400 mb-2">React.jS, Tailwind CSS , DaisyUI</div>
      <p className="text-gray-600 dark:text-gray-300">
        Designed and developed my personal portfolio to showcase my journey, skills, and projects. Used the latest Tailwindcss  with DaisyUI for a modern, responsive design.
      </p>
    </div>

  </div>
</div>

	        
	        
	        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
	          <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-600">Personal Interests</h3>
	          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
	           
	            
	            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-secondary-200 dark:hover:bg-primary-900/30 transition-colors duration-300">
	              <span className="material-symbols-outlined text-4xl text-primary-100 mb-3">auto_stories</span>
	              <span className="text-center">Reading</span>
	            </div>
	            
	            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-secondary-200 dark:hover:bg-primary-900/30 transition-colors duration-300">
	              <span className="material-symbols-outlined text-4xl text-primary-100 mb-3">code</span>
	              <span className="text-center">Coding</span>
	            </div>
	            
	            
	            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-secondary-200 dark:hover:bg-primary-900/30 transition-colors duration-300">
	              <span className="material-symbols-outlined text-4xl text-primary-100 mb-3">restaurant</span>
	              <span  className="text-center">Cooking</span>
	            </div>
	            
	            
	            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-secondary-200 dark:hover:bg-primary-900/30 transition-colors duration-300">
	              <span className="material-symbols-outlined text-4xl text-primary-100 mb-3">music_note</span>
	              <span className="text-center">Music</span>
	            </div>
	            
	            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-secondary-200 dark:hover:bg-primary-900/30 transition-colors duration-300">
	              <span className="material-symbols-outlined text-4xl text-primary-100 mb-3">fitness_center</span>
	              <span className="text-center">Fitness</span>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	  </section>
  )
}

export default AboutMePage