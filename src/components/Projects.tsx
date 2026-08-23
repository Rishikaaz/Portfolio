"use client";
import React from 'react';
import { Folder, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Containerized HIDS & SIEM Pipeline",
      desc: [
        "Spearheaded a containerized SIEM architecture using Docker Compose, optimizing host CPU/RAM overhead by reducing resource consumption by 40% through strategic VM migration.",
        "Developed a high-throughput Python HIDS sensor using Scapy to capture live traffic and stream real-time JSON alerts over TCP."
      ],
      tech: ["Python", "Docker", "ELK Stack", "Scapy", "Linux", "Nmap"],
      github: "https://github.com/Rishikaaz"
    },
    {
      title: "Vulnerability Management Platform",
      desc: [
        "Engineered a modular vulnerability management platform in Python automating network reconnaissance, asynchronous port scanning, CVE signature matching, and HTTP header auditing.",
        "Integrated SQLite database schemas to track, correlate, and index system vulnerabilities over time, cutting manual reporting effort by 50%.",
        "Enhanced an automated security reporting engine that aggregates structured database findings into executive-level vulnerability assessment reports."
      ],
      tech: ["Python", "SQLite", "Network Security", "Socket Programming"],
      github: "https://github.com/Rishikaaz/Vulnerability-Management-Platform"
    },
    {
      title: "AI-Powered Behavioral Anomaly Detection",
      desc: [
        "Built an end-to-end threat detection pipeline that captures raw network packets using Scapy, converts them into behavioral features, and passes them to unsupervised models.",
        "Trained the system on baseline network traffic to identify subtle zero-day anomalies and multi-stage attack patterns that traditional signature-based rules miss.",
        "Streamed real-time JSON alert logs directly into SIEM workflows, cutting down false positives and enabling immediate incident response by 60%."
      ],
      tech: ["Python", "Scikit-learn", "Scapy", "Networking"],
      github: "https://github.com/Rishikaaz"
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description">
                  {Array.isArray(project.desc) ? (
                    <ul className="project-bullets">
                      {project.desc.map((bullet, k) => (
                        <li key={k}>{bullet}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{project.desc}</p>
                  )}
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
          font-size: var(--fz-md);
        }
        .project-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .project-bullets li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          line-height: 1.5;
        }
        .project-bullets li:before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent);
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
