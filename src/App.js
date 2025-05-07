import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DisclaimerPopup from "./components/DisclaimerPopup";
import CookiesPopup from "./components/CookiesPopup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Disclaimer from "./components/Disclaimer";
import CookiesPolicy from "./components/CookiesPolicy";

function App() {
  const location = useLocation();

  const isUnrestrictedPath =
    location.pathname === "/privacy" || location.pathname === "/disclaimer";

  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  // Check localStorage on first load
  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem("disclaimerAccepted");
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!disclaimerAccepted && !isUnrestrictedPath) {
      setShowDisclaimer(true);
    }

    if (disclaimerAccepted && !cookiesAccepted) {
      // delay showing cookies popup after disclaimer is accepted
      setTimeout(() => {
        setShowCookies(true);
      }, 5000);
    }
  }, [isUnrestrictedPath]);

  const handleAgreeDisclaimer = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setShowDisclaimer(false);

    // show cookie popup in 5 seconds
    setTimeout(() => {
      if (!localStorage.getItem("cookiesAccepted")) {
        setShowCookies(true);
      }
    }, 5000);
  };

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookies(false);
  };

  return (
    <div className={showDisclaimer && !isUnrestrictedPath ? "overflow-hidden h-screen" : ""}>
      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact" element={<CookiesPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>

      {/* Popups */}
      {showDisclaimer && !isUnrestrictedPath && (
        <DisclaimerPopup onAgree={handleAgreeDisclaimer} />
      )}

      {showCookies && (
        <CookiesPopup onAccept={handleAcceptCookies} />
      )}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
