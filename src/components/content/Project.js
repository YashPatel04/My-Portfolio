import React from 'react'
import Projectcard from '../Projectcard'
import './Project.css'
function Project() {
  return (
    <div>

      <div className='cards-stack'>
        <Projectcard
            title="Library Management System"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse tincidunt metus cras facilisi convallis in congue. Aliquam habitasse feugiat tristique bibendum eros eu porta ante. Aenean mauris fusce lacinia senectus vestibulum vel hac lacinia"
        
        />
      </div>
    </div>
  )
}

export default Project
