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
            <p>I'm a Computer Science student fluent in Java, React, and the art of turning caffeine into code. I enjoy working on projects that challenge me to think creatively, whether it's building web apps with React or developing solutions in Java. I'm always eager to collaborate, because teamwork makes the dream work I'm also a firm believer that the best way to debug is with a rubber duck and a sense of humor.</p>
        </section>
      </section>
    </div>
  )
}

export default Intro
