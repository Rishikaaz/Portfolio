"use client";
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSidebars = () => {
    return (
        <>
            <motion.div
                className="side-element left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <ul className="side-list">
                    <li>
                        <a href="https://github.com/Rishikaaz" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rishika-patel-854ba5289" target="_blank" rel="noreferrer" aria-label="Linkedin">
                            <Linkedin size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/rishikaaz19/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                    </li>
                </ul>
            </motion.div>

            <motion.div
                className="side-element right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <div className="side-list">
                    <a href="mailto:riku192004@gmail.com" className="email-link-side">
                        riku192004@gmail.com
                    </a>
                </div>
            </motion.div>
        </>
    );
};

export default SocialSidebars;
