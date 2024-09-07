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
              title="Library Management System"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue."
            />
            <Projectcard
              className="Ind-card"
              title="E-commerce Platform"
              text="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae."
            />
          </ul>
          <ul id='pi-2' className='project-item'>
            <Projectcard
              className="Ind-card"
              title="Social Media App"
              text="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt."
            />
            <Projectcard
              className="Ind-card"
              title="Portfolio Website"
              text="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta."
            />
            <Projectcard
              className="Ind-card"
              title="Mobile Game Development"
              text="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat."
            />
          </ul>
        </div>
      </div>
  );
}

export default Project;
