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
            Hello! I'm Rishika, a CS student at <strong>Vellore Institute of Technology, Bhopal</strong> (2023–2027).
            I specialize in offensive security and full-stack development, focusing on protecting digital infrastructures through proactive research.
          </p>
          <p>
            My expertise includes <strong>Vulnerability Assessment</strong> and <strong>Malware Analysis</strong>.
            When I'm not auditing code, I'm contributing to open-source or mentoring as a <strong>Patriotic Youth Ambassador</strong>.
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
