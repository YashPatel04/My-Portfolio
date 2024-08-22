import React from 'react';
import { Link } from 'react-router-dom';    
import './footer.css';
import { IconMouse } from '@tabler/icons-react';
function Footer() {
  return (
    <div id='footer'>
      <section id='foot-one'>
        <IconMouse color="rgba(209, 213, 219, 0.513)" size={45} />
        <p>scroll to know about me</p>
      </section>
      <section id='foot-links'>
        <Link className='foot-item' to='' >LinkedIn</Link>
        <Link className='foot-item' to='' >GitHub</Link>
        <Link className='foot-item' to='' >Email</Link>
        <Link className='foot-item' to='' >Resume</Link>
      </section>
    </div>
  )
}

export default Footer
