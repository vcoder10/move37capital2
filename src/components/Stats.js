import React from 'react'

const Stats = () => {
  return (
    <div>
      <section className="bg-black py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Global Footprint</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">$350M+</h3>
              <p className="text-white mt-2">Assets Under Management</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">10+</h3>
              <p className="text-white mt-2">Global Investors</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">5+</h3>
              <p className="text-white mt-2">Countries Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">3 Years</h3>
              <p className="text-white mt-2">Industry Experience</p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-white">Our Top Investors</h3>

            <div className="grid gap-8 text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <div className="text-lg font-medium text-white pl-4">
                Morgan Stanley
              </div>
              <div className="text-lg font-medium text-white pl-4">
                Cav Master
              </div>
              <div className="text-lg font-medium text-white pl-4">
                Pentimon
              </div>
              <div className="text-lg font-medium text-white pl-4">
                Fortress
              </div>
              <div className="text-lg font-medium text-white pl-4">
                RQSI
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Stats