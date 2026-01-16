"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeButtons() {
    const { setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors">
                    <Sun className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors">
                    <Moon className="h-4 w-4" />
                </button>
            </div>
        );
    }

    return (
        <div className="flex gap-2">
            <button
                onClick={() => setTheme("light")}
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                aria-label="Light mode"
            >
                <Sun className="h-4 w-4 text-foreground" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                aria-label="Dark mode"
            >
                <Moon className="h-4 w-4 text-foreground" />
            </button>
        </div>
    );
}
