"use client";
import React, { useState, useEffect } from 'react';
import { Award, Maximize2, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certification {
  name: string;
  issuer: string;
  image?: string;
  date?: string;
  credentialUrl?: string;
}

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const certifications: Certification[] = [
    {
      name: "Certified Cybersecurity Educator Professional (CCEP)",
      issuer: "Red Team Leaders",
      image: "/certifications/ccep.png",
      date: "Aug 2026",
      credentialUrl: "https://courses.redteamleaders.com/exam-completion/40053fb17b3f5b47"
    },
    {
      name: "Blockchain and its Applications",
      issuer: "NPTEL, IIT Kharagpur",
      image: "/certifications/nptel_blockchain.png",
      date: "Jan-Apr 2025"
    },
    {
      name: "The Bits and Bytes of Computer Networking",
      issuer: "Google & Coursera",
      image: "/certifications/coursera.png",
      date: "Dec 2025",
      credentialUrl: "https://coursera.org/verify/BP39Q643JKFZ"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: "/certifications/aws_practice.png",
      date: "Sep 2025"
    },
    {
      name: "AWS Technical Essentials",
      issuer: "Amazon Web Services",
      image: "/certifications/aws_essentials.png",
      date: "Sep 2025"
    },
    {
      name: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      image: "/certifications/cisco_threat.png",
      date: "Jul 2025"
    },
    {
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      image: "/certifications/cisco_networking.png",
      date: "Apr 2025"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      image: "/certifications/cisco_intro_cyber.png",
      date: "Jun 2024"
    },
    {
      name: "Cyber Job Simulation",
      issuer: "Deloitte & Forage",
      image: "/certifications/deloitte_cyber.png",
      date: "Jun 2025"
    },
    {
      name: "Cybersecurity Job Simulation",
      issuer: "Mastercard & Forage",
      image: "/certifications/mastercard_cyber.png",
      date: "May 2025"
    }
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
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            onClick={() => setSelectedCert(cert)}
          >
            <div className="cert-card">
              {/* Image Preview or Icon Container */}
              <div className="cert-image-container">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="cert-thumb"
                    onError={(e) => {
                      // Fallback if image path is not yet present
                      (e.target as HTMLElement).style.display = 'none';
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent) {
                        const fallback = parent.querySelector('.cert-fallback-icon');
                        if (fallback) (fallback as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                ) : null}

                <div
                  className="cert-fallback-icon"
                  style={{ display: cert.image ? 'none' : 'flex' }}
                >
                  <Award size={32} />
                </div>

                <div className="cert-overlay">
                  <Maximize2 size={22} />
                  <span>View</span>
                </div>
              </div>

              {/* Info Container */}
              <div className="cert-info">
                <h3>{cert.name}</h3>
                <div className="cert-meta">
                  <span className="issuer">{cert.issuer}</span>
                  {cert.date && <span className="date">• {cert.date}</span>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close preview"
              >
                <X size={24} />
              </button>

              <div className="modal-body">
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    className="modal-img"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent) {
                        const fallback = parent.querySelector('.modal-fallback');
                        if (fallback) (fallback as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                ) : null}

                <div
                  className="modal-fallback"
                  style={{ display: selectedCert.image ? 'none' : 'flex' }}
                >
                  <Award size={64} className="modal-icon" />
                </div>

                <div className="modal-details">
                  <h3>{selectedCert.name}</h3>
                  <p className="modal-issuer">Issued by {selectedCert.issuer}</p>

                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="credential-link"
                    >
                      Verify Credential <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
          cursor: pointer;
        }
        .cert-card {
          background-color: var(--accent-box);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: var(--card-shadow);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: 100%;
          transition: var(--transition);
        }
        .cert-card-wrapper:hover .cert-card {
          background-color: var(--lightest-navy);
          border-color: var(--accent);
          box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
        }

        .cert-image-container {
          position: relative;
          width: 100%;
          height: 180px;
          background-color: var(--navy);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .cert-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .cert-card-wrapper:hover .cert-thumb {
          transform: scale(1.05);
        }
        .cert-fallback-icon {
          color: var(--accent);
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .cert-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 25, 47, 0.75);
          backdrop-filter: blur(3px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cert-card-wrapper:hover .cert-overlay {
          opacity: 1;
        }

        .cert-info {
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }
        .cert-info h3 {
          color: var(--lightest-slate);
          font-size: var(--fz-lg);
          font-weight: 500;
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .cert-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
        }
        .issuer {
          color: var(--accent);
        }
        .date {
          color: var(--slate);
        }

        /* Lightbox Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background-color: rgba(2, 12, 27, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-content {
          position: relative;
          background-color: var(--light-navy);
          border: 1px solid var(--accent);
          border-radius: 16px;
          max-width: 760px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          padding: 24px;
        }
        .close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: var(--lightest-slate);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          z-index: 10;
        }
        .close-btn:hover {
          background-color: var(--accent);
          color: var(--navy);
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }
        .modal-img {
          width: 100%;
          max-height: 480px;
          object-fit: contain;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: var(--navy);
        }
        .modal-fallback {
          width: 100%;
          height: 220px;
          background-color: var(--navy);
          border-radius: 8px;
          align-items: center;
          justify-content: center;
          color: var(--accent);
        }
        .modal-details h3 {
          color: var(--lightest-slate);
          font-size: var(--fz-xl);
          margin-bottom: 6px;
        }
        .modal-issuer {
          font-family: var(--font-mono);
          color: var(--accent);
          font-size: var(--fz-sm);
        }
        .credential-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          color: var(--accent);
          border: 1px solid var(--accent);
          border-radius: var(--border-radius);
          padding: 10px 20px;
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          transition: var(--transition);
        }
        .credential-link:hover {
          background-color: var(--accent-tint);
        }
      `}</style>
    </section>
  );
};

export default Certifications;
