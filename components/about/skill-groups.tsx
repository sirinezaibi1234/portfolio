"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";
import { SKILL_GROUPS } from "@/constants/skills-constants";

export const SkillGroups: FC = () => (
  <div className="mt-16">
    <motion.p {...revealProps()} className="text-eyebrow mb-6">
      Technical Stack
    </motion.p>
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {SKILL_GROUPS.map((group, index) => (
        <motion.li
          key={group.title}
          {...revealProps(index * 0.06)}
          className="glass gradient-border p-6"
        >
          <div
            aria-hidden
            className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br opacity-40 blur-2xl ${group.accent}`}
          />
          <h3 className="relative text-lg font-semibold text-white">
            {group.title}
          </h3>
          <ul className="relative mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ul>
  </div>
);
