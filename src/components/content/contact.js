import React from 'react'
import './Contact.css'
import Form from '../Form'

function Contact() {
  return (
    <div className='Yash-contact'>
      <p id='contact-head' >Contact Me</p>
      <div className='contact-items'>
        <div className='contact-text'>
            <p id='contact-para'>Have a question, a project, or just want to say hi? Drop me a message! I promise I won't bite (unless you're a piece of code that refuses to work).</p>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Contact;
