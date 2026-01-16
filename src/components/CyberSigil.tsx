import { motion, type Easing } from "framer-motion";

interface CyberSigilProps {
  className?: string;
}

const CyberSigil = ({ className = "" }: CyberSigilProps) => {
  const easeValue: Easing = [0.42, 0, 0.58, 1];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.4,
      transition: {
        pathLength: { duration: 2, ease: easeValue },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={`absolute sigil-glow ${className}`}
      initial="hidden"
      animate="visible"
    >
      {/* Organic flowing sigil pattern */}
      <motion.path
        d="M100 20 Q140 40 130 80 T100 140 Q60 160 70 120 T100 20"
        className="sigil-line"
        variants={pathVariants}
        strokeDasharray="1000"
      />
      <motion.path
        d="M60 50 Q100 30 140 50 Q160 90 140 130 Q100 170 60 130 Q40 90 60 50"
        className="sigil-line"
        variants={pathVariants}
        strokeDasharray="1000"
      />
      <motion.path
        d="M100 60 L120 100 L100 140 L80 100 Z"
        className="sigil-line"
        variants={pathVariants}
        strokeDasharray="1000"
      />
      <motion.circle
        cx="100"
        cy="100"
        r="8"
        className="sigil-line"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default CyberSigil;
