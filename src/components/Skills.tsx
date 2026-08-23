"use client";
import React from 'react';
import { Shield, Code, Cloud, Network, Terminal, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={20} />,
      skills: ["C++", "Python", "SQL", "Bash Scripting", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Terminal size={20} />,
      skills: ["Docker", "Git", "GitHub", "BurpSuite", "Wireshark", "Nmap", "Metasploit", "Nessus", "Splunk", "Ghidra", "Scapy", "Kali Linux"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud size={20} />,
      skills: ["AWS (EC2, S3, IAM, VPC)", "ELK Stack", "CI/CD Fundamentals", "Containerization"]
    },
    {
      title: "Core Concepts & Networking",
      icon: <Cpu size={20} />,
      skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOPs)", "Operating System (OS)", "TCP/IP", "Socket Programming", "Network Protocols", "Secure Coding", "System Optimization"]
    },
    {
      title: "Security & Ethical Hacking",
      icon: <Shield size={20} />,
      skills: ["Computer Networking", "Vulnerability Assessment & Penetration Testing (VAPT)", "Reverse Engineering", "Malware Analysis", "Threat Detection", "Web Security", "OWASP Top 10"]
    }
  ];

  return (
    <section id="skills" className="section">
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            className="skill-category-wrapper"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="skill-category">
              <h3>
                <span className="icon">{category.icon}</span>
                {category.title}
              </h3>
              <ul className="skill-list">
                {category.skills.map((skill, j) => (
                  <li key={j}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                    margin-top: 50px;
                }
                @media (max-width: 768px) {
                    .skills-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .skill-category-wrapper {
                    height: 100%;
                }
                .skill-category {
                    background-color: var(--accent-box);
                    padding: 40px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: var(--card-shadow);
                    transition: var(--transition);
                    height: 100%;
                }
                .skill-category-wrapper:hover .skill-category {
                    background-color: var(--lightest-navy);
                    border-color: var(--accent);
                }
                .skill-category h3 {
                    color: var(--lightest-slate);
                    margin-bottom: 25px;
                    font-size: var(--fz-xl);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .icon {
                    color: var(--accent);
                }
                .skill-list {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                    list-style: none;
                }
                @media (max-width: 480px) {
                    .skill-list {
                        grid-template-columns: 1fr;
                    }
                }
                .skill-list li {
                    font-family: var(--font-mono);
                    font-size: var(--fz-xs);
                    position: relative;
                    padding-left: 20px;
                    color: var(--slate);
                }
                .skill-list li:before {
                    content: "▹";
                    position: absolute;
                    left: 0;
                    color: var(--accent);
                }
            `}</style>
    </section>
  );
};

export default Skills;
