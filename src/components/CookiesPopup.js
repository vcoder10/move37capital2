import React from "react";
import { Link } from "react-router-dom";

const CookiesPopup = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-gray-800 text-white text-sm md:text-base shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-center md:text-left">
          We use cookies to enhance your experience. Read our{" "}
          <Link
            to="/privacy"
            className="underline hover:text-gray-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookies Policy
          </Link>
          .
        </p>
        <button
          onClick={onAccept}
          className="bg-white text-gray-900 font-semibold px-4 py-1.5 rounded hover:bg-gray-200 transition"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
};

export default CookiesPopup;
