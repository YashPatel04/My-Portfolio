import React from 'react'
import './Contact.css'
import Form from '../Form'
import { IconBrandLinkedin,IconBrandGithub,IconBrandInstagram,IconMail,IconFileText } from '@tabler/icons-react';

function Contact() {
  return (
    <div className='Yash-contact'>
      <p id='contact-head' >Contact Me</p>
      <div className='contact-items'>
        <div className='contact-icons'>
          <a href='https://www.linkedin.com/in/yashpatel2004/' target='_blank'><IconBrandLinkedin className='icon-element' color="white"  size={35}/></a>
          <a href='https://github.com/YashPatel04' target='_blank'><IconBrandGithub className='icon-element' color="white" size={35}/></a>
          <a href='https://www.instagram.com/yash._.252/' target='_blank'><IconBrandInstagram className='icon-element' color="white" size={35}/></a>
          <a href='mailto:ypatel2@stetson.edu' target='_blank'><IconMail className='icon-element' color="white" size={35}/></a>
          <a href='https://drive.google.com/file/d/1a6a4f9QYxqyPpY4Aet3BfI5eK0nzK9WL' target='_blank'><IconFileText className='icon-element' color="white" size={35}/></a>
        </div>
        <div className='contact-text'>
            <p id='contact-para'>Have a question, a project, or just want to say hi? Drop me a message! I promise I won't bite (unless you're a piece of code that refuses to work).</p>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Contact; 