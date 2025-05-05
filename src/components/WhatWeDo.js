import React from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-white py-28 px-6">
      <div className="w-full max-w-[1200px] px-4 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-wide relative inline-block text-center">
          What We Do
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-6 leading-relaxed tracking-wide text-justify">
          <strong className="text-gray-900 font-medium">Move37 Capital</strong> is an
          <span className="text-blue-700 font-semibold"> AI-driven hedge fund</span> operating at the intersection of data science and statistics. We employ advanced machine learning models to guide our investment decisions. Our name — <strong className="text-gray-900 font-medium">Move37</strong> — pays tribute to the legendary 37th move made by DeepMind’s AlphaGo in its historic match against world champion Lee Sedol, which demonstrated the creative potential of AI in strategic decision-making. This moment captures our mission: to bring intelligent, unconventional decision-making to the complex world of global financial markets.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
