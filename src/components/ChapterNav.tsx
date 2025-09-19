"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChapterNavProps {
  chapters: { title: string; anchor: string }[];
  className?: string;
}

export const ChapterNav: React.FC<ChapterNavProps> = ({
  chapters,
  className,
}) => {
  const [activeChapter, setActiveChapter] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = "";
      for (const chapter of chapters) {
        const element = document.getElementById(chapter.anchor);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { // Adjust 100 for desired offset
            currentActive = chapter.anchor;
            break;
          }
        }
      }
      setActiveChapter(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [chapters]);

  return (
    <motion.nav
      className={cn(
        "sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm py-2 shadow-sm",
        className
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <ul className="container flex justify-center space-x-4">
        {chapters.map((chapter) => (
          <li key={chapter.anchor}>
            <a
              href={`#${chapter.anchor}`}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                activeChapter === chapter.anchor
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {chapter.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
