"use client";
import React from 'react';
import { Folder, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [

    {
      title: "Campus Course Records Manager (CCRM)",
      desc: "A scalable Java-based system for managing student records and grading with robust file-based persistence.",
      tech: ["Java", "OOP", "File I/O", "Data Structures"],
      github: "https://github.com/Rishikaaz/Campus-Course-Records-Manager-CCRM-"
    },
    {
      title: "WiFi Network Scanner & Monitor",
      desc: "A cross-platform security utility for real-time network discovery and vulnerability assessment.",
      tech: ["Python", "Flask", "Networking", "Monitoring"],
      github: "https://github.com/Rishikaaz/Wifi-Network-Scanner"
    },
    {
      title: "Carbon Emission Predictive Analytics",
      desc: "A machine learning solution for analyzing climate datasets to forecast greenhouse gas emissions.",
      tech: ["Python", "ML", "Scikit-learn", "Data Analysis"],
      github: "https://github.com/Rishikaaz/Carbon-Emission-Prediction"
    },
    {
      title: "Dynamic Dummy Data Generator",
      desc: "A MERN-based utility for automating the generation of large-scale test datasets for development.",
      tech: ["Node.js", "Express.js", "MongoDB", "NoSQL"],
      github: "https://github.com/Rishikaaz/Dummy-Data-Generator"
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
