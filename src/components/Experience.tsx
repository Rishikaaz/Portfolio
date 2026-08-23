"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {

  const experience = [
    {
      title: "Security Researcher",
      company: "Open Bug Bounty (Freelance)",
      date: "Aug 2026 – Present | Remote",
      desc: [
        "Identified and responsibly disclosed web application security vulnerabilities including Cross-Site Scripting (XSS).",
        "Awarded the Fastest Fix Badge on Open Bug Bounty after vendor remediation within 24 hours."
      ]
    },
    {
      title: "Cyber Security Intern",
      company: "Tamizhan Skills",
      date: "Jun 2025 – Jul 2025 | Remote",
      desc: [
        "Programmed 6+ proof-of-concept Python security tools, including a custom multi-port socket scanner, file-encryption utilities and keyloggers."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="timeline">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item-wrapper"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="timeline-item">
              <div className="timeline-header">
                <h3>
                  {item.title} <span className="company">@ {item.company}</span>
                </h3>
                <span className="date">{item.date}</span>
              </div>
              <ul className="timeline-desc">
                {item.desc.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-top: 50px;
        }
        .timeline-item-wrapper {
          width: 100%;
        }
        .timeline-item {
          background-color: var(--accent-box);
          padding: 40px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: var(--card-shadow);
          position: relative;
          transition: var(--transition);
        }
        .timeline-item-wrapper:hover .timeline-item {
          background-color: var(--lightest-navy);
          border-color: var(--accent);
        }
        .timeline-header h3 {
          color: var(--lightest-slate);
          font-size: var(--fz-xl);
          font-weight: 500;
          margin-bottom: 5px;
        }
        .company {
          color: var(--accent);
        }
        .date {
          display: block;
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          color: var(--light-slate);
          margin-bottom: 20px;
          opacity: 0.8;
        }
        .timeline-desc {
          list-style: none;
          padding: 0;
        }
        .timeline-desc li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 12px;
          font-size: var(--fz-md);
          color: var(--slate);
          line-height: 1.5;
        }
        .timeline-desc li:before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};

export default Experience;
