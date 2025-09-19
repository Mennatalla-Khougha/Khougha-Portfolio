"use client";

import { motion } from "framer-motion";
import React from "react";

interface BookShellProps {
  children: React.ReactNode;
}

export const BookShell: React.FC<BookShellProps> = ({ children }) => {
  return (
    <motion.div
      className="min-h-screen bg-background text-foreground overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
