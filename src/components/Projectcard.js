import React from 'react'
import './Projectcard.css'

const Projectcard = ({title, imag, link, text}) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };
    return(
        <div className='project-card'>
            <img className='project-image' src={imag} alt={title} />
            <div className='project-info'>
                <h2 className='individual-title'>{title}</h2>
                <p className='project-text'>{text}</p>
                <button onClick={handleClick} id='gh-submit'>GitHub</button>
            </div>
        </div>
    );
};

export default Projectcard
