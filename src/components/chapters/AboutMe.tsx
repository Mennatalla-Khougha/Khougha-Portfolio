"use client";

import React from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import portfolioData from "@/content/portfolio.json";

export const AboutMe: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="container py-16">
      <FadeIn>
        <h2 className="text-4xl font-bold mb-6 text-center">
          {about.tagline}
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          {about.summary}
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {about.highlights.map((highlight, index) => (
          <FadeIn key={index} delay={0.3 + index * 0.1}>
            <div className="bg-card p-4 rounded-lg shadow-md text-center">
              <p className="text-primary font-semibold">{highlight}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
