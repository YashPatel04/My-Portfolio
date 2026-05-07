import React, { useEffect } from 'react';
import './Timeline.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Timeline() {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          x: 80
        },
        {
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: index * 0.18
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>TrendAI (Trend Micro Inc.)</h3>
              <span className="timeline-date">June 2026 - August 2026</span>
            </div>
            <h4 className="timeline-role">Research & Development Intern · Austin, TX</h4>
            <ul className="timeline-list">
              <li>Selected to join the Research & Development team at Trend Micro, focusing on cybersecurity innovation and advanced threat detection.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Stetson University (Capstone Proj.)</h3>
              <span className="timeline-date">Aug 2025 – Dec 2025</span>
            </div>
            <h4 className="timeline-role">Software Engineer Intern · DeLand, FL</h4>
            <ul className="timeline-list">
              <li>Collaborated with cross-disciplinary teams to design and deploy a scalable, cloud-native virtualized campus on AWS EC2 with Docker, simulating realistic cyber threats.</li>
              <li>Built fault-tolerant distributed systems by configuring Suricata IDS/IPS and deploying a Cowrie honeypot, enabling advanced intrusion detection and actionable insights.</li>
              <li>Fine-tuned and optimized LLM agents via Research-augmented-generation (RAG) to automatically generate incident summaries and mitigation steps, reducing mean time to resolution (MTTR) and improving documentation quality.</li>
              <li>Developed Python pipelines to preprocess large-scale logs, improving efficiency, scalability, and stability along with reducing false-positives.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>SignStream - Digital Signage Solution</h3>
              <span className="timeline-date">Dec 2024 – Present</span>
            </div>
            <h4 className="timeline-role">
              Founder & Developer · 
              <a href="https://signstreamus.com" target="_blank" rel="noopener noreferrer" className="timeline-link">signstreamus.com</a>
            </h4>
            <ul className="timeline-list">
              <li>Founded and shipped a digital signage SaaS platform for retail clients, built with TypeScript, React, Node.js, and Express, enabling remote content scheduling and real-time dynamic content updates.</li>
              <li>Automated billing with Stripe, cutting 100% of manual invoicing overhead, reflecting a strong ownership mindset.</li>
              <li>Engineered secure media streaming with Socket.io and caching on Pi, achieving 99% uptime during network outages.</li>
              <li>Deployed backend services securely on a Linux-based EC2 instance, using firewall rules, rate limits, SSL encryption, and best security practices, supporting 500+ daily ad impressions across 5 stores.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
