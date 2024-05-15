import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-screen box-border  hover:transition-[background] duration-100 ease-linear delay-0 bg-[#192939]">
        <Navbar />
        {/* <div className="bg-gradient-to-br from-transparent to-sky-950"> */}
        <Hero />
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
