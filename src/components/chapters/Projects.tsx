"use client";

import React from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import portfolioData from "@/content/portfolio.json";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="container py-16">
      <FadeIn>
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={0.2 + index * 0.1}>
            <div className="bg-card p-6 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.role} | {project.stack.join(", ")}
              </p>
              <p className="text-foreground mb-4 flex-grow">
                {project.summary}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
                {project.impact.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.links && project.links.article && (
                  <Button asChild variant="secondary" size="sm">
                    <Link href={project.links.article} target="_blank">
                      Article
                    </Link>
                  </Button>
                )}
                {project.links && project.links.post && (
                  <Button asChild variant="secondary" size="sm">
                    <Link href={project.links.post} target="_blank">
                      Post
                    </Link>
                  </Button>
                )}
                {/* Add more links as needed */}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
