import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='flex items-center justify-between p-10 px-6 flex-wrap'>
      <div className="mb-4 md:mb-0">
	      <p className="text-3xl font-bold text-primary-100">Marcus Oladunjoye</p>
	      <p className="text-gray-600 dark:text-gray-400 mt-1">Full Stack Developer & UI/UX Enthusiast</p>
	    </div>
      <nav className=" hidden w-full md:w-auto md:block">
	      <ul className="flex flex-wrap justify-start md:justify-end gap-4 md:gap-6">
          <li><Link to="/" className="px-3 py-2 rounded-full hover:bg-secondary-200 transition-all duration-300 hover:scale-105">Home</Link></li>
	        <li><Link to="/about-me" className="px-3 py-2 rounded-full hover:bg-secondary-200 transition-all duration-300 hover:scale-105">About</Link></li>
	        <li ><Link to="#projects" className="px-3 py-2 rounded-full hover:bg-secondary-200 transition-all duration-300 hover:scale-105">Projects</Link></li>
	        <li><Link to="#skills" className="px-3 py-2 rounded-full hover:bg-secondary-200 transition-all duration-300 hover:scale-105">Skills</Link></li>
	        {/* <li><Link to="#experience" className="px-3 py-2 rounded-full hover:bg-secondary-200  transition-all duration-300 hover:scale-105">Experience</Link></li> */}
	        <li><Link to="#contact" className="px-3 py-2 rounded-full hover:bg-secondary-200 transition-all duration-300 hover:scale-105">Contact</Link></li>
	      </ul>
	    </nav>
      <div className='lg:hidden'>
      <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-secondary">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
    </label>
  </div>
  <div className="drawer-side z-20">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-4 md:gap-6">
      {/* Sidebar content here */}
      <li><Link to="#about" className="px-3 py-2 rounded-full hover:bg-secondary-200 transition-all duration-300 hover:scale-105">About</Link></li>
	        <li ><a href="#projects" className="px-3 py-2 rounded-full hover:bg-secondary-200 transition-all duration-300 hover:scale-105">Projects</a></li>
	        <li><Link to="#skills" className="px-3 py-2 rounded-full hover:bg-secondary-200 transition-all duration-300 hover:scale-105">Skills</Link></li>
	        <li><Link to="#experience" className="px-3 py-2 rounded-full hover:bg-secondary-200  transition-all duration-300 hover:scale-105">Experience</Link></li>
	        <li><Link to="#contact" className="px-3 py-2 rounded-full hover:bg-secondary-200 transition-all duration-300 hover:scale-105">Contact</Link></li>
    </ul>
  </div>
      </div>
      </div>
    </header>
  )
}

export default Navbar