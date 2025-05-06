import React, { useEffect } from 'react';

const DisclaimerPopup = ({ onAgree }) => {
    useEffect(() => {
        // Disable scrolling on popup open
        document.body.style.overflow = 'hidden';

        return () => {
            // Re-enable scrolling on popup close
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center px-6">
            <div className="max-w-2xl w-full bg-white shadow-xl p-8 rounded-lg border border-gray-300 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Website Disclaimer</h2>
                <p className="text-sm text-gray-600 mt-4">
                    Read our{" "}
                    <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                        href="/disclaimer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        Terms of Use
                    </a>
                    .
                </p>

                <button
                    onClick={onAgree}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition"
                >
                    I Agree
                </button>
            </div>
        </div>
    );
};

export default DisclaimerPopup;
