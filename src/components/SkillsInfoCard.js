import React, { useEffect } from 'react';
import './SkillsInfoCard.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const SkillsInfoCard = ({heading, skills}) => {
    console.log({heading});

    useEffect(() => {
        gsap.to(".skills-info-card", {
            opacity: 1,
            duration: 0.5,
            stagger: 0.2, // Adjust the stagger value for timing
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".skills-info-card",
              start: "center top",
              end: "bottom top",
              scrub: false,

            }
          });
      }, []);

    return <div className='skills-info-card'>
        <h6 id='skill-var-heading'>{heading}</h6>
        
        <div className='skills-info-content'>
            {skills.map((item, index)=>(
                <React.Fragment key={`skill_${index}`}>
                    <div className='skill-info'>
                        <p>{item.skill}</p>
                        <p className='percentage'>{item.percentage}</p>
                    </div>
                    <div className='skill-progress-bg'>
                        <div className='skill-progress' style={{width: item.percentage}} />
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>;
};

export default SkillsInfoCard
