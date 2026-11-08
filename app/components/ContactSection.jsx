"use client";

import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-card p-8 text-center sm:p-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's Work <span className="text-primary">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
            I'm always interested in learning, building meaningful projects, and
            connecting with developers. Feel free to reach out!
          </p>

          <a
            href="mailto:bijoyhasan.dev@gmail.com"
            className="mt-8 inline-flex rounded-lg bg-primary px-7 py-3 font-semibold text-white transition hover:bg-primary-hover"
          >
            Say Hello ↗
          </a>

          <div className="mt-10 border-t border-border pt-8">
            <p className="mb-5 text-sm text-muted">Find me on</p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/BIJOY-HASAN"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-5 py-2.5 text-sm transition hover:border-primary hover:text-primary"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/md-bijoy-hasan-981553272"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-5 py-2.5 text-sm transition hover:border-primary hover:text-primary"
              >
                LinkedIn ↗
              </a>
            </div>

            <p className="mt-7 text-sm text-muted">bijoyhasan.dev@gmail.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
