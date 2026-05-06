// src/components/content/Project.js
import React from 'react';
import Projectcard from '../Projectcard';
import './Project.css'; 
// Import all images
import signstream from '../img/signstream.jpg';
import Cliquepay from '../img/cliquepay.jpg';
import libraryImg from '../img/library_management_system.png';  // Add your library system image
import faceDetectionImg from '../img/face_detection_system.png';  // Add your face detection image
import pacmanImg from '../img/pacman_game.png';  // Add your pacman image

function Project() {
  return (
    <div className="Yash-Projects">
      <div className='projects-cont'>
        <ul id='pi-1' className='project-item'>
            <Projectcard
              className="Ind-card"
              link='https://github.com/YashPatel04/Library-Management-System'
              title="CliquePay – Modern Bill Splitting"
              imag={Cliquepay}  // Pass the imported image
              text="CliquePay is a full-stack web application designed to simplify group expense sharing with features like smart bill splitting, real-time chat, instant settlements, and analytics. Built with React, Django, Django Channels, and PostgreSQL, it uses WebSockets for live messaging and AWS Cognito for secure authentication."
              website="http://44.211.81.223/"
              tech={["React", "Django", "DRF", "Redis", "MySQL", "WebSockets", "AWS Cognito", "Vercel", "Tailwind CSS"]}
            />
            <Projectcard
              className="Ind-card"
              title="SignStream - Smart Digital Signage"
              imag={signstream}  // Pass the imported image
              text="SignStream is a real-time digital signage web application built to modernize in-store advertising. Users can upload and manage promotional content, display live deals, and schedule slides remotely. Developed with React, Node.js, MySQL, and WebSockets, optimized for deployment on low-power devices like Raspberry Pi."
              website="https://www.signstreamus.com/"
              tech={["React", "Node.js", "MySQL", "WebSockets", "Raspberry Pi", "AWS", "Socket.io", "AWS S3", "TailwindCSS"]}
            />
          </ul>
          <ul id='pi-2' className='project-item'>
             <Projectcard
              className="Ind-card"
              link='https://github.com/YashPatel04/Library-Management-System'
              title="Library Management System"
              imag={libraryImg}  // Pass the imported image
              tech={["Python", "Tkinter", "MySQL"]}
              text="Designed and implemented a comprehensive Library Management System using Python, Tkinter, and MySQL, enabling  management of library resources and user transactions."
            />
            <Projectcard
              className="Ind-card"
              link='https://github.com/YashPatel04/Face-Detection-System'
              title="Face Detection System"
              imag={faceDetectionImg}  // Pass the imported image
              tech={["Java", "OpenCV"]}
              text="Developed a robust face detection system in Java using the OpenCV library, implementing advanced image processing algorithms to accurately identify and track faces in real-time, ensuring efficient and reliable recognition under various conditions."
            />
            <Projectcard
              className="Ind-card"
              title="Pacman Clone"
              link='https://github.com/YashPatel04/Pacman'
              imag={pacmanImg}  // Pass the imported image
              tech={["C++", "SFML", "AI"]}
              text="The main motivation behind this project was to explore game development using C++, one of the most widely used programming languages for game development, and SFML, a library that simplifies multimedia tasks such as graphics rendering, audio management, and window handling."
            />
          </ul>
        </div>
      </div>
  );
}

export default Project;
