import React from 'react';

const teamMembers = [

  {
    name: 'Kunal Gautam',
    role: 'Portfolio Manager',
    image: 'https://via.placeholder.com/300x300',
    bio: `Kunal has held senior trading positions at Millennium Management, Quantmetrics Capital Management, Futex, and G.H. Financials. He has an MBA in Finance from XLRI and a Computer Science degree from IIIT Allahabad.`,
  },
  {
    name: 'Dr. Mushtaq Shah',
    role: 'Co-Founder & CIO',
    image: 'https://via.placeholder.com/300x300',
    bio: `Dr. Mushtaq Shah served as Co-Founder and CIO at Quantmetrics Capital Management (2003–2019). His extensive career includes leadership roles at Equinox Capital, Credit Suisse, NationsBank Europe, Goldman Sachs, and UBS Securities. He holds a PhD in Financial Econometrics from the London School of Economics and an MPhil in Economics from Cambridge University.`,
  },
  {
    name: 'Kedarnath Kulkarni',
    role: 'Portfolio Manager / Trading Operations',
    image: '../',
    bio: `Kedarnath joined Move37 Capital in 2023. He previously worked with TEKsystems, Sagarsoft, and Quantmetrics. He brings over a decade of experience in trading systems and holds a Bachelor's degree in Information Science from Visvesvaraya Technological University.`,
  },
  
  {
    name: 'Sameer Ashokrao Desai',
    role: 'Operations Manager',
    image: 'https://via.placeholder.com/300x300',
    bio: `Sameer joined Move37 Capital in 2023. He has worked with Flyremit, Quantmetrics, and SS&C GlobeOp. With an MBA in Finance from Shivaji University and a B.Com from Karnatak University, he brings deep experience in treasury and operations.`,
  },
];

const Team = () => {
  return (
    <section className="bg-[#FDFBCF] px-6 md:px-16" id="team">
      <h2 className="text-5xl font-bold text-center mb-16 text-blue-900">Meet Our Team</h2>

      <div className="space-y-24">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center lg:items-start bg-[#EBD58D] p-8 rounded-3xl shadow-lg"
          >
            {/* Image */}
            <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-64 h-64 rounded-2xl object-cover border-4 border-blue-500 shadow-md"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-semibold text-blue-800">{member.name}</h3>
              <p className="text-lg font-medium italic text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700 text-lg leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
