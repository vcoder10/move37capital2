import React from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-white py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block tracking-wide">
          What We Do
          
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-6 leading-loose tracking-wide">
          <span className="block md:inline">
            <strong className="text-gray-900 font-medium">Move37 Capital</strong> is a premier asset
            management firm,
          </span>
          <br className="hidden md:block" />
          <span className="block md:inline">
            focused on delivering <span className="text-blue-700 font-semibold">unique insight</span> and
            partnership
          </span>
          <br className="hidden md:block" />
          <span className="block md:inline">
            for the most sophisticated global institutional investors.
          </span>
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
