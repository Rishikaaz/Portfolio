import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

import ParticleBackground from "../components/ParticleBackground";

export const metadata: Metadata = {
    title: "Rishika Patel | Cybersecurity Enthusiast",
    description: "Computer Science student specializing in Cybersecurity and Ethical Hacking with expertise in Vulnerability Assessment, Penetration Testing, and Malware Analysis.",
    icons: {
        icon: "/ME.png",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
            </head>
            <body>
                <ParticleBackground />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
