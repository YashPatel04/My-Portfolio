import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useLayoutEffect, useEffect, useRef } from "react";
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Intro from './components/content/Intro';
import Timeline from './components/content/Timeline';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    gsap.to(".Yash-Intro", {
      scrollTrigger: {
        trigger: ".Yash-Intro",
        start: "+=.5",
        end: "bottom bottom",
        scrub: 1,
      },
      y: -70,
      opacity: 0, // Provide a value for opacity
    });
  }, []);
  
  

  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
        <div className='Yash-Intro'><Intro/></div>
        <Timeline />
        <Routes>
          
        </Routes>
        <Footer />
      </Router>
      </>
    </div>
  );
}

export default App;
