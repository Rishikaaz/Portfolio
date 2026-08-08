"use client";
import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {

  const certifications = [
    "Certified Cybersecurity Educator Professional (CCEP)",
    "Blockchain and its Applications (NPTEL, IIT Kharagpur)",
    "Networking Basics & Cyber Threat Management (CISCO)",
    "The Bits and Bytes of Computer Networking (Coursera)",
    "AWS Cloud Practitioner & AWS Skill Builder",
    "Cybersecurity Job Simulation (Mastercard & Deloitte)"
  ];

  const accomplishments = [
    { text: "Solved 300+ LeetCode problems and actively competed in Codeforces contests with a max of 902 contest rating.", icon: <Trophy size={18} /> },
    { text: "Selected for the DSCI Cyber For Her Hackathon, qualified for Round 2 of Scripted By{Her} 2.0, Meesho Hackathon as well as in Honeywell and the APCSIP-2026 for a Cyber Cell internship.", icon: <Award size={18} /> },
    { text: "Ranked in the top 2% globally on TryHackMe with a 177-day learning streak in penetration testing and digital forensics.", icon: <Trophy size={18} /> },
    { text: "Placed 355th out of 5,947 global competitors in the TryHackMe Industrial-Intrusion CTF.", icon: <Trophy size={18} /> },
    { text: "Secured 7th rank nationally in the Shell n’Zen CTF, solving complex web security and reverse engineering challenges.", icon: <Award size={18} /> }
  ];

  return (
    <section id="achievements" className="section">
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Certifications
      </motion.h2>

      <div className="grid">
        <motion.div
          className="category-wrapper"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="category">
            <h3>Certifications</h3>
            <ul className="list">
              {certifications.map((cert, i) => (
                <li key={i}>
                  <span className="icon"><Star size={14} /></span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="category-wrapper"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="category">
            <h3>Accomplishments</h3>
            <ul className="list">
              {accomplishments.map((acc, i) => (
                <li key={i}>
                  <span className="icon">{acc.icon}</span>
                  {acc.text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          margin-top: 50px;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        .category-wrapper {
          height: 100%;
        }
        .category {
          background-color: var(--accent-box);
          padding: 40px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: var(--card-shadow);
          height: 100%;
          transition: var(--transition);
        }
        .category-wrapper:hover .category {
          background-color: var(--lightest-navy);
          border-color: var(--accent);
        }
        .category h3 {
          margin-bottom: 25px;
          color: var(--lightest-slate);
          font-size: var(--fz-xl);
          border-bottom: 1px solid var(--lightest-navy);
          padding-bottom: 15px;
        }
        .list {
          list-style: none;
          padding: 0;
        }
        .list li {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 15px;
          font-size: var(--fz-md);
          color: var(--slate);
        }
        .icon {
          color: var(--accent);
          margin-top: 4px;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
