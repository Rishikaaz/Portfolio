"use client";
import React from 'react';
import { Folder, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Containerized HIDS & SIEM Pipeline",
      date: "May 2026",
      desc: "Spearheaded a containerized SIEM architecture using Docker Compose, optimizing host CPU/RAM overhead by reducing resource consumption by 40% through strategic VM migration. Developed a high-throughput Python HIDS sensor via Scapy to capture live traffic and stream real-time JSON alert logs over TCP.",
      tech: ["Python", "Docker", "ELK stack", "Scapy", "Linux Shell Scripting"],
      github: "https://github.com/Rishikaaz"
    },
    {
      title: "Vulnerability Management Platform",
      date: "Jul 2026",
      desc: "Engineered a modular vulnerability management platform in Python automating network reconnaissance, asynchronous port scanning, CVE signature matching, and HTTP header auditing. Integrated SQLite database schemas to track, correlate, and index system vulnerabilities over time, cutting manual reporting effort by 50%.",
      tech: ["Python", "SQLite", "Network Security", "Socket Programming"],
      github: "https://github.com/Rishikaaz/Vulnerability-Management-Platform"
    },
    {
      title: "AI-Powered Behavioral Anomaly Detection",
      date: "Jul 2026",
      desc: "Designed an end-to-end threat detection pipeline capturing raw network packets using Scapy, converting them into behavioral features for unsupervised ML models (Isolation Forest, Autoencoders). Trained on baseline traffic to spot zero-day anomalies and streamed JSON alert logs into SIEM workflows, cutting false positives by 60%.",
      tech: ["Python", "Scikit-learn", "Pandas", "Scapy", "Networking"],
      github: "https://github.com/Rishikaaz"
    },
    {
      title: "Carbon-Emission-Prediction & Data Pipeline",
      date: "Jun – Jul 2025",
      desc: "Built a predictive data pipeline using Python and Scikit-learn to forecast environmental metrics from industrial datasets. Implemented feature engineering, data normalization pipelines, and visualization modules to convert software logs into actionable analytical insights.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Pipelines"],
      github: "https://github.com/Rishikaaz/Carbon-Emission-Prediction"
    }
  ];

  return (
    <section id="projects" className="section">
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <Folder size={40} />
                  </div>
                  <div className="project-links">
                    {project.date && <span className="project-date">{project.date}</span>}
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description">
                  <p>{project.desc}</p>
                </div>
              </header>
              <footer>
                <ul className="project-tech-list">
                  {project.tech.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-top: 50px;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
        .project-card {
          cursor: default;
          transition: var(--transition);
        }
        .project-card:hover {
          transform: translateY(-7px);
        }
        .project-inner {
          box-shadow: var(--card-shadow);
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          height: 100%;
          padding: 40px;
          border-radius: 12px;
          background-color: var(--accent-box);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition);
        }
        .project-card:hover .project-inner {
          background-color: var(--lightest-navy);
          border-color: var(--accent);
        }
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }
        .folder {
          color: var(--accent);
        }
        .project-links {
          display: flex;
          align-items: center;
          color: var(--light-slate);
        }
        .project-date {
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          color: var(--accent);
          opacity: 0.85;
          margin-right: 12px;
        }
        .project-links a {
          padding: 10px;
        }
        .project-links a:hover {
          color: var(--accent);
        }
        .project-title {
          margin: 0 0 10px;
          color: var(--lightest-slate);
          font-size: var(--fz-xl);
        }
        .project-description {
          color: var(--light-slate);
          font-size: var(--fz-lg);
        }
        .project-tech-list {
          display: flex;
          align-items: flex-end;
          flex-grow: 1;
          flex-wrap: wrap;
          padding: 0;
          margin: 20px 0 0 0;
          list-style: none;
        }
        .project-tech-list li {
          font-family: var(--font-mono);
          font-size: var(--fz-xxs);
          line-height: 1.75;
          color: var(--light-slate);
        }
        .project-tech-list li:not(:last-of-type) {
          margin-right: 15px;
        }
      `}</style>
    </section>
  );
};

export default Projects;
