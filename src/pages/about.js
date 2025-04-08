import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-400 flex justify-between items-center px-6 py-4 shadow">
        <div>
          <img src="/images/logo.jpg" alt="logo" className="h-16 w-16" />
        </div>
        <div className="flex gap-6 text-white font-medium text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* About Content */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          We are a hedge fund company focused on using cutting-edge Artificial Intelligence models 
          to forecast investment opportunities in the US and UK futures markets.
          <br /><br />
          Our strategy combines data-driven insights with decades of market experience. 
          Our proprietary AI models analyze millions of data points in real-time, 
          allowing us to make precise, high-confidence decisions in the most volatile markets.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
