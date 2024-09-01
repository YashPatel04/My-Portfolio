import React, { useEffect, useState } from 'react';
import './Skills.css';
import {SKILLS} from '../utils/data.js';
import Skillcard from '../Skillcard.js';
import SkillsInfoCard from '../SkillsInfoCard.js';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
//Timestamps: 35:21
function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  
  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  }
  useEffect(() => {
    gsap.to(".skills-heading", {
      scrollTrigger: {
        trigger: ".skills-heading",
        start: "bottom top",
        end: "bottom bottom",
        scrub: 1.80,
      },
      opacity: 1, 
    });
  }, []);
  return (
    <div className='Skills-container'>
     <span className='skills-heading'> <h1>Skills</h1><h5>My  Skills</h5> </span>
      <div className='Skills-content'> 
        <div className='skills'>
          {SKILLS.map((item) =>(
            <Skillcard
              key={item.title}
              icon={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={()=>{
                handleSelectedSkill(item);
              }}
            />
          ))}
        </div>
        <div className='skills-info'>
          <SkillsInfoCard 
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </div>
  )
}

export default Skills;
