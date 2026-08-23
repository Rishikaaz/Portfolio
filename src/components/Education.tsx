"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      title: "B.Tech in Computer Science (Specialization in Cyber Security)",
      company: "Vellore Institute of Technology",
      date: "2023 – 2027",
      desc: ["CGPA: 8.84/10", "Bhopal, Madhya Pradesh"]
    }
  ];

  return (
    <section id="education" className="section">
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className="education-grid">
        {education.map((item, i) => (
          <motion.div
            key={i}
            className="education-card-wrapper"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="education-card">
              <div className="card-header">
                <span className="date">{item.date}</span>
                <h3>{item.title}</h3>
                <span className="company">{item.company}</span>
              </div>
              <ul className="card-desc">
                {item.desc.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
                .education-grid {
                    display: max-content;
                    width: 100%;
                    max-width: 800px;
                    margin-top: 50px;
                }
                .education-card-wrapper {
                    height: 100%;
                }
                .education-card {
                    background-color: var(--accent-box);
                    padding: 40px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: var(--card-shadow);
                    height: 100%;
                    cursor: default;
                    transition: var(--transition);
                }
                .education-card-wrapper:hover .education-card {
                    background-color: var(--lightest-navy);
                    border-color: var(--accent);
                }
                .card-header .date {
                    display: block;
                    font-family: var(--font-mono);
                    font-size: var(--fz-xs);
                    color: var(--accent);
                    margin-bottom: 10px;
                }
                .card-header h3 {
                    color: var(--lightest-slate);
                    font-size: var(--fz-xl);
                    margin-bottom: 5px;
                }
                .company {
                    color: var(--light-slate);
                    font-size: var(--fz-md);
                    font-weight: 500;
                    opacity: 0.8;
                }
                .card-desc {
                    list-style: none;
                    margin-top: 25px;
                    padding: 0;
                }
                .card-desc li {
                    position: relative;
                    padding-left: 20px;
                    color: var(--slate);
                    font-size: var(--fz-md);
                    margin-bottom: 10px;
                }
                .card-desc li:before {
                    content: "▹";
                    position: absolute;
                    left: 0;
                    color: var(--accent);
                }
            `}</style>
    </section>
  );
};

export default Education;
