"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>Designed & Built by Rishika Patel</p>
                <p className="year">© {new Date().getFullYear()}</p>
            </div>
            <style jsx>{`
        .footer {
          padding: 2.5rem 0;
          text-align: center;
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          color: var(--light-slate);
        }
        .year {
          margin-top: 5px;
          opacity: 0.6;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
