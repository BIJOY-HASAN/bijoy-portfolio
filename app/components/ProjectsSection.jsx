"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "FaceHook",
    category: "React.js",
    description: "A React.js project showcasing modern frontend development.",
    live: "https://vercel.com/bijoy275s-projects/facehook",
    github: "https://github.com/BIJOY-HASAN/Facehook",
    technologies: ["React.js"],
  },
  {
    title: "Cine-Rental",
    category: "React.js",
    description: "A movie rental web application built with React.js.",
    live: "https://cine-rental-neon.vercel.app/",
    github: "https://github.com/BIJOY-HASAN/cine-rental",
    technologies: ["React.js"],
  },
  {
    title: "Docucraft",
    category: "Next.js",
    description: "A modern web application built with Next.js.",
    live: "https://docucraft-jet.vercel.app/",
    github: "https://github.com/BIJOY-HASAN/docucraft",
    technologies: ["Next.js"],
  },
  {
    title: "Ecovista",
    category: "Next.js",
    description: "A modern web project built with Next.js.",
    live: "https://ecovista-beryl.vercel.app/",
    github: "https://github.com/BIJOY-HASAN/Ecovista",
    technologies: ["Next.js"],
  },
  {
    title: "PhotoFeed",
    category: "Next.js",
    description: "A photo feed web application built with Next.js.",
    live: "https://photofeed-vk8d.vercel.app/en",
    github: "https://github.com/BIJOY-HASAN/Photofeed",
    technologies: ["Next.js"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            My Portfolio
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Here are some projects I have built using React.js and Next.js.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -7 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {project.category}
                </span>

                <span className="text-sm text-muted">0{index + 1}</span>
              </div>

              <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                {project.title}
              </h3>

              <p className="mt-3 min-h-16 text-sm leading-7 text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-primary-hover"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg border border-border px-4 py-2.5 text-center text-sm font-semibold transition hover:border-primary hover:text-primary"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
