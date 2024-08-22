import React from 'react';
import { Link } from 'react-router-dom';
import './bar.css';

function Menu() {
  return (
    <div id='bar'>   
      <Link className='bar-item' to=''>About</Link>
      <Link className='bar-item' to=''>Skills</Link>
      <Link className='bar-item' to=''>Projects</Link>
      <Link className='bar-item' to=''>Contact</Link>
    </div>
  )
}

export default Menu
