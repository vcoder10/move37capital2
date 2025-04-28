import React from 'react';

const About = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-background5.jpg" // Save your new background image here
          alt="About Background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <section className="max-w-4xl bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">About Us</h1>

          <p className="text-gray-700 text-lg leading-relaxed space-y-4">
            <span className="block mb-4">
            <strong className="text-blue-600">Move37 Capital</strong> is a fast-growing, London-based hedge fund with 
              <strong className="text-blue-600"> $400 million</strong> in Assets Under Management (AUM). 
              The firm’s investor base is institutional, comprising prominent, globally recognized names.
            </span>

            <span className="block mb-4">
              Conceptualised in 2021 by 
              <strong className="text-blue-600"> Kunal Gautam</strong> and<strong className="text-blue-600"> Dr. Mushtaq Shah</strong>, 
              Move37 Capital was established to pursue cutting-edge strategies at the intersection of 
              <strong className="text-blue-600"> machine learning</strong> and financial markets.
            </span>

            <span className="block mb-4">
              Prior to launching Move37, both founders were partners at Quantmetrics, a London-based systematic hedge fund founded in 2003 by Dr. Shah.
            </span>

            <span className="block">
              As Move37 continues its rapid growth, we are actively seeking talented professionals 
              to join our team and help shape the future of finance.
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;