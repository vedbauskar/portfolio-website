"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface FadeInOnceProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

const FadeInOnce = ({ children, delay = 0, className = "" }: FadeInOnceProps) => {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            transition={{
                duration: 3.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOnce;
