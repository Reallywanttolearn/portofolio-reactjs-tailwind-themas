import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-white bg-gray-900 body-font">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
