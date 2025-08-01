import React, { useState, useRef, useEffect } from 'react';
import './Skills.css';
import { SKILLS } from '../utils/data.js';
import Skillcard from '../Skillcard.js';
import SkillsInfoCard from '../SkillsInfoCard.js';

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const [visible, setVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!skillsRef.current) return;
      const rect = skillsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <div className='Skills-container' ref={skillsRef}>
      <span className='skills-heading'>
        <h1>Skills</h1>
        <h5>My Skills</h5>
      </span>
      <div className='Skills-content'>
        <div className={`skills slide-in-left${visible ? ' visible' : ''}`}>
          {SKILLS.map((item) => (
            <Skillcard
              key={item.title}
              icon={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectedSkill(item);
              }}
            />
          ))}
        </div>
        <div className={`skills-info slide-in-right${visible ? ' visible' : ''}`}>
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
