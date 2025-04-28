import React from 'react';

const Stats = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-background3.jpg" // Add a finance style image here
          alt="Stats Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Foreground Content */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">Our Global Footprint</h2>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div>
              <h3 className="text-5xl font-extrabold text-blue-500">$350M+</h3>
              <p className="text-gray-200 mt-4 text-lg">Assets Under Management</p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold text-blue-500">10+</h3>
              <p className="text-gray-200 mt-4 text-lg">Global Investors</p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold text-blue-500">5+</h3>
              <p className="text-gray-200 mt-4 text-lg">Countries Served</p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold text-blue-500">3 Years</h3>
              <p className="text-gray-200 mt-4 text-lg">Industry Experience</p>
            </div>
          </div>

          {/* Top Investors */}
          <div>
            <h3 className="text-3xl font-semibold mb-10 text-white">Our Top Investors</h3>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-left px-10">
              {['Morgan Stanley', 'Cav Master', 'Pentimon', 'Fortress', 'RQSI'].map((name, index) => (
                <div key={index} className="text-white text-lg font-medium pl-4 border-l-4 border-blue-500">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
