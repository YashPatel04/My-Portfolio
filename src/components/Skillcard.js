import React from 'react'
import "./Skillcard.css"
import phto from './img/frontend.png'
const Skillcard = ({title, icon, isActive, onClick }) =>{
    return(
        <div className={`skills-card ${isActive ? "active":""}`} onClick={()=>onClick()}>
            <div className='skill-icon'>
                <img src={phto} alt={title}/>
            </div>
            <span>{title}</span>
        </div>
    );
};

export default Skillcard
