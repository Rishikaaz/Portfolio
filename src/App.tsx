import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebars from './components/SocialSidebars';
import BackgroundAnimations from './components/BackgroundAnimations';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
    return (
        <>
            <ParticleBackground />
            <ScrollProgress />
            <BackgroundAnimations />
            <Navbar />
            <SocialSidebars />
            <main className="container">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
