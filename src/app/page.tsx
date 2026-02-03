import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialSidebars from '@/components/SocialSidebars';
import BackgroundAnimations from '@/components/BackgroundAnimations';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <BackgroundAnimations />
            <Navbar />
            <SocialSidebars />
            <main className="container">
                <Hero />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
