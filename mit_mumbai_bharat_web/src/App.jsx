import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Courses from "./pages/Courses/Courses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admissions from "./pages/Admissions";

function App() {
  return (
    <Router>
      {/* Header should be outside Routes for it to show on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Courses />} />
        <Route path="/admissions" element={<Admissions />} />
        {/* Add other routes here */}
      </Routes>

      {/* Footer should also be outside Routes for it to show on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
