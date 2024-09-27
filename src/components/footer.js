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
        <Link className='foot-item' target='_blank' to='https://www.linkedin.com/in/yashpatel2004/' >LinkedIn</Link>
        <Link className='foot-item' target='_blank' to='https://github.com/YashPatel04' >GitHub</Link>
        <Link className='foot-item' target='_blank' to='mailto:ypatel2@stetson.edu' >Email</Link>
        <Link className='foot-item' target='_blank' to='https://drive.google.com/file/d/1a6a4f9QYxqyPpY4Aet3BfI5eK0nzK9WL'>Resume</Link>
      </section>
    </div>
  )
}

export default Footer
