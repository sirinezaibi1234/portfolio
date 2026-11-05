"use client";

import { useEffect, type FC } from "react";
import { motion } from "motion/react";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { RepoLink } from "@/components/projects/repo-link";
import { type ProjectDetailsProps } from "@/types/portfolio-types";

export const ProjectDetails: FC<ProjectDetailsProps> = ({
  title,
  category,
  description,
  subDescription,
  tags,
  repo,
  architecture,
  achievement,
  closeModal,
}) => {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-md"
      onClick={closeModal}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${title} case study`}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/close.svg" className="h-5 w-5" alt="" />
        </button>
        <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-storm to-indigo">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(122,87,219,0.4),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.25),transparent_55%)]" />
          <ArchitectureDiagram steps={architecture} label={title} />
        </div>
        <div className="p-6 md:p-8">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-400">
            {category}
          </p>
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
            {title}
          </h2>
          {achievement && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-glow/30 bg-glow/10 px-3 py-1 text-xs text-glow">
              <span aria-hidden>★</span>
              {achievement}
            </p>
          )}
          <p className="mb-5 text-neutral-400">{description}</p>
          <ul className="mb-6 space-y-3">
            {subDescription.map((subDesc) => (
              <li key={subDesc} className="flex gap-3 text-sm text-neutral-300">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-glow to-lavender" />
                <span>{subDesc}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <RepoLink repo={repo} className="!px-4 !py-2 !text-sm" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
