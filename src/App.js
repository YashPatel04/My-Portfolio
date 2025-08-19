import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useRef } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Intro from './components/content/Intro';
import Timeline from './components/content/Timeline';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Skills from './components/content/Skills';
import Project from './components/content/Project';
import Projectheader from './components/Projectheader';
import Contact from './components/content/contact.js';
import ParticlesBg from './ParticlesBg.js';
import Resume from './components/Resume.js'; 
import { Analytics } from "@vercel/analytics/react"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const introRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = (isVisible) => {
      if (isVisible) {
        gsap.to(introRef.current, { display: 'block', duration: 0.5 });
      } else {
        gsap.to(introRef.current, { display: 'none', duration: 0.5 });
      }
    };

    gsap.to(".Yash-Intro", {
      scrollTrigger: {
        trigger: ".Yash-Intro",
        start: "top 1%",
        end: "bottom bottom",
        scrub:1, 
        pin: true,    
        pinSpacing: false,
        onEnter: () => toggleVisibility(true),
        onLeave: () => toggleVisibility(false)
      },
      y: -60,
      opacity: 0,
    });
    gsap.to(".Yash-footer", {
      scrollTrigger: {
        trigger: ".contact-sec",
        start: "top center",
        end: "bottom center",
        scrub: true,
        toggleActions: "play none none reverse",
        onEnter: () => gsap.to(".Yash-footer", { opacity: 0, visibility: "hidden", duration: 0.5 }),
        onLeaveBack: () => gsap.to(".Yash-footer", { opacity: 1, visibility: "visible", duration: 0.5 })
      }
    });
    
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Homepage component
  const HomePage = () => (
    <>
      <div ref={introRef} className='Yash-Intro'><Intro /></div>
      <div id='ypps-1' className='Yash-Time'><Timeline /></div>
      <div id='ypps-3'><Skills className='Yash-skills' /></div>
      <div id='ypps-4' className='app-projects'><Projectheader /><Project /></div>
      <div id='ypps-5' className='contact-sec'><Contact /></div>
      <div className='Yash-footer'><Footer /></div>
    </>
  );

  return (
    <div className="App">
      <SpeedInsights/>
      <Analytics/>
      <div className="bg-blur"></div>
      <ParticlesBg/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
} 

export default App;
