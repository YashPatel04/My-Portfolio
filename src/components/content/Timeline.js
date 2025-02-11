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
          y: 50
        },
        {
          scrollTrigger: {
        trigger: item,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: index * 0.2
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
            <p>This year I am learning new technologies, working exciting projects using tech like AWS developer tools, websockets and django. I am also actively searching for internships to gain practical experience in the field of software development and enhance my skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
