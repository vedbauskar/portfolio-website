"use client";

import FadeInOnce from "./FadeInOnce";
import { Instagram, Github, Linkedin } from "lucide-react";

interface ConnectProps {
    description?: string;
    instagramUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
}

const Connect = ({
    description = "Let's connect! Feel free to reach out on any of these platforms.",
    instagramUrl = "#",
    githubUrl = "#",
    linkedinUrl = "#",
}: ConnectProps) => {
    const socials = [
        { name: "Instagram", icon: Instagram, url: instagramUrl, color: "hover:text-pink-500" },
        { name: "GitHub", icon: Github, url: githubUrl, color: "hover:text-gray-400" },
        { name: "LinkedIn", icon: Linkedin, url: linkedinUrl, color: "hover:text-blue-500" },
    ];

    return (
        <section className="mb-20">
            <FadeInOnce delay={0.6}>
                <h2 className="section-label mb-6">Connect</h2>
            </FadeInOnce>

            <FadeInOnce delay={0.7}>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                    {description}
                </p>
            </FadeInOnce>

            <FadeInOnce delay={0.8}>
                <div className="flex gap-4">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg transition-all duration-300 hover:border-foreground hover:-translate-y-1 ${social.color}`}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="text-sm font-medium">{social.name}</span>
                            </a>
                        );
                    })}
                </div>
            </FadeInOnce>
        </section>
    );
};

export default Connect;
