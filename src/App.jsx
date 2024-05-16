import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeLink, setActiveLink] = useState(null);
  return (
    <BrowserRouter>
      <div className="min-h-screen scroll-smooth   box-border  hover:transition-[background] duration-100 ease-linear delay-0 bg-[#192939]">
        <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
        {/* <div className="bg-gradient-to-br from-transparent to-sky-950"> */}
        <Hero activeLink={activeLink} setActiveLink={setActiveLink} />
        {/* </div> */}
        <About activeLink={activeLink} setActiveLink={setActiveLink} />
        <Projects activeLink={activeLink} setActiveLink={setActiveLink} />
        <Contact activeLink={activeLink} setActiveLink={setActiveLink} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
