"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#home' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : 'normal'}`}>
            <nav className="navbar">
                <motion.div
                    className="logo"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/">Rishika Patel</Link>
                </motion.div>

                <div className="nav-links-desktop">
                    <ol className="nav-links">
                        {navLinks.map((link, i) => (
                            <motion.li
                                key={link.name}
                                className="nav-item"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Link href={link.href} className="nav-link">
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
                        >
                            <a
                                href="https://docs.google.com/document/d/1XeDTPIM08sjIVBfRfKTDrlayo3pEhwm3fQmBC_mUTJk/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-button"
                            >
                                Resume
                            </a>
                        </motion.li>
                    </ol>
                </div>

                <motion.button
                    className="hamburger"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </motion.button>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : 'closed'}`}>
                <ol className="mobile-nav-links">
                    {navLinks.map((link, i) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://docs.google.com/document/d/1XeDTPIM08sjIVBfRfKTDrlayo3pEhwm3fQmBC_mUTJk/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-button"
                            style={{ padding: '15px 50px', margin: '20px 0', fontSize: '1rem' }}
                        >
                            Resume
                        </a>
                    </li>
                </ol>
            </div>
        </header>
    );
};

export default Navbar;
