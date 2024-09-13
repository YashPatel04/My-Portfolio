import React, { useEffect } from 'react'
import "./Skillcard.css"
import frontend from './img/frontend.png'
import backend from './img/backend.png'
import dev from './img/dev_tools.png'
import soft from './img/soft_skills.png'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skillcard = ({title, icon, isActive, onClick }) =>{
    let img;

  // Use switch statement to select the appropriate image based on the title
  switch (title) {
    case 'Frontend':
      img = frontend;
      break;
    case 'Backend':
      img = backend;
      break;
    case 'Dev Tools':
      img = dev;
      break;
    case 'Soft Skills':
      img = soft;
      break;
    default:
      img = soft; // Default image if title doesn't match any case
      break;
  }
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
                <img src={img} alt={title}/>
            </div>
            <span>{title}</span>
        </div>
    );
};

export default Skillcard
