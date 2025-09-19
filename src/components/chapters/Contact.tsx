"use client";

import React from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import portfolioData from "@/content/portfolio.json";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact: React.FC = () => {
  const { contact, meta } = portfolioData;

  return (
    <section id="contact" className="container py-16">
      <FadeIn>
        <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
      </FadeIn>
      <div className="flex flex-col items-center space-y-6">
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Feel free to reach out to me through any of the following channels:
          </p>
        </FadeIn>
        <div className="flex flex-wrap justify-center gap-4">
          {contact.email && (
            <FadeIn delay={0.3}>
              <Button asChild>
                <Link href={`mailto:${contact.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </Link>
              </Button>
            </FadeIn>
          )}
          {contact.github && (
            <FadeIn delay={0.4}>
              <Button asChild>
                <Link
                  href={`https://github.com/${contact.github}`}
                  target="_blank"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            </FadeIn>
          )}
          {contact.linkedin && (
            <FadeIn delay={0.5}>
              <Button asChild>
                <Link
                  href={`https://www.linkedin.com/in/${contact.linkedin}`}
                  target="_blank"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </FadeIn>
          )}
          {meta.links.cv && (
            <FadeIn delay={0.6}>
              <Button asChild>
                <Link href={meta.links.cv} target="_blank">
                  Download CV
                </Link>
              </Button>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
};
