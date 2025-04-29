import React from 'react';

const Stats = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/stats-bg.jpg"
          alt="Stats Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Foreground Content */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-20">Our Global Footprint</h2>

          {/* 2x2 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12 text-white">
            <div className="flex flex-col items-center">
              <h3 className="text-6xl font-extrabold text-blue-500">$350M+</h3>
              <p className="mt-4 text-xl tracking-wide">Assets Under Management</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-6xl font-extrabold text-blue-500">10+</h3>
              <p className="mt-4 text-xl tracking-wide">Global Investors</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-6xl font-extrabold text-blue-500">5+</h3>
              <p className="mt-4 text-xl tracking-wide">Countries Served</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-6xl font-extrabold text-blue-500">3 Years</h3>
              <p className="mt-4 text-xl tracking-wide">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
