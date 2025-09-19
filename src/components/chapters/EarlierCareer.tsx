"use client";

import React from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import portfolioData from "@/content/portfolio.json";

export const EarlierCareer: React.FC = () => {
  const { earlierCareer } = portfolioData;

  return (
    <section id="earlier-career" className="container py-16">
      <FadeIn>
        <h2 className="text-4xl font-bold mb-12 text-center">Earlier Career</h2>
      </FadeIn>
      <div className="space-y-12">
        {earlierCareer.map((career, index) => (
          <FadeIn key={index} delay={0.2 + index * 0.1}>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {career.title}
              </h3>
              <p className="text-muted-foreground mb-4">{career.period}</p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                {career.impact.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
