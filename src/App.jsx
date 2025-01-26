import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TechnologiesSection from "./components/TechnologiesSection";

function App() {
  return (
    <div className="bg-primary mx-8 md:mx-16 flex flex-col gap-8">
      <NavBar />
      <HeroSection />
      <TechnologiesSection />
    </div>
  );
}

export default App;
