"use client";
import React from 'react';

const About = () => {

  return (
    <section id="about" className="section">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <div className="about-text">
          <p>
            Hello! I'm Rishika, a Computer Science student at <strong>Vellore Institute of Technology, Bhopal</strong> (2023–2027) specializing in Cybersecurity and Digital Forensics.
          </p>
          <p>
            I bring together solid foundations in <strong>Data Structures & Algorithms (DSA)</strong>, <strong>Object-Oriented Programming (OOPs)</strong>, and <strong>Vulnerability Assessment & Penetration Testing (VAPT)</strong>. Whether orchestrating containerized SIEM architectures using the ELK Stack, developing HIDS security sensors, or engineering AI threat detection models, I focus on building secure and resilient software.
          </p>
        </div>
      </div>

      <style jsx>{`
        .inner {
          display: block;
          max-width: 800px;
        }
        .about-text p {
          margin-bottom: 20px;
          font-size: var(--fz-lg);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default About;
