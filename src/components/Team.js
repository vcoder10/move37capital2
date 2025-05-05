import React from 'react';

const teamMembers = [
  {
    name: 'Kunal Gautam',
    role: 'Co-Founder & CEO',
    image: '/images/kunal.jpg',
    bio: `Kunal brings over 15 years of experience in trading and portfolio management. He has served as a Portfolio Manager at Millennium Management and was previously a Partner at Quantmetrics Capital Management. Earlier in his career, he held roles as a Quantitative Trader at Futex and a Proprietary Trader at G.H. Financials. Kunal holds an MBA in Finance from XLRI Jamshedpur (India) and a B.Tech in Information Technology from the Indian Institute of Information Technology (IIIT), Allahabad (India).`,
    linkedIn: 'https://www.linkedin.com/in/kungautam/',
  },
  {
    name: 'Dr. Mushtaq Shah',
    role: 'Co-Founder & CIO',
    image: '/images/person.jpg',
    bio: `Dr. Mushtaq Shah is a seasoned investor and economist with over three decades of experience in financial markets and quantitative research. He was the Co-Founder and CIO of Quantmetrics Capital Management from 2003 to 2019. Prior to that, he served as Head of Research at Equinox Capital Management, where he led a multi-strategy equity arbitrage hedge fund (Eclipse1). His earlier roles include senior positions at Credit Suisse First Boston, NationsBank Europe (Bank of America), and Goldman Sachs, where he held leadership roles in proprietary trading and quantitative analysis.\n\nDr. Shah began his career as a European Economic Analyst at UBS Securities. He holds a PhD in Financial Econometrics from the London School of Economics and an MPhil in Economics from the University of Cambridge.`,
    linkedIn: 'https://www.linkedin.com/in/mushtaq-shah-9103a124/',
  },
];

const Team = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-12" id="team">
      <h2 className="text-5xl font-bold text-center mb-16 text-blue-900">Our Leadership</h2>

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
              {member.bio.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-700 mb-4">{paragraph}</p>
              ))}
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
