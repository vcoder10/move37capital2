import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DisclaimerPopup from "./components/DisclaimerPopup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Disclaimer from "./components/Disclaimer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  const isUnrestrictedPath =
    location.pathname === "/privacy" || location.pathname === "/disclaimer";

  const [showDisclaimer, setShowDisclaimer] = useState(() => {
    const agreed = localStorage.getItem("userAgreed");
    return agreed !== "true";
  });

  const handleDisagree = () => {
    // Optional: You can redirect them or just leave the site
    alert("You must accept the disclaimer to proceed.");
    // For example, redirect to /disclaimer or close the tab
    window.location.href = "/disclaimer"; // or you can use navigate("/disclaimer")
  };

  const handleAgree = () => {
    localStorage.setItem("userAgreed", "true");
    setShowDisclaimer(false);
  };

  return (
    <div className={showDisclaimer && !isUnrestrictedPath ? "overflow-hidden h-screen" : ""}>
      {/* Always render routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>

     

    {showDisclaimer && !isUnrestrictedPath && (
      <DisclaimerPopup onAgree={handleAgree} onDisagree={handleDisagree} />
    )}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>
  );
}
