import React, { useState } from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const Home = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <>
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
    </>
  );
};

export default Home;
