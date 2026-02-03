"use client";
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            baseSize: number;
            pulseSpeed: number;
            angle: number;

            constructor() {
                if (!canvas) {
                    this.x = 0; this.y = 0;
                } else {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                }

                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;

                this.baseSize = Math.random() * 3 + 1;
                this.size = this.baseSize;
                this.pulseSpeed = 0.05 + Math.random() * 0.05;
                this.angle = Math.random() * Math.PI * 2;

                const colors = [
                    'rgba(34, 211, 238, 0.9)',
                    'rgba(167, 139, 250, 0.9)',
                    'rgba(255, 255, 255, 0.8)',
                    'rgba(56, 189, 248, 0.9)'
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                this.angle += this.pulseSpeed;
                this.size = this.baseSize + Math.sin(this.angle) * 0.5;

                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const interactionRadius = 180;

                if (distance < interactionRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (interactionRadius - distance) / interactionRadius;
                    const repelStrength = 1.2;
                    this.vx -= Math.cos(angle) * force * repelStrength;
                    this.vy -= Math.sin(angle) * force * repelStrength;
                }

                this.vx *= 0.99;
                this.vy *= 0.99;

                if (Math.abs(this.vx) < 0.2) this.vx += (Math.random() - 0.5) * 0.02;
                if (Math.abs(this.vy) < 0.2) this.vy += (Math.random() - 0.5) * 0.02;

                if (canvas && (this.x < 0 || this.x > canvas.width)) this.vx *= -1;
                if (canvas && (this.y < 0 || this.y > canvas.height)) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, Math.abs(this.size), 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            if (!canvas) return;
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 8000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            if (!ctx) return;
            const maxDistance = 150;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        const opacity = 1 - (distance / maxDistance);
                        ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            if (!canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawLines();

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};

export default ParticleBackground;
