import React from "react";

// import Components
import Hero from "../Components/Hero";
import Project from "../Components/Project";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Footer from "../Components/Footer";

function homePage() {
  return (
    <div className="bg-[#E5E5E5]">
      <Navbar />
      <Hero />
      <Project />
      <About />
      <Footer />
    </div>
  );
}

export default homePage;
