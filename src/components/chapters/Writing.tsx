"use client";

import React from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import portfolioData from "@/content/portfolio.json";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Writing: React.FC = () => {
  const { writing } = portfolioData;

  return (
    <section id="writing" className="container py-16">
      <FadeIn>
        <h2 className="text-4xl font-bold mb-12 text-center">Writing</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {writing.map((article, index) => (
          <FadeIn key={index} delay={0.2 + index * 0.1}>
            <div className="bg-card p-6 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {article.title}
              </h3>
              {article.url && (
                <Button asChild variant="secondary" size="sm" className="mt-auto">
                  <Link href={article.url} target="_blank">
                    Read Article
                  </Link>
                </Button>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
