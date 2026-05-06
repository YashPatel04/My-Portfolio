import React from 'react'
import "./Form.css"
import {useForm} from "react-hook-form";

function Form() {
  const { register, handleSubmit, formState:{errors, isValid} } = useForm({mode: 'onChange',criteriaMode: 'all'});
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/email', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Error sending your message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending your message.');
    }
  }
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-item'>
            <label>Your Name</label>
            <input className='box' name="Name" {...register("Name",{required:true})}/>
            {errors.Name && <p className='warnings'>Name is required.</p>}
          </div>
          <div className='form-item'>
            <label>Your Email</label>
            <input className='box' name="email" {...register("email",{required:true, pattern:/^\S+@\S+$/i})}/>
            {errors.email && <p className='warnings'>Email is required and must be valid.</p>}
          </div>
          <div className='form-item'>
            <label>Message</label>
            <textarea
            id='message'
            name='message'
            rows='4'
            className='box'
            {...register('message', { required: true })}></textarea>
            {errors.message && <p className='warnings'>Message is required.</p>}
          </div>
          <div className='form-item'>
          <button  id='submit' type="submit" disabled={!isValid}>Submit</button>
          </div>
          </form>
    </div>
  )
}

export default Form
