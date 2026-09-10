"use client";
import React, { useState } from 'react';
import { Github, Linkedin, Code2, Shield, Instagram, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/rishika.patel2419@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || "Security Consultation / Inquiry",
          message: formData.message,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again later.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="overline">What's Next?</p>
        <h2 className="title">Get In Touch</h2>
        <p className="desc">
          I'm currently looking for new opportunities in Cybersecurity and Ethical Hacking.
          Whether you have a question, a security project, or just want to say hi, my inbox is always open!
        </p>

        {/* Contact Form Card */}
        <div className="contact-card">
          {status === 'success' ? (
            <motion.div
              className="status-card success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle2 size={54} className="status-icon success-icon" />
              <h3>Message Sent Successfully!</h3>
              <p>
                Thank you for getting in touch. Your message has been sent directly from the site and I will get back to you as soon as possible.
              </p>
              <button onClick={() => setStatus('idle')} className="reset-btn">
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {status === 'error' && (
                <div className="error-banner">
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={status === 'submitting'}
                    placeholder="Your Name"
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
                    disabled={status === 'submitting'}
                    placeholder="your.email@example.com"
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
                  disabled={status === 'submitting'}
                  placeholder="Subject"
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
                  disabled={status === 'submitting'}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="spinner" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="social-links">
          {[
            { icon: <Github size={22} />, url: "https://github.com/Rishikaaz", label: "GitHub" },
            { icon: <Linkedin size={22} />, url: "https://linkedin.com/in/rishika-patel", label: "LinkedIn" },
            { icon: <Code2 size={22} />, url: "https://leetcode.com/rishikaaz19", label: "LeetCode" },
            { icon: <Shield size={22} />, url: "https://tryhackme.com/p/Rishikaaz19", label: "TryHackMe" },
            { icon: <Instagram size={22} />, url: "https://www.instagram.com/rishikaaz19/", label: "Instagram" },
            { icon: <Mail size={22} />, url: "mailto:rishika.patel2419@gmail.com", label: "Email" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ y: -4, color: 'var(--accent)' }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .contact-section {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 100px;
        }
        .overline {
          display: block;
          margin-bottom: 20px;
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: var(--fz-md);
          font-weight: 400;
        }
        .title {
          font-size: clamp(40px, 5vw, 60px);
          margin-bottom: 10px;
          color: var(--lightest-slate);
        }
        .desc {
          margin-bottom: 40px;
          font-size: var(--fz-lg);
          color: var(--slate);
          line-height: 1.5;
        }
        .contact-card {
          background-color: var(--accent-box);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 35px;
          box-shadow: var(--card-shadow);
          text-align: left;
          margin-bottom: 50px;
          transition: var(--transition);
        }
        .contact-card:hover {
          border-color: rgba(100, 255, 218, 0.3);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 550px) {
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
        .form-group input:disabled,
        .form-group textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .error-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: rgba(255, 99, 99, 0.1);
          border: 1px solid rgba(255, 99, 99, 0.3);
          color: #ff6b6b;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: var(--fz-sm);
          font-family: var(--font-mono);
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
          border-radius: var(--border-radius);
          padding: 1rem 1.75rem;
          font-family: var(--font-mono);
          font-size: var(--fz-sm);
          cursor: pointer;
          transition: var(--transition);
          margin-top: 10px;
        }
        .submit-btn:hover:not(:disabled) {
          background-color: var(--accent-tint);
          transform: translateY(-2px);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .status-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 10px;
        }
        .status-icon.success-icon {
          color: var(--accent);
          margin-bottom: 16px;
        }
        .status-card h3 {
          font-size: 22px;
          color: var(--lightest-slate);
          margin-bottom: 12px;
        }
        .status-card p {
          color: var(--slate);
          font-size: var(--fz-md);
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 460px;
        }
        .reset-btn {
          background: transparent;
          color: var(--accent);
          border: 1px solid var(--accent);
          border-radius: var(--border-radius);
          padding: 0.75rem 1.5rem;
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          cursor: pointer;
          transition: var(--transition);
        }
        .reset-btn:hover {
          background-color: var(--accent-tint);
        }
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 25px;
        }
        .social-links a {
          color: var(--light-slate);
          transition: var(--transition);
        }
        .social-links a:hover {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};

export default Contact;
