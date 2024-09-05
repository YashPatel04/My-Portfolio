import React,{useEffect, useRef} from 'react'
import Projectcard from '../Projectcard'
import './Project.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Project() {
    

  return (
    <div className='Yash-Projects'>
      <div className='cards-stack'>
        <Projectcard
            className='Ind-card'
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        />
        <Projectcard
        className='Ind-card'
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        />
        <Projectcard
        className='Ind-card'
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        />
        <Projectcard
        className='Ind-card'
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        />
        <Projectcard
        className='Ind-card'
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        />
      </div>
    </div>
  )
}

export default Project
