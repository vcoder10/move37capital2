import React from 'react';

const Disclaimer = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Disclaimer</h1>
      <p className="text-lg text-gray-700 mb-4">
        The information provided on this website is for informational purposes only and is not intended to be financial
        advice. All investment decisions should be made with careful consideration of your individual circumstances and
        in consultation with a licensed financial advisor.
      </p>
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">1. Accuracy of Information</h2>
      <p className="text-lg text-gray-700 mb-4">
        While we strive to provide accurate and up-to-date information, we make no guarantees regarding the accuracy,
        completeness, or reliability of the information on this site.
      </p>
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">2. No Liability</h2>
      <p className="text-lg text-gray-700 mb-4">
        We are not responsible for any damages or losses that may arise from the use of the information provided on this
        website.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        By using this website, you acknowledge that you have read and understood this disclaimer.
      </p>
    </div>
  );
};

export default Disclaimer;
