import React from 'react';
import './Skills.css';
import {SKILLS} from '../utils/data.js';
import Skillcard from '../Skillcard.js';
//Timestamps: 35:21
function Skills() {
  return (
    <div className='Skills-container'>
      <h5>Technical Proficiency</h5>
      <div className='Skills-content'> 
        <div className='skills'>
          {SKILLS.map((item) =>(
            <Skillcard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
            />
          ))}
        </div>
        <div className='skills-info'></div>
      </div>
    </div>
  )
}

export default Skills;
