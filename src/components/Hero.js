import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/image.png"
          alt="Background"
          className="w-full h-full object-cover object-bottom opacity-100"
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          A Fast Growing Asset Management Firm<span className="text-red-700 text-3xl ">*</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Trusted by top institutional investors
        </p>
        <Link
          to="/contact"
          className="bg-blue-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>

        {/* Disclosure text */}
        <p className="text-sm mt-4 text-black">
          Move37 Capital is a trading name of Laven Advisors LLP which is authorised by the Financial Conduct Authority.
        </p>
      </div>
    </div>
  );
};

export default Hero;
