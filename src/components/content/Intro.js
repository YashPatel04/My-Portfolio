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
            <span>A</span>
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
        <section id='intro-para' className='intro-item'>
            <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia ultrices duis molestie bibendum phasellus. Nascetur pulvinar posuere euismod feugiat ridiculus vel sagittis nascetur. Consequat aptent litora nulla erat; placerat elementum ultricies donec. Magnis justo nisl ullamcorper hac fermentum feugiat est.</p>
        </section>
      </section>
    </div>
  )
}

export default Intro
