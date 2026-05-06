import React from 'react';
import './Intro.css';
import Typewriter from 'typewriter-effect';

function Intro() {
    const strings = [
        'Software Developer', 
        'Full Stack Developer',
        'Deans List Student',
        'Web Designer',
        'Web Developer',
        'Tech Enthusiast',
        'Cloud Developer',
        'Graphic Designer',
        'N Open Source Enthusiast'
      ];
    
      // Dynamically add regular spaces before each string
      const stringsWithSpaces = strings.map((str, index) => 
        index === strings.length - 1 ? str : `${String.fromCharCode(160)}${str}`
      );
    
  return (
    <div>
      <section id='intro'>
        <section id='introItem1' className='intro-item'>
            Hello I'm Yash,
        </section>
        <section className='intro-item' id='changing-text'>
          <span id='a'>A</span>
          <section className='change'>
            <Typewriter
                options=
                {   
                    {
                    strings: stringsWithSpaces,
                    autoStart: true,
                    loop: true,
                    pauseFor:1000,
                    deleteSpeed: 25,
                    html: true,
                    }
                }
            />
            </section>
            <span className='intro-hide'>A CS Major & Software Developer</span>
            
        </section>
        <section id='intro-para' className='intro-item'>
            <p>I’m a Computer Science student (Junior), problem-solver at heart who loves turning ideas into real, working software. From digital signage to expense tracking apps, I create things that solve everyday problems using tools like React, Django, and Java. Always learning, always building, and currently hunting for an internship to level up and make an impact.</p>
        </section>
      </section>
    </div>
  )
}

export default Intro
