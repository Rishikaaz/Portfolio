"use client";
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const BackgroundAnimations = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor follow effect
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="background-container">
      {/* Subtle Dot Grid */}
      <div className="dot-grid"></div>

      {/* Interactive Spotlight */}
      <motion.div
        className="mouse-spotlight"
        style={{
          left: smoothX,
          top: smoothY,
        }}
      />

      {/* Pulsing Orbs */}
      <motion.div
        className="orb orb-1"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="orb orb-2"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <style jsx>{`
        .background-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background-color: var(--background);
          perspective: 1000px;
        }
        
        .dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--lightest-navy) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.15;
          mask-image: linear-gradient(to bottom, transparent, black, transparent);
        }

        .mouse-spotlight {
          position: fixed;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--accent-tint) 0%, transparent 80%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
          opacity: 0.4;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.1;
          z-index: -1;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          top: -100px;
          left: -100px;
          background: var(--accent);
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          bottom: -150px;
          right: -100px;
          background: var(--accent);
        }

        @media (max-width: 768px) {
          .mouse-spotlight {
            display: none;
          }
          .orb {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimations;
