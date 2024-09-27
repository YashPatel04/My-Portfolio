import React from 'react'
import imf from './img/p1.jpg'
import './Projectcard.css'
const Projectcard = ({title, imag, link, text})=>{
    const handleClick = () => {
        window.open(link, '_blank');
    };
    return(
        <div className='project-card'>
            <img className='project-image' src={imf} alt={title} />
            <div className='project-info'>
                <h2 className='individual-title'>{title}</h2>
                <p className='project-text'>{text}</p>
                <button onClick={handleClick} id='gh-submit'>GitHub</button>
            </div>
        </div>
    );
};
export default Projectcard
