import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useRef } from "react";
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
        trigger: ".contact-sec",    // Trigger when the contact section comes into view
        start: "top center",        // Start the animation when the top of the contact section hits the center of the viewport
        end: "bottom center",       // End when the bottom of the contact section hits the center of the viewport
        scrub: true,                // Smooth transition as the user scrolls
        toggleActions: "play none none reverse",  // Ensure the animation reverses when scrolling back up
        onEnter: () => gsap.to(".Yash-footer", { opacity: 0, visibility: "hidden", duration: 0.5 }), // Hide footer with visibility
        onLeaveBack: () => gsap.to(".Yash-footer", { opacity: 1, visibility: "visible", duration: 0.5 }) // Show footer
      }
    });
    
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      
      <>
        <Router>
          <Navbar />
          <div ref={introRef}  className='Yash-Intro'><Intro /></div>
          <div id='ypps-1' className='Yash-Time'><Timeline /></div>
          <div id='ypps-3'><Skills className='Yash-skills' /></div>
          <div id='ypps-4' className='app-projects'><Projectheader /><Project /></div>
          <div id='ypps-5' className='contact-sec'><Contact /></div>
          <Routes></Routes>
          <div className='Yash-footer'><Footer /></div>
        </Router>
      </>
    </div>
  );
}

export default App;
