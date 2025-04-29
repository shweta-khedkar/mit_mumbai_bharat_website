import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Courses from "./pages/courses/Courses.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admissions from "./pages/Admissions.jsx";
import About from "./pages/about us/About.jsx";
import Historyandlegacy from "./pages/about us/Historyandlegacy.jsx";
import Founder from "./pages/about us/Founder.jsx";
import Ep from "./pages/about us/Ep.jsx";
import Applynow from "./pages/apply now/Applynow.jsx";

function App() {
  return (
    <Router>
      {/* Header should be outside Routes for it to show on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Courses />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="about/about-mit" element={<About />} />
        <Route path="about/history-legacy" element={<Historyandlegacy />} />
        <Route path="about/founder" element={<Founder />} />
        <Route path="about/executive-president" element={<Ep />} />
        <Route path="apply-now" element={<Applynow />} />
        {/* Add other routes here */}
      </Routes>

      {/* Footer should also be outside Routes for it to show on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
