import React from 'react';
import './bar.css';

function Menu() {
  return (
    <div id='bar'>   
      <a className='bar-item' href=''>About</a>
      <a className='bar-item' href=''>Skills</a>
      <a className='bar-item' href=''>Projects</a>
      <a className='bar-item' href=''>Contact</a>
    </div>
  )
}

export default Menu
