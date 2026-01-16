import { motion } from "framer-motion";
import CyberSigil from "@/components/CyberSigil";
import FadeInSection from "@/components/FadeInSection";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";

const experiences = [
  { icon: "🎓", name: "Stanford University", type: "Education" },
  { icon: "💻", name: "Tech Internship", type: "Software" },
  { icon: "🔬", name: "Research Lab", type: "Research" },
  { icon: "🎨", name: "Design Studio", type: "Creative" },
];

const projects = [
  {
    title: "Neural Interface",
    description: "An experimental project exploring brain-computer interaction patterns and accessibility.",
    tags: ["Python", "TensorFlow", "Research"],
  },
  {
    title: "Void Engine",
    description: "Minimalist game engine built from scratch focusing on procedural generation.",
    tags: ["C++", "OpenGL", "Graphics"],
  },
  {
    title: "Cipher Protocol",
    description: "End-to-end encrypted messaging system with zero-knowledge proofs.",
    tags: ["Rust", "Cryptography", "Security"],
  },
  {
    title: "Flux Design System",
    description: "Component library and design tokens for consistent dark-theme interfaces.",
    tags: ["React", "TypeScript", "Design"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating sigils in background */}
      <CyberSigil className="w-48 h-48 -top-12 -right-12 opacity-20 animate-float" />
      <CyberSigil className="w-32 h-32 top-1/3 -left-8 opacity-10" />
      <CyberSigil className="w-40 h-40 bottom-1/4 right-1/4 opacity-10" />

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <section className="mb-20">
          <FadeInSection>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Your Name
            </motion.h1>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Computer Science student crafting elegant digital experiences.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Passionate about the intersection of technology and design. 
              Currently exploring machine learning and creative coding.
            </p>
          </FadeInSection>

          <SocialLinks />
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <FadeInSection>
            <h2 className="section-label mb-6">Experience</h2>
          </FadeInSection>

          <div className="space-y-1">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={exp.name}
                icon={exp.icon}
                name={exp.name}
                type={exp.type}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <FadeInSection>
            <h2 className="section-label mb-6">Projects</h2>
          </FadeInSection>

          <div className="grid gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer>
          <FadeInSection>
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm text-center">
                © 2026 · Designed & built with intention
              </p>
            </div>
          </FadeInSection>
        </footer>
      </main>
    </div>
  );
};

export default Index;
