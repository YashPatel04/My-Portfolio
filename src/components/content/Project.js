// src/components/content/Project.js
import React from 'react';
import Projectcard from '../Projectcard';
import './Project.css'; 
// Import all images
import libraryImg from '../img/library_management_system.png';  // Add your library system image
import faceDetectionImg from '../img/face_detection_system.png';  // Add your face detection image
import businessImg from '../img/business-portfolio.jpg';  // Add your business website image
import portfolioImg from '../img/portfolio_website.png';  // Add your portfolio image
import pacmanImg from '../img/pacman_game.png';  // Add your pacman image

function Project() {
  return (
    <div className="Yash-Projects">
      <div className='projects-cont'>
        <ul id='pi-1' className='project-item'>
            <Projectcard
              className="Ind-card"
              link='https://github.com/YashPatel04/Library-Management-System'
              title="Library Management System"
              imag={libraryImg}  // Pass the imported image
              text="Designed and implemented a comprehensive Library Management System using Python, Tkinter, and MySQL, enabling  management of library resources and user transactions."
            />
            <Projectcard
              className="Ind-card"
              link='https://github.com/YashPatel04/Face-Detection-System'
              title="Face Detection System"
              imag={faceDetectionImg}  // Pass the imported image
              text="Developed a robust face detection system in Java using the OpenCV library, implementing advanced image processing algorithms to accurately identify and track faces in real-time, ensuring efficient and reliable recognition under various conditions."
            />
          </ul>
          <ul id='pi-2' className='project-item'>
            <Projectcard
              className="Ind-card"
              title="Business Portfolio Website"
              link='https://github.com/YashPatel04/business-portfolio-website'
              imag={businessImg}  // Pass the imported image
              text="Created a sample business portfolio website using modern web technologies to showcase business services, projects, and contact information in a professional and visually appealing manner."
            />
            <Projectcard
              className="Ind-card"
              title="Personal Portfolio Website"
              link='https://github.com/YashPatel04/My-Portfolio'
              imag={portfolioImg}  // Pass the imported image
              text="Developed an interactive portfolio website using React and GSAP, featuring smooth animations and dynamic content. Added email functionality with the Gmail API and ensured a responsive design for all devices."
            />
            <Projectcard
              className="Ind-card"
              title="Pacman Clone"
              link='https://github.com/YashPatel04/Pacman'
              imag={pacmanImg}  // Pass the imported image
              text="The main motivation behind this project was to explore game development using C++, one of the most widely used programming languages for game development, and SFML, a library that simplifies multimedia tasks such as graphics rendering, audio management, and window handling."
            />
          </ul>
        </div>
      </div>
  );
}

export default Project;
