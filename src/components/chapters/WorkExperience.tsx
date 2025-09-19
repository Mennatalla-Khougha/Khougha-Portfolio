"use client";

import React from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import portfolioData from "@/content/portfolio.json";

export const WorkExperience: React.FC = () => {
  const { work } = portfolioData;

  return (
    <section id="work" className="container py-16">
      <FadeIn>
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
      </FadeIn>
      <div className="space-y-12">
        {work.map((job, index) => (
          <FadeIn key={index} delay={0.2 + index * 0.1}>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {job.role} at {job.company}
              </h3>
              <p className="text-muted-foreground mb-4">
                {job.period} | {job.location}
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                {job.impact.map((item, idx) => (
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
