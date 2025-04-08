import React from 'react'

const Stats = () => {
  return (
    <div>
        <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Global Footprint</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">$50B+</h3>
              <p className="text-gray-600 mt-2">Assets Under Management</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">300+</h3>
              <p className="text-gray-600 mt-2">Global Investors</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">25+</h3>
              <p className="text-gray-600 mt-2">Countries Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">15 Years</h3>
              <p className="text-gray-600 mt-2">Industry Experience</p>
            </div>
          </div>

          {/* Trusted Investors */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-4">Backed by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="text-xl font-medium text-gray-700">JP Morgan</div>
              <div className="text-xl font-medium text-gray-700">Morgan Stanley</div>
              <div className="text-xl font-medium text-gray-700">Goldman Sachs</div>
              <div className="text-xl font-medium text-gray-700">BlackRock</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stats