import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import ThankYou from "./Pages/Home/ThankYou";

function App() {
  const [language, setLanguage] = useState("sv");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "sv" ? "en" : "sv"));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home language={language} toggleLanguage={toggleLanguage} />}
        />
        <Route path="/thank-you" element={<ThankYou language={language} />} />
        <Route
          path="*"
          element={
            <div className="not-found-page">
              <img
                src="/404error.png"
                alt="404 not found"
                className="not-found-image"
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
