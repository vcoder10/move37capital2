import React from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-white py-20 px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 tracking-wide text-center">
          What We Do
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-6 leading-relaxed tracking-wide text-center">
          <strong className="text-blue-500 font-medium">Move37 Capital</strong> is an
           AI-driven hedge fund operating at the intersection of data science and statistics. 
          We employ advanced machine learning models to guide our investment decisions. </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-6 leading-relaxed tracking-wide text-center">Our name — <strong className="text-blue-500 font-medium"> Move37</strong> — pays tribute to the legendary 37th move made by DeepMind’s AlphaGo in its 
          historic match against world champion Lee Sedol, which demonstrated the creative potential of AI in strategic decision-making. 
          This moment captures our mission: to bring intelligent, unconventional decision-making to the complex world of global financial markets.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
