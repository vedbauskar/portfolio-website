import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}

const ProjectCard = ({ title, description, tags, delay = 0 }: ProjectCardProps) => {
  return (
    <FadeInSection delay={delay}>
      <motion.div
        className="group p-6 bg-card border border-border rounded-lg cursor-pointer relative overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
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
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </FadeInSection>
  );
};

export default ProjectCard;
