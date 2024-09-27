// src/components/content/Project.js
import React from 'react';
import Projectcard from '../Projectcard';
import './Project.css'; 
function Project() {
  return (
    <div className="Yash-Projects">
      <div className='projects-cont'>
        <ul id='pi-1' className='project-item'>
            <Projectcard
              className="Ind-card"
              link='https://github.com/YashPatel04/Library-Management-System'
              title="Library Management System"
              text="Designed and implemented a comprehensive Library Management System using Python, Tkinter, and MySQL, enabling  management of library resources and user transactions."
            />
            <Projectcard
              className="Ind-card"
              link='https://github.com/YashPatel04/Face-Detection-System'
              title="Face Detection System"
              text="Developed a robust face detection system in Java using the OpenCV library, implementing advanced image processing algorithms to accurately identify and track faces in real-time, ensuring efficient and reliable recognition under various conditions."
            />
          </ul>
          <ul id='pi-2' className='project-item'>
            <Projectcard
              className="Ind-card"
              title="Business Portfolio Website"
              link='https://github.com/YashPatel04/business-portfolio-website'
              text="Created a sample business portfolio website using modern web technologies to showcase business services, projects, and contact information in a professional and visually appealing manner."
            />
            <Projectcard
              className="Ind-card"
              title="Personal Portfolio Website"
              link='https://github.com/YashPatel04/My-Portfolio'
              text="Developed an interactive portfolio website using React and GSAP, featuring smooth animations and dynamic content. Added email functionality with the Gmail API and ensured a responsive design for all devices."
            />
            <Projectcard
              className="Ind-card"
              title="Java Game Development (Team Project)"
              link='https://github.com/CS-142-Spring/team-cyber-ware'
              text="Collaborated on the development of “J.T.S.M” focusing on core game engine, user interface, gameplay mechanics, mission planning, and integration with external APIs like DallE for image generation."
            />
          </ul>
        </div>
      </div>
  );
}

export default Project;
