"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  className,
}) => {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};