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
            <p>
            I'm a Computer Science student with a passion for coding and solving problems through technology. I enjoy working on projects that challenge me to think creatively, whether it's building web apps with React or developing solutions in Java. I'm always eager to collaborate, because teamwork makes the dream work. And hey, if there's a bug, it's just a feature waiting to be fixed!</p>
        </section>
      </section>
    </div>
  )
}

export default Intro
