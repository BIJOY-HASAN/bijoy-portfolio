"use client";

import { motion } from "motion/react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#060912] px-6">
      <div className="mx-auto max-w-7xl py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tight">
              BIJOY<span className="text-primary">.</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Frontend Developer passionate about building modern, responsive,
              and user-friendly web applications.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <div className="flex flex-col items-start gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted transition hover:translate-x-1 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Connect With Me
            </h3>

            <div className="flex flex-col items-start gap-3">
              <a
                href="https://github.com/BIJOY-HASAN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition hover:text-primary"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/md-bijoy-hasan-981553272"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition hover:text-primary"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:bijoyhasan.dev@gmail.com"
                className="text-sm text-muted transition hover:text-primary"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 text-center sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Bijoy Hasan. All rights reserved.
          </p>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="text-sm font-medium text-muted transition hover:text-primary"
          >
            Back to Top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
