import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useLayoutEffect, useEffect, useRef } from "react";
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Intro from './components/content/Intro';
import Timeline from './components/content/Timeline';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Skills from './components/content/Skills';
import video from './components/img/bg-vid.mp4';
import Project from './components/content/Project';
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    
    gsap.to(".Yash-Intro", {
      scrollTrigger: {
        trigger: ".Yash-Intro",
        start: "top 1%",
        end: "bottom bottom",
        scrub: 1, 
        pin: true,  
        pinSpacing: false,
      },
      y: -60,
      opacity: 0, // Provide a value for opacity
    });
  }, []);
  
  
  return (
    <div className="App">
      <div class="video-container">
        <video autoplay muted loop id="bg-video" src={video} type="video/mp4" />
      </div>
      <>
      <Router>
        <Navbar />
        <div className='Yash-Intro'><Intro/></div>
        <div className='Yash-Time'>
          <Timeline />
        </div>
        <Skills className='Yash-skills'/>
        <Project />
        <Routes></Routes>
        <Footer />
      </Router>
      </>
    </div>
  );
}

export default App;
