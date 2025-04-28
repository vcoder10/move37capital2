import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className='bg-black py-4 shadow-md'>
        <div className='container mx-auto flex items-center justify-between px-6'>

          {/* Logo */}
          <div className='flex items-center space-x-4'>
            <img src='./images/logo.jpg' alt='logo' className='h-12 w-60 object-cover' />
            {/* <span className='text-white text-2xl font-bold'>Move37</span> */}
          </div>

          {/* Navigation Links */}
          <div className='flex space-x-6'>
            <Link
              to="/"
              className="text-white text-lg hover:underline hover:text-yellow-300 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-lg hover:underline hover:text-yellow-300 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg hover:underline hover:text-yellow-300 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar