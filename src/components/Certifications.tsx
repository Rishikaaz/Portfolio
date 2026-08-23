"use client";
import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    { name: "Certified Cybersecurity Educator Professional (CCEP)", issuer: "CCEP" },
    { name: "Blockchain and its Applications", issuer: "NPTEL, IIT Kharagpur" },
    { name: "Networking Basics & Cyber Threat Management", issuer: "CISCO" },
    { name: "The Bits and Bytes of Computer Networking", issuer: "Coursera" },
    { name: "AWS Cloud Practitioner & AWS Skill Builder", issuer: "Amazon Web Services" },
    { name: "Cybersecurity Job Simulation", issuer: "Mastercard & Deloitte" }
  ];

  return (
    <section id="certifications" className="section">
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h2>

      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            className="cert-card-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="cert-card">
              <div className="cert-icon">
                <Award size={24} />
              </div>
              <div className="cert-info">
                <h3>{cert.name}</h3>
                <span className="issuer">{cert.issuer}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-top: 40px;
        }
        @media (max-width: 768px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
        .cert-card-wrapper {
          height: 100%;
        }
        .cert-card {
          background-color: var(--accent-box);
          padding: 28px 30px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: var(--card-shadow);
          display: flex;
          align-items: center;
          gap: 20px;
          height: 100%;
          transition: var(--transition);
        }
        .cert-card-wrapper:hover .cert-card {
          background-color: var(--lightest-navy);
          border-color: var(--accent);
        }
        .cert-icon {
          color: var(--accent);
          flex-shrink: 0;
        }
        .cert-info h3 {
          color: var(--lightest-slate);
          font-size: var(--fz-lg);
          font-weight: 500;
          margin-bottom: 4px;
        }
        .issuer {
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          color: var(--accent);
          opacity: 0.85;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
