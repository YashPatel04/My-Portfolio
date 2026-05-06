import React, { useEffect } from 'react';
import './Resume.css';
import resumePDF from './img/Yash_Patel_CV.pdf';

function Resume() {
  useEffect(() => {
    window.location.replace(resumePDF);
  }, []);

  return (
    <div className="fullscreen-pdf-viewer">
      <p className="resume-loading-message">Opening resume...</p>
    </div>
  );
}

export default Resume;