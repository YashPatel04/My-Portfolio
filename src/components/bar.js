import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './bar.css';

function Menu() {
  return (
    <div id='bar'>   
      <ScrollLink className='bar-item' to='ypps-1' smooth={true} duration={500}>
        About
      </ScrollLink>
      <ScrollLink className='bar-item' to='ypps-3' smooth={true} duration={500}>
        Skills
      </ScrollLink>
      <ScrollLink className='bar-item' to='ypps-4' smooth={true} duration={500}>
        Projects
      </ScrollLink>
      <ScrollLink className='bar-item' to='ypps-5' smooth={true} duration={500}>
        Contact
      </ScrollLink>
    </div>
  )
}

export default Menu
