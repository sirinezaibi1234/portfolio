"use client";

import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp } from "@/animations/scroll-animations";
import { HERO_LOCATION, HERO_NAME } from "@/constants/hero-constants";

export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
      className="glass gradient-border p-8 md:p-10 lg:col-span-7"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">
        Who I Am
      </p>
      <h3 className="mb-4 text-2xl font-bold md:text-3xl">
        {HERO_NAME} · {HERO_LOCATION}
      </h3>
      <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
        I&apos;m a{" "}
        <span className="font-semibold text-white">
          Computer Science Engineering student at ENSIT
        </span>{" "}
        with a strong interest in Artificial Intelligence and intelligent
        systems. I like turning research ideas into software people can
        actually use.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        I enjoy building AI-powered applications, experimenting with modern
        architectures, and combining software engineering with AI research. My
        hands-on work spans{" "}
        <span className="text-white">Generative AI</span>,{" "}
        <span className="text-white">RAG</span>,{" "}
        <span className="text-white">Knowledge Graphs</span> and{" "}
        <span className="text-white">Agentic AI</span>, from a health-insurance
        assistant to a multi-agent clinical decision-support system.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#work" className="btn-primary">
          <span>See my projects</span>
          <span aria-hidden>→</span>
        </a>
        <a href="#contact" className="btn-ghost">
          <span>Get in touch</span>
        </a>
      </div>
    </motion.div>
  );
};
