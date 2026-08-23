"use client";
import React, { useState } from 'react';
import { Github, Linkedin, Code2, Shield, Mail, Copy, Check, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const email = "rishika.patel2419@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || "Security Consultation / Inquiry");
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header-line">
        <span className="section-header-tag">// GET IN TOUCH</span>
        <div className="header-line"></div>
      </div>

      <div className="contact-grid">
        {/* Left Column */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="status-badge">
            <span className="status-dot"></span>
            Available for new opportunities
          </div>

          <h2 className="contact-title">Let's secure the future together.</h2>

          <p className="contact-desc">
            Have a project in mind or looking for a security audit? Feel free to reach out. I'm always open to discussing new ideas, finding vulnerabilities, and building secure systems.
          </p>

          <div className="email-box">
            <div className="email-icon">
              <Mail size={20} />
            </div>
            <div className="email-content">
              <span className="email-label">Email Address</span>
              <span className="email-value">{email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="copy-btn"
              title="Copy Email"
              type="button"
            >
              {copied ? <Check size={18} className="copied-icon" /> : <Copy size={18} />}
            </button>
          </div>

          <div className="social-links-container">
            <span className="social-label">Connect via</span>
            <div className="social-links">
              {[
                { icon: <Github size={20} />, url: "https://github.com/Rishikaaz", label: "GitHub" },
                { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/rishika-patel", label: "LinkedIn" },
                { icon: <Code2 size={20} />, url: "https://leetcode.com/rishikaaz19", label: "LeetCode" },
                { icon: <Shield size={20} />, url: "https://tryhackme.com/p/Rishikaaz19", label: "TryHackMe" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-icon-btn"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                required
                placeholder="Project Inquiry / Security Audit"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <Send size={16} />
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-section {
          max-width: 1100px;
          margin: 0 auto 120px;
        }
        .section-header-line {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 50px;
        }
        .section-header-tag {
          font-family: var(--font-mono);
          color: var(--accent);
          font-size: var(--fz-md);
          letter-spacing: 1.5px;
          font-weight: 600;
          white-space: nowrap;
        }
        .header-line {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0.15) 0%, transparent 100%);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 50px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 20px;
          background: rgba(100, 255, 218, 0.1);
          border: 1px solid rgba(100, 255, 218, 0.3);
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          margin-bottom: 25px;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent);
          box-shadow: 0 0 10px var(--accent);
        }
        .contact-title {
          font-size: clamp(28px, 4vw, 42px);
          color: var(--lightest-slate);
          line-height: 1.2;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .contact-desc {
          color: var(--slate);
          font-size: var(--fz-lg);
          line-height: 1.6;
          margin-bottom: 35px;
        }
        .email-box {
          display: flex;
          align-items: center;
          gap: 15px;
          background-color: var(--accent-box);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px 20px;
          border-radius: 10px;
          margin-bottom: 30px;
          transition: var(--transition);
        }
        .email-box:hover {
          border-color: var(--accent);
        }
        .email-icon {
          color: var(--accent);
        }
        .email-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .email-label {
          font-family: var(--font-mono);
          font-size: var(--fz-xxs);
          color: var(--light-slate);
          opacity: 0.7;
          margin-bottom: 2px;
        }
        .email-value {
          font-family: var(--font-mono);
          font-size: var(--fz-sm);
          color: var(--lightest-slate);
          word-break: break-all;
        }
        .copy-btn {
          background: transparent;
          border: none;
          color: var(--light-slate);
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .copy-btn:hover {
          color: var(--accent);
          background-color: rgba(255, 255, 255, 0.05);
        }
        .copied-icon {
          color: var(--accent);
        }
        .social-links-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .social-label {
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          color: var(--light-slate);
        }
        .social-links {
          display: flex;
          gap: 15px;
        }
        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 8px;
          background: var(--accent-box);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--light-slate);
          transition: var(--transition);
        }
        .social-icon-btn:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-3px);
        }
        .contact-form-card {
          background-color: var(--accent-box);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 35px;
          box-shadow: var(--card-shadow);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          color: var(--light-slate);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          background-color: var(--navy);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          padding: 12px 16px;
          color: var(--lightest-slate);
          font-family: var(--font-mono);
          font-size: var(--fz-sm);
          transition: var(--transition);
          outline: none;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--slate);
          opacity: 0.6;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(100, 255, 218, 0.15);
        }
        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: transparent;
          color: var(--accent);
          border: 1px solid var(--accent);
          border-radius: 8px;
          padding: 14px 20px;
          font-family: var(--font-mono);
          font-size: var(--fz-sm);
          font-weight: 500;
          letter-spacing: 1px;
          cursor: pointer;
          transition: var(--transition);
          margin-top: 10px;
        }
        .submit-btn:hover {
          background-color: var(--accent-tint);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Contact;
