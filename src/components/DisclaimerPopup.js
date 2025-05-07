import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const DisclaimerPopup = ({ onAgree }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      {/* Full-page blocker with blur */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm pointer-events-auto" />

      {/* Top disclaimer bar with interaction */}
      <div className="relative z-10 pointer-events-auto bg-blue-900 text-white text-sm md:text-base shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-center md:text-left">
            By using this site, you agree to our{" "}
            <Link
              to="/privacy"
              className="underline hover:text-blue-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              to="/disclaimer"
              className="underline hover:text-blue-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </Link>
            .
          </p>
          <button
            onClick={onAgree}
            className="bg-white text-blue-900 font-semibold px-4 py-1.5 rounded hover:bg-gray-100 transition"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
