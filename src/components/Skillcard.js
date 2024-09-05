import React, { useEffect } from 'react'
import "./Skillcard.css"
import phto from './img/frontend.png'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skillcard = ({title, icon, isActive, onClick }) =>{
    useEffect(() => {
        
        gsap.to(".skills-card", {
            opacity: 1,
            duration: 0.5,
            stagger: 0.2, // Adjust the stagger value for timing
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".skills-card",
              start: "center top",
              end: "bottom bottom",
              scrub: false,
            }
          });
      }, []);
    return(
        <div className={`skills-card ${isActive ? "active":""}`} onClick={()=>onClick()}>
            <div className='skill-icon'>
                <img src={phto} alt={title}/>
            </div>
            <span>{title}</span>
        </div>
    );
};

export default Skillcard
