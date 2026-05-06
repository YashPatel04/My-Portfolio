import React, { useRef, useEffect, useState } from 'react';
import './Research.css';
import paperOnePDF from '../img/ssa_paper.pdf';
import paperTwoPDF from '../img/facets_paper.pdf';

function Research() {
  const [visible, setVisible] = useState(false);
  const researchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!researchRef.current) return;
      const rect = researchRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const publications = [
    {
      id: 1,
      title: "Prompt Optimization for LLMs via Squirrel Search ALgorithm",
      authors: "Yash Patel, Nour Amri, Dr. Hala ElAarag",
      journal: "ACM SouthEast Conference 2026, Troy, AL",
      year: 2026,
      doi: "10.1145/3746467.3801519",
      githubUrl: "https://github.com/YashPatel04/SSA-Optimizer",
      description: " Developed a novel gradient-free SSA implementation for automated prompt optimization, achieving 57% improvements in sentiment classification across multiple LLMs (3 8B–20B parameters) with convergence within 10–30 iterations.",
      pdfFile: paperOnePDF
    },
    {
      id: 2,
      title: "FACETS: A Multi-Dimensional Framework for Assessing LLMs on Software Engineering Tasks",
      authors: "Yash Patel, Dr. Basar Koc",
      year: 2026,
      journal: "",
      doi: "",
      githubUrl: "https://github.com/YashPatel04/LLM-Benchmarking-Suite",
      description: "Designed FACETS, a modular benchmarking framework evaluating 13 LLMs across 6 software engineering tasks and 9 quality dimensions, revealing a 24.77-point performance spread(64.56%–89.33%) and a persistent gap between syntactic fluency and semantic understanding in code generation.",
      pdfFile: paperTwoPDF
    }
  ];

  return (
    <div className='research-container' ref={researchRef}>
      <span className='research-heading'>
        <h1>Research & Publications</h1>
      </span>
      
      <div className={`publications-grid ${visible ? 'visible' : ''}`}>
        {publications.map((paper, index) => (
          <div key={paper.id} className={`publication-card fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
            <div className="paper-header">
              <h3 className="paper-title">{paper.title}</h3>
              <span className="paper-year">{paper.year}</span>
            </div>
            
            <div className="paper-meta">
              <p className="paper-authors"><strong>Authors:</strong> {paper.authors}</p>
              {paper.journal && (
                <p className="paper-journal"><strong>Published in:</strong> {paper.journal}</p>
              )}
            </div>

            <p className="paper-description">{paper.description}</p>

            <div className="paper-actions">
              {paper.doi && (
                <a 
                  href={`https://doi.org/${paper.doi}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="doi-link"
                >
                  DOI: {paper.doi}
                </a>
              )}
              {paper.githubUrl && (
                <a 
                  href={paper.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub
                </a>
              )}
              <a 
                href={paper.pdfFile} 
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-view"
              >
                📄 View PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Research;
