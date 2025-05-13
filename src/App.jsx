import { useState } from "react";
import "./styles/App.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Count_down from "./count_down";
import About_us from "./About_us";
import Footer from "./Footer";

function App() {

  
  return (
    <div className="app">
        <Header />
        <HeroSection />
        <Count_down />
        <h1 className="about-header">About <span>us</span></h1>
        <About_us />
        <Footer />
    </div>
  );
}

export default App;
