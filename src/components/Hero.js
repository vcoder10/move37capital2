import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background video
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/home-hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="absolute inset-0">
        <img
          src="/images/london_city2.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">We are Fastest Growing Investment Company</h1>
        <p className="text-lg md:text-2xl mb-6">
          Trusted by top investors worldwide for excellence in portfolio management.
        </p>
        <Link
          to="/contact"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Hero;
