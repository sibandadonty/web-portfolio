import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="bg-primary mx-8 md:mx-16 flex flex-col gap-8 text-white">
      <NavBar />
      <HeroSection />
      <TechnologiesSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
