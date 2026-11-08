"use client";

import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -2 }}
        className="text-2xl font-bold tracking-tight"
      >
        BIJOY<span className="text-primary">.</span>
      </motion.a>

      <div className="hidden items-center gap-8 text-sm text-muted md:flex">
        <a href="#home" className="transition hover:text-primary">
          Home
        </a>
        <a href="#about" className="transition hover:text-primary">
          About
        </a>
        <a href="#skills" className="transition hover:text-primary">
          Skills
        </a>
        <a href="#projects" className="transition hover:text-primary">
          Projects
        </a>
        <a href="#contact" className="transition hover:text-primary">
          Contact
        </a>
      </div>

      <a
        href="#contact"
        className="rounded-lg border border-primary px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
      >
        Let's Talk
      </a>
    </nav>
  );
}
