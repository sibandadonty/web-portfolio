import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="bg-primary mx-8 md:mx-16">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
