import FadeInSection from "./FadeInSection";

interface ExperienceItemProps {
  icon: string;
  name: string;
  type: string;
  delay?: number;
}

const ExperienceItem = ({ icon, name, type, delay = 0 }: ExperienceItemProps) => {
  return (
    <FadeInSection delay={delay}>
      <div className="flex items-center justify-between py-3 group cursor-default">
        <div className="flex items-center gap-4">
          <span className="text-xl">{icon}</span>
          <span className="text-foreground font-medium group-hover:text-muted-foreground transition-colors">
            {name}
          </span>
        </div>
        <div className="experience-line" />
        <span className="text-muted-foreground text-sm">{type}</span>
      </div>
    </FadeInSection>
  );
};

export default ExperienceItem;
