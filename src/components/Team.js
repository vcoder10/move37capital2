import React from 'react';

const teamMembers = [
  {
    name: 'Kunal Gautam',
    role: 'Co-Founder & CEO',
    image: '/images/person.jpg',
    bio: `Kunal has held senior trading positions at Millennium Management, Quantmetrics Capital Management, Futex, and G.H. Financials. He has an MBA in Finance from XLRI and a Computer Science degree from IIIT Allahabad.`,
    linkedIn: 'https://www.linkedin.com/in/kungautam/',
  },
  {
    name: 'Dr. Mushtaq Shah',
    role: 'Co-Founder & CIO',
    image: '/images/person.jpg',
    bio: `Dr. Mushtaq Shah served as Co-Founder and CIO at Quantmetrics Capital Management (2003–2019). His extensive career includes leadership roles at Equinox Capital, Credit Suisse, NationsBank Europe, Goldman Sachs, and UBS Securities. He holds a PhD in Financial Econometrics from the London School of Economics and an MPhil in Economics from Cambridge University.`,
    linkedIn: 'https://www.linkedin.com/in/mushtaq-shah-9103a124/',
  },
  {
    name: 'Kedarnath Kulkarni',
    role: 'Portfolio Manager / Trading Operations',
    image: '/images/kedar.jpg',
    bio: `Kedarnath joined Move37 Capital in 2023. He previously worked with TEKsystems, Sagarsoft, and Quantmetrics. He brings over a decade of experience in trading systems and holds a Bachelor's degree in Information Science from Visvesvaraya Technological University.`,
    linkedIn: 'https://www.linkedin.com/in/kedarnath-kulkarni-32441136',
  },
  {
    name: 'Sameer Ashokrao Desai',
    role: 'Operations Manager',
    image: '/images/sameer.png',
    bio: `Sameer joined Move37 Capital in 2023. He has worked with Flyremit, Quantmetrics, and SS&C GlobeOp. With an MBA in Finance from Shivaji University and a B.Com from Karnatak University, he brings deep experience in treasury and operations.`,
    linkedIn: 'https://www.linkedin.com/in/sameer-a-desai-778963182/',
  },
];

const Team = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-12" id="team">
      <h2 className="text-5xl font-bold text-center mb-16 text-blue-900">Meet Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center p-4 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            {/* Image Container */}
            <div className="w-full md:w-1/3 h-80 bg-gray-200 rounded-2xl overflow-hidden mb-4 md:mb-0">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Details Container */}
            <div className="w-full md:w-2/3 p-6">
              <h3 className="text-3xl font-semibold text-blue-800">{member.name}</h3>
              <p className="text-lg font-medium italic text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700 mb-4">{member.bio}</p>
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
