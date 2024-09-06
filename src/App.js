import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useRef } from "react";
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
  const introRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = (isVisible) => {
      if (isVisible) {
        gsap.to(introRef.current, { display: 'blockY', duration: 0.5 });
      } else {
        gsap.to(introRef.current, { display: 'none', duration: 0.5 });
      }
    };

    gsap.to(".Yash-Intro", {
      scrollTrigger: {
        trigger: ".Yash-Intro",
        start: "top 1%",
        end: "bottom bottom",
        scrub: 1, 
        pin: true,  
        pinSpacing: false,
        onEnter: () => toggleVisibility(true),
        onLeave: () => toggleVisibility(false)
      },
      y: -60,
      opacity: 0,
    });
  }, []);

  return (
    <div className="App">
      <div className="video-container">
        <video autoPlay muted loop id="bg-video" src={video} type="video/mp4" />
      </div>
      <>
        <Router>
          <Navbar />
          <div ref={introRef} className='Yash-Intro'><Intro /></div>
          <div className='Yash-Time'>
            <Timeline />
          </div>
          <Skills className='Yash-skills' />
          <Project />
          <Routes></Routes>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
