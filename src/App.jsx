import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-screen box-border  hover:transition-[background] duration-100 ease-linear delay-0 bg-[#131f2c]">
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
