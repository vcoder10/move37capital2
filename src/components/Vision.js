import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Vision = () => {
  return (
    <>
      <Navbar />

      {/* Background Section */}
      <div className="relative min-h-screen py-20 px-6 bg-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/vision-bg.jpg" // Make sure to place the image inside /public/images/
            alt="Vision Background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Overlay content */}
        <div className="relative z-10 max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Our Vision & Commitment
          </h1>

          <div className="grid md:grid-cols-2 gap-12 text-gray-700 text-lg leading-relaxed">
            {/* Vision Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
              <p>
                At Move37 Capital, our vision is to redefine modern asset management by
                leveraging the power of machine learning, data science, and deep financial
                insight. We aim to stay at the frontier of systematic investing, delivering
                exceptional value to our institutional partners.
              </p>
              <p className="mt-4">
                We envision a world where technology and human intelligence collaborate
                seamlessly to unlock new levels of performance, transparency, and stability in
                the financial markets.
              </p>
            </div>

            {/* Commitment Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Commitment</h2>
              <p>
                We are committed to the highest standards of integrity, performance, and
                client partnership. Our dedication to research, continuous innovation, and
                rigorous risk management defines every strategy we deploy.
              </p>
              <p className="mt-4">
                Move37 Capital stands firm in building long-term relationships with our clients,
                ensuring consistent alignment with their goals while adapting to dynamic
                market environments.
              </p>
            </div>
          </div>

          {/* Optional Quote */}
          <div className="mt-20 text-center text-xl italic text-gray-600">
            "Blending human insight with machine precision to shape the future of finance."
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Vision;
