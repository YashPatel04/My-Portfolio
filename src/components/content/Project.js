import React,{useEffect, useRef} from 'react'
import Projectcard from '../Projectcard'
import './Project.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Project() {
    
  const cont = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".project-card");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: cont.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + cont.current.offsetWidth  
      }
    });
  }, []);

  return (
    <div ref={cont} className='Yash-Projects'>
    
        <Projectcard
            className='Ind-card'
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        />
        <Projectcard
        className='Ind-card'
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        />
        <Projectcard
        className='Ind-card'
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        />
        <Projectcard
        className='Ind-card'
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        />
        <Projectcard
        className='Ind-card'
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        />
      
    </div>
  )
}

export default Project
