"use client";
import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
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
          I'm currently looking for new opportunities in Cybersecurity and Software Engineering.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <motion.a
          href="mailto:riku192004@gmail.com"
          className="email-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.a>

        <div className="social-links">
          {[
            { icon: <Github size={24} />, url: "https://github.com/Rishikaaz" },
            { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/rishika-patel-854ba5289" },
            { icon: <Instagram size={24} />, url: "https://www.instagram.com/rishikaaz19/" },
            { icon: <Mail size={24} />, url: "mailto:riku192004@gmail.com" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: 'var(--accent)' }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .contact-section {
          text-align: center;
          max-width: 600px;
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
        }
        .desc {
          margin-bottom: 50px;
          font-size: var(--fz-lg);
        }
        .email-link {
          color: var(--accent);
          background-color: transparent;
          border: 1px solid var(--accent);
          border-radius: var(--border-radius);
          padding: 1.25rem 1.75rem;
          font-family: var(--font-mono);
          font-size: var(--fz-sm);
          transition: var(--transition);
        }
        .email-link:hover {
          background-color: var(--accent-tint);
        }
        .social-links {
          margin-top: 50px;
          display: flex;
          justify-content: center;
          gap: 30px;
        }
        .social-links a {
          color: var(--light-slate);
          transition: var(--transition);
        }
        .social-links a:hover {
          color: var(--accent);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
};

export default Contact;
