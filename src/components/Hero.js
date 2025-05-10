import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden ">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/London-Slide.jpg"
          alt="Background"
          className="w-full h-full object-cover object-bottom "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-15 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-blue-900 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-center relative inline-block ">
  A Fast Growing Asset Management Firm
  <sup className="relative -top-2 sm:-top-3 md:-top-4 text-2xl sm:text-base md:text-3xl ml-1">*</sup>
</h1>

        <p className="text-base sm:text-lg md:text-2xl mb-6">
          Trusted by top institutional investors
        </p>
        <Link
          to="/contact"
          className="bg-[#122F43] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#122F68] transition text-sm sm:text-base"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Hero;
