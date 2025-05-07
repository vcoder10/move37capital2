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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#072e4d] text-white rounded-md shadow-lg max-w-3xl w-full max-h-[90vh] p-6 overflow-hidden flex flex-col">
        <h2 className="text-2xl font-semibold mb-4 text-[#d7b774]">Disclaimer and Notices</h2>
        <div className="overflow-y-auto text-sm pr-2 mb-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Disclaimer</h3>
            <p>
              This disclaimer (“Disclaimer”) sets forth the general guidelines, disclosures, and terms of your use of the Move37 Capital website (“Website” or “Service”).
              By accessing and using the Website, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Intended Audience</h3>
            <p>
              This site is for general informational purposes only. Nothing on this site should be construed as an offer to, or solicitation of, any potential clients
              or investors for the provision of investment management or advisory services.
            </p>
          </div>
          <div>
            <Link to="/privacy" className="underline text-blue-200 hover:text-blue-100" target="_blank" rel="noopener noreferrer">
              Read our full Privacy Policy
            </Link>
          </div>
        </div>

        <div className="flex justify-end gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
