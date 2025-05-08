import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const DisclaimerPopup = ({ onAgree, onDisagree }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-[#072e4d] text-white rounded-lg shadow-xl w-[90vw] h-[90vh] p-8 flex flex-col justify-between">
        {/* Header */}
        <header>
          <h2 className="text-3xl font-bold mb-2 text-[#d7b774]">Disclaimer and Notices</h2>
          <p className="text-sm text-gray-300">
            Please read and accept our disclaimer to continue using the site.
          </p>
        </header>

        {/* Scrollable content */}
        <section className="overflow-y-auto mt-6 mb-8 pr-2 space-y-6 text-sm leading-relaxed flex-1">
          <div>
            <h3 className="font-semibold text-lg text-white mb-1">Disclaimer</h3>
            <p>
              This disclaimer (“Disclaimer”) sets forth the general guidelines, disclosures, and terms of your use of the Move37 Capital website (“Website” or “Service”).
              By accessing and using the Website, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white mb-1">Intended Audience</h3>
            <p>
              This site is for general informational purposes only. Nothing on this site should be construed as an offer to, or solicitation of, any potential clients
              or investors for the provision of investment management or advisory services.
            </p>
          </div>
          <div>
            <Link
              to="/privacy"
              className="underline text-blue-200 hover:text-blue-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our full Privacy Policy
            </Link>
          </div>
        </section>

        {/* Footer Buttons */}
        <footer className="flex justify-between items-center">
          <button
            onClick={onDisagree}
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#072e4d] transition"
          >
            Do not accept
          </button>
          <button
            onClick={onAgree}
            className="bg-[#d7b774] text-[#072e4d] font-semibold px-4 py-2 rounded hover:bg-[#e5c88c] transition"
          >
            Accept
          </button>
        </footer>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
