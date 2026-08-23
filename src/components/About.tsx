"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {

  return (
    <section id="about" className="section">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <div className="about-text">
          <p>
            Hello! I'm Rishika, a Computer Science undergraduate at <strong>Vellore Institute of Technology, Bhopal</strong> (2023–2027) specializing in Cyber Security (CGPA: 8.84/10).
          </p>
          <p>
            I bring together solid foundations in <strong>Data Structures & Algorithms</strong>, <strong>Network Protocols</strong>, and <strong>AWS</strong>, with practical experience building containerized SIEM architectures using the ELK Stack, AI-powered threat detection models, and modular vulnerability management platforms.
          </p>
          <p>
            With <strong>400+ solved algorithmic problems</strong>, a <strong>Top 2% ranking on TryHackMe</strong>, CTF competition wins, hackathons, and responsible disclosures on OpenBugBounty, I am passionate about building resilient, secure systems and advancing threat intelligence.
          </p>
        </div>
        <div className="about-pic">
          <div className="wrapper">
            <Image
              src="/ME.png"
              alt="Rishika Patel"
              width={300}
              height={300}
              className="img"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .inner {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 50px;
        }
        @media (max-width: 768px) {
          .inner {
            display: block;
          }
        }
        .about-text p {
          margin-bottom: 20px;
          font-size: var(--fz-lg);
        }
        .about-pic {
          position: relative;
          max-width: 300px;
        }
        @media (max-width: 768px) {
          .about-pic {
            margin: 50px auto 0;
            width: 70%;
          }
        }
        .wrapper {
          display: block;
          position: relative;
          width: 100%;
          border-radius: var(--border-radius);
          background-color: var(--accent);
        }
        .wrapper:hover {
          background-color: transparent;
        }
        .wrapper:hover .img {
          filter: none;
          mix-blend-mode: normal;
        }
        .img {
          position: relative;
          border-radius: var(--border-radius);
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1);
          transition: var(--transition);
          width: 100%;
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default About;
