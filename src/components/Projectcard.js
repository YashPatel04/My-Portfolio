import React from 'react'
import './Projectcard.css'

const Projectcard = ({ title, imag, link, text, website, tech = [] }) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };
    const handleWebsiteClick = () => {
        if (website) window.open(website, '_blank');
    };
    return (
        <div className='project-card'>
            <img className='project-image' src={imag} alt={title} />
            <div className='project-info'>
                <h2 className='individual-title'>{title}</h2>
                {tech.length > 0 && (
                  <div className="project-tech-list">
                    {tech.map((t) => (
                      <span className="project-tech-pill" key={t}>{t}</span>
                    ))}
                  </div>
                )}
                <p className='project-text'>{text}</p>
                {link && (
                    <button onClick={handleClick} id='gh-submit'>GitHub</button>
                )}
                {website && (
                    <button onClick={handleWebsiteClick} id='web-submit' style={{ marginLeft: '0.5rem' }}>
                        Website
                    </button>
                )}
            </div>
        </div>
    );
};

export default Projectcard
