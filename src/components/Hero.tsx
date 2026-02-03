"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="hero-intro">Hi, my name is</p>
          <h1 className="hero-name">Rishika Patel.</h1>
          <h2 className="hero-tagline">Secure the digital. Build the future.</h2>
          <p className="hero-desc">
            I'm a <strong>Cybersecurity Analyst</strong> studying at
            VIT Bhopal. I specialize in offensive security, vulnerability assessment, and malware analysis,
            focusing on engineering secure, scalable digital infrastructures.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-btn">
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <Image
              src="/ME.png"
              alt="Rishika Patel"
              width={280}
              height={330}
              className="img"
              priority
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    padding-top: 100px;
                }
                .hero-content {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 60px;
                    position: relative;
                    z-index: 1;
                    align-items: center;
                    width: 100%;
                }
                @media (max-width: 992px) {
                    .hero-content {
                        grid-template-columns: 1fr;
                        text-align: left;
                        gap: 40px;
                    }
                    .hero-section {
                        padding-top: 140px;
                        padding-bottom: 60px;
                    }
                }
                .hero-intro {
                    color: var(--accent);
                    font-family: var(--font-mono);
                    font-size: var(--fz-md);
                    margin-bottom: 20px;
                }
                .hero-name {
                    color: var(--lightest-slate);
                    font-size: clamp(40px, 6vw, 70px);
                    font-weight: 700;
                    line-height: 1.1;
                    margin-bottom: 10px;
                }
                .hero-tagline {
                    color: var(--slate);
                    font-size: clamp(30px, 4vw, 50px);
                    font-weight: 600;
                    line-height: 1.2;
                    margin-bottom: 25px;
                }
                .hero-desc {
                    max-width: 540px;
                    font-size: var(--fz-xl);
                    line-height: 1.6;
                    color: var(--slate);
                    margin-bottom: 40px;
                }
                .hero-desc strong {
                    color: var(--accent);
                    font-weight: 500;
                }
                .cta-btn {
                    color: var(--accent);
                    background-color: transparent;
                    border: 1px solid var(--accent);
                    border-radius: var(--border-radius);
                    padding: 1.25rem 2rem;
                    font-family: var(--font-mono);
                    font-size: var(--fz-sm);
                    transition: var(--transition);
                    display: inline-block;
                }
                .cta-btn:hover {
                    background-color: var(--accent-tint);
                    transform: translateY(-3px);
                }
                .hero-image {
                    display: flex;
                    justify-content: center;
                    position: relative;
                }
                .image-wrapper {
                    position: relative;
                    width: 280px;
                    height: 330px;
                    background-color: var(--accent);
                    border-radius: var(--border-radius);
                    transition: var(--transition);
                }
                .image-wrapper::before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 2px solid var(--accent);
                    top: 15px;
                    left: 15px;
                    border-radius: var(--border-radius);
                    z-index: -1;
                    transition: var(--transition);
                }
                .image-wrapper:hover::before {
                    top: 10px;
                    left: 10px;
                }
                @media (max-width: 480px) {
                    .image-wrapper {
                        width: 240px;
                        height: 280px;
                    }
                }
                .image-wrapper:hover {
                    background-color: transparent;
                    box-shadow: 0 10px 30px -10px var(--accent-tint);
                }
                .image-wrapper:hover .img {
                    filter: none;
                    mix-blend-mode: normal;
                }
                .img {
                    border-radius: var(--border-radius);
                    mix-blend-mode: multiply;
                    filter: grayscale(100%) contrast(1.2);
                    transition: var(--transition);
                    object-fit: cover;
                }
            `}</style>
    </section>
  );
};

export default Hero;
