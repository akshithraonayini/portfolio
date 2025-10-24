import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Leetcode from "./components/Leetcode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AdminDashboard from "./pages/AdminDashboard"; // Import your dashboard

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Portfolio Pages */}
        <Route
          path="/"
          element={
            <div className="relative min-h-screen pb-12">
              <Navbar />

              <div id="home">
                <Hero />
              </div>

              <div id="aboutme">
                <About />
              </div>

              <div id="skills">
                <Skills />
              </div>

              <div id="projects">
                <Projects />
              </div>

              <div id="leetcode">
                <Leetcode />
              </div>

              <div id="contact">
                <Contact />
              </div>

              <Footer />
            </div>
          }
        />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
