"use client";
import React from 'react';
import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const accomplishments = [
    { text: "Solved 400+ LeetCode problems and actively competed in Codeforces contests with a max of 902 contest rating.", icon: <Trophy size={20} /> },
    { text: "Selected for the DSCI Cyber For Her Hackathon, qualified for Round 2 of Scripted By{Her} 2.0, Meesho Hackathon as well as in Honeywell and got an offer letter from APCSIP-2026 for a Cyber Cell internship.", icon: <Award size={20} /> },
    { text: "Identified and responsibly disclosed a Cross-Site Scripting (XSS) vulnerability via OpenBugBounty, earning the Fastest Fix Badge after remediation within 24 hours.", icon: <ShieldCheck size={20} /> },
    { text: "Ranked in the top 2% globally on TryHackMe with the longest 177-day learning streak.", icon: <Trophy size={20} /> },
    { text: "Placed 355th out of 5,947 global competitors in the TryHackMe Industrial-Intrusion CTF.", icon: <Trophy size={20} /> },
    { text: "Secured 7th rank nationally in the Shell n’Zen CTF, solving complex web security and reverse engineering challenges.", icon: <Award size={20} /> }
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
        Achievements
      </motion.h2>

      <div className="achievements-list">
        {accomplishments.map((acc, i) => (
          <motion.div
            key={i}
            className="achievement-card-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="achievement-card">
              <div className="icon-box">{acc.icon}</div>
              <p>{acc.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 40px;
        }
        .achievement-card-wrapper {
          width: 100%;
        }
        .achievement-card {
          background-color: var(--accent-box);
          padding: 24px 30px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: var(--card-shadow);
          display: flex;
          align-items: center;
          gap: 20px;
          transition: var(--transition);
        }
        .achievement-card-wrapper:hover .achievement-card {
          background-color: var(--lightest-navy);
          border-color: var(--accent);
        }
        .icon-box {
          color: var(--accent);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .achievement-card p {
          color: var(--light-slate);
          font-size: var(--fz-lg);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
