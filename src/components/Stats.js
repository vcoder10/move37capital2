import React from 'react';

const Stats = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/stats-bg.jpg"
          alt="Stats Background"
          className="w-full h-full object-cover brightness-110"
        />
      </div>

      {/* Lighter Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Foreground Content */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white drop-shadow-lg mb-20">
            Our Global Footprint
          </h2>

          {/* 2x2 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12 text-white">
            {[
              { value: '$350M+', label: 'Assets Under Management' },
              { value: '10+', label: 'Global Investors' },
              { value: '5+', label: 'Countries Served' },
              { value: '3 Years', label: 'Industry Experience' }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <h3 className="text-6xl font-extrabold text-blue-500 drop-shadow-md">
                  {stat.value}
                </h3>
                <p className="mt-4 text-xl tracking-wide text-white/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
