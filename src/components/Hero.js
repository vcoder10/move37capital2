import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div><section
    className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
    style={{
      backgroundImage: "url('./images/hero.jpg')", // Make sure hero.jpg exists in /public/images or imported
    }}
  >
    <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0"></div>

    <div className="z-10 text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">We are the No. 1 Investment Company</h1>
      <p className="text-lg md:text-2xl mb-6">Trusted by top investors worldwide for excellence in portfolio management.</p>
      <Link
        to="/contact"
        className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        Get in Touch
      </Link>
    </div>
  </section></div>
  )
}

export default Hero