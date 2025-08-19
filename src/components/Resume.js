import React from 'react';
import './Resume.css';
import resumePDF from './img/Yash_Patel_CV.pdf';

function Resume() {
  return (
    <div className="fullscreen-pdf-viewer">
      <iframe
        src={resumePDF}
        title="Yash Patel Resume"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      >
        <p>Your browser does not support PDFs. 
           <a href={resumePDF}>Download the PDF</a> to view it.
        </p>
      </iframe>
    </div>
  );
}

export default Resume;