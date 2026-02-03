import type { Metadata } from "next";
import React from "react";
import "./globals.css";

import ParticleBackground from "../components/ParticleBackground";

export const metadata: Metadata = {
    title: "Rishika Patel | Cybersecurity Enthusiast",
    description: "I'm a cybersecurity enthusiast and student at VIT Bhopal, passionate about protecting the digital world.",
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
            </body>
        </html>
    );
}
