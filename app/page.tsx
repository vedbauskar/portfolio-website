"use client";

import Image from "next/image";
import CyberSigil from "@/components/CyberSigil";
import FadeInOnce from "@/components/FadeInOnce";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import Connect from "@/components/Connect";
import { ThemeButtons } from "@/components/ThemeToggle";

const experiences = [
    { logo: "/images/ucdavis_logo.png", name: "UC Davis", type: "Education" },
    { logo: "/images/usc_logo.png", name: "USC", type: "Education" },
];

const projects = [
    {
        title: "Sactrak",
        description: "Full stack web platform for real time course catalog indexing and academic data visualization.",
        tags: ["Python", "Vite", "Rest APIS", "Supabase"],
        url: "https://www.sactrak.com",
    },
    {
        title: "Ibdiary",
        description: "Mobile health application for longitudinal symptom and nutrition tracking with calendar and analytics visualization.",
        tags: ["Javascript", "React Native"],
        url: "#",
    },
    {
        title: "Osteoperosis Risk Predictor",
        description: "Machine learning web app for clinical risk classification using multi model evaluation.",
        tags: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        url: "https://github.com/dbrawla/Osteoporosis-Risk-Prediction-ML-model",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Floating sigils in background */}
            <CyberSigil className="w-48 h-48 -top-12 -right-12 opacity-20 animate-float" />
            <CyberSigil className="w-32 h-32 top-1/3 -left-8 opacity-10" />
            <CyberSigil className="w-40 h-40 bottom-1/4 right-1/4 opacity-10" />

            <main className="relative z-10 max-w-2xl mx-auto px-6 py-24">
                {/* Hero Section - Static, no animations */}
                <section className="mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
                        Ved Bauskar
                    </h1>

                    <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                        Data Science and Economics @ USC
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        Looking for SWE, Product Management, and Data Science roles for 2026!
                        Actively trying to put more on this website.
                    </p>

                    <SocialLinks />
                </section>

                {/* Experience Section - Fade in once */}
                <FadeInOnce delay={0.3}>
                    <section className="mb-20">
                        <h2 className="section-label mb-6">Experience</h2>

                        <div className="space-y-1">
                            {experiences.map((exp) => (
                                <div
                                    key={exp.name}
                                    className="flex items-center justify-between py-3 group cursor-default"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-1">
                                            <Image
                                                src={exp.logo}
                                                alt={exp.name}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <span className="text-foreground font-medium group-hover:text-muted-foreground transition-colors">
                                            {exp.name}
                                        </span>
                                    </div>
                                    <div className="experience-line" />
                                    <span className="text-muted-foreground text-sm">{exp.type}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeInOnce>

                {/* Projects Section - Fade in once at same rate as Experience */}
                <FadeInOnce delay={0.3}>
                    <section className="mb-20">
                        <h2 className="section-label mb-6">Projects</h2>

                        <div className="grid gap-4">
                            {projects.map((project) => (
                                <a
                                    key={project.title}
                                    href={project.url}
                                    target={project.url !== "#" ? "_blank" : undefined}
                                    rel={project.url !== "#" ? "noopener noreferrer" : undefined}
                                    className="group p-6 bg-card border border-border rounded-lg cursor-pointer relative overflow-hidden block hover:-translate-y-1 transition-transform duration-200"
                                >
                                    {/* Subtle sigil accent on hover */}
                                    <div className="absolute -right-8 -top-8 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <path
                                                d="M50 10 Q70 30 60 50 T50 90 Q30 70 40 50 T50 10"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="1"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-muted-foreground transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                </FadeInOnce>



                {/* Footer */}
                <footer>
                    <div className="pt-8 border-t border-border">
                        <div className="flex items-center justify-between">
                            {/* Left side - Copyright, Request Resume, and Theme Buttons */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-4">
                                    <p className="text-muted-foreground text-sm">
                                        © 2026 Ved Bauskar
                                    </p>
                                    <ThemeButtons />
                                </div>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="text-muted-foreground text-xs hover:text-foreground transition-colors underline"
                                >
                                    Request Resume
                                </a>
                            </div>

                            {/* Right side - Version and Last Updated */}
                            <div className="text-right">
                                <p className="text-muted-foreground text-xs">
                                    v1.1.0
                                </p>
                                <p className="text-muted-foreground text-xs">
                                    Updated Jan 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
