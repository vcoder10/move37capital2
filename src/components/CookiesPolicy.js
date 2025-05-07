import React from "react";

const CookiesPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Cookies Policy</h1>

      <p className="text-gray-700 mb-4">
        This Cookies Policy explains how we use cookies and similar technologies on our website.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Types of Cookies We Use</h2>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li className="mb-2">
          <strong>Session Cookies</strong> – These are temporary cookies that remain in the cookie file of your browser until you close the browser. This is to ensure connections to our servers are distributed evenly to provide optimal performance.
        </li>
        <li>
          <strong>Analytical Cookies</strong> – Our website uses Google Analytics cookies (third-party cookies) to:
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Record the time of your first and most recent visit to the website.</li>
            <li>Track the duration of your visit.</li>
            <li>Understand how you located our website (e.g., Google search, referral links).</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. How We Handle Cookie Data</h2>
      <p className="text-gray-700 mb-4">
        We only share the information obtained through Google Analytics with Google. These cookies do not track your Internet usage after leaving our website and do not store your personal information. They are not used in connection with any other information to identify you personally.
      </p>
      <p className="text-gray-700 mb-4">
        We may collect technical information about your device, such as IP address, operating system, and browser type for system administration. This information is statistical and does not identify you as an individual.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. How to Manage Cookies</h2>
      <p className="text-gray-700 mb-4">
        You may refuse cookies by activating the setting on your browser that allows you to block cookies. However, doing so may limit your ability to use certain parts of our site. Unless you change your browser settings to reject cookies, our system will set the cookies described above when you visit our site.
      </p>
    </div>
  );
};

export default CookiesPolicy;
