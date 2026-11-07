"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -2,
            transition: { duration: 0.2 },
          }}
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

      <section
        id="home"
        className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2"
      >
        <div>
          <p className="mb-5 font-medium tracking-wide text-primary">
            HELLO, I AM
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            BIJOY HASAN
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-2xl font-semibold text-muted sm:text-3xl"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg"
          >
            I build modern, responsive and user-friendly web applications using
            React, Next.js and modern frontend technologies. I enjoy turning
            ideas into meaningful digital experiences.
          </motion.p>

          <div className="mt-9 flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-lg bg-primary px-7 py-3.5 font-semibold text-white"
            >
              View Projects
            </motion.a>

            <a
              href="#contact"
              className="rounded-lg border border-border px-7 py-3.5 font-semibold transition hover:border-primary hover:text-primary"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex gap-6 text-sm font-medium text-muted">
            <a
              href="https://github.com/BIJOY-HASAN"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/md-bijoy-hasan-981553272"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.04 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-border bg-card shadow-2xl shadow-blue-500/10">
            <div className="absolute inset-5 rounded-2xl border border-primary/20" />

            <div className="text-center">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-primary/40 shadow-lg shadow-blue-500/20">
                <Image
                  src="/images/bijoy.jpg.jpg"
                  alt="Bijoy Hasan - Frontend Developer"
                  width={500}
                  height={500}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-6 text-xl font-semibold">Bijoy Hasan</p>
              <p className="mt-2 text-sm text-muted">Frontend Developer</p>
            </div>

            <div className="absolute -right-3 top-12 rounded-lg border border-border bg-card px-4 py-2 text-sm shadow-lg">
              React.js
            </div>

            <div className="absolute -bottom-3 left-8 rounded-lg border border-border bg-card px-4 py-2 text-sm shadow-lg">
              Next.js
            </div>
          </div>
        </motion.div>
      </section>

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
    </main>
  );
}
