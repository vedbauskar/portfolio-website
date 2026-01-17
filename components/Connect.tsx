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
        { name: "Instagram", icon: Instagram, url: instagramUrl, color: "hover:text-pink-500", clickable: true },
        { name: "GitHub (WIP)", icon: Github, url: "#", color: "text-gray-400 cursor-default", clickable: false },
        { name: "LinkedIn", icon: Linkedin, url: linkedinUrl, color: "hover:text-blue-500", clickable: true },
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
                                href={social.clickable ? social.url : undefined}
                                target={social.clickable ? "_blank" : undefined}
                                rel={social.clickable ? "noopener noreferrer" : undefined}
                                className={`flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg transition-all duration-300 ${social.clickable
                                    ? `hover:border-foreground hover:-translate-y-1 ${social.color}`
                                    : "cursor-default opacity-80"
                                    }`}
                                onClick={(e) => !social.clickable && e.preventDefault()}
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
