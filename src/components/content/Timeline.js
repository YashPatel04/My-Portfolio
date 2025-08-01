import React, { useEffect } from 'react';
import './Timeline.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Timeline() {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          x: 80 // Start from right
        },
        {
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: index * 0.18 // Stagger effect
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-line"></div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2022</h3>
            <p>Graduated from high school in India. Embarked on an adventurous trekking expedition. 
               Earned certifications in Python, C, and C++ laying the foundation for my journey in Computer Science.
               .</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2023</h3>
            <p>Completed freshman year at Dalhousie University, Canada. 
               Gained work experience as varsity game staff and retail sales associate, learning how to manage responsibilities.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2024</h3>
            <p>Transferred to Stetson University, became dean's list student twice in a row. Gained knowledge about business logistics. 
               Expanded skills in web development, game development, Data Structures and Algorithms.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2025</h3>
            <p>This year, I’m diving deep into new technologies like AWS developer tools, WebSockets, and Django, applying them to hands-on projects—including a digital signage web app built for Raspberry Pi using a modern full-stack setup. I’m focusing on scalable backend development, real-time communication systems, and cloud-based deployment strategies. Alongside my technical growth, I’m actively seeking software development internships to gain industry experience and further sharpen my programming skills in real-world environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
