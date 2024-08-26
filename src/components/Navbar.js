import Menu from './bar';
import gsap from "gsap";
import React, { useLayoutEffect, useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);
function Navbar() {
  
  useEffect(() => {
    gsap.to("#name", {
      scrollTrigger: {
        trigger: "#name",
        start: "bottom top",
        end: "bottom bottom",
        scrub: 1,
      },
      opacity: 1, 
    });
  }, []);

  return (
    <div id='nav-bar'>
      <h1 id='name'>Yash Patel</h1>
      <Menu />
    </div>
  )
}

export default Navbar
