"use client";

import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 font-semibold tracking-widest text-primary">
          GET TO KNOW ME
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          About <span className="text-primary">Me</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted">
          A little introduction about who I am and what I do.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="mb-5 text-2xl font-semibold">Who I Am</h3>

          <p className="leading-8 text-muted">
            Hello! I am Bijoy Hasan, a Frontend Developer passionate about
            building modern, responsive and user-friendly web applications. I
            enjoy creating clean user interfaces, reusable components and
            meaningful digital experiences using modern frontend technologies.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="mb-5 text-2xl font-semibold">What I Do</h3>

          <ul className="space-y-4 text-muted">
            <li>✓ Responsive Website Development</li>
            <li>✓ React.js & Next.js Development</li>
            <li>✓ Modern UI Development with Tailwind CSS</li>
            <li>✓ REST API Integration</li>
            <li>✓ Reusable Component Development</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
