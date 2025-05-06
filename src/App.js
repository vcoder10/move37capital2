import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DisclaimerPopup from "./components/DisclaimerPopup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Disclaimer from "./components/Disclaimer";

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleAgree = () => {
    setShowDisclaimer(false);
  };

  // Custom logic to check if current path is allowed without agreement
  const location = useLocation();
  const isUnrestrictedPath = location.pathname === "/privacy" || location.pathname === "/disclaimer";

  return (
    <>
      {showDisclaimer && !isUnrestrictedPath && (
        <DisclaimerPopup onAgree={handleAgree} />
      )}

      <Routes>
        <Route path="/" element={showDisclaimer ? null : <Home />} />
        <Route path="/about" element={showDisclaimer ? null : <AboutPage />} />
        <Route path="/contact" element={showDisclaimer ? null : <ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
