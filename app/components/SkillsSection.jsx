
"use client";

import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "API & Database",
    skills: ["REST API", "Axios", "JSON", "MongoDB"],
  },
  {
    title: "State Management",
    skills: ["Context API", "Redux"],
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 font-semibold tracking-widest text-primary">
          MY EXPERTISE
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <h3 className="mb-6 text-xl font-semibold">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted transition hover:border-primary hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
