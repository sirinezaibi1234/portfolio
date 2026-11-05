"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";
import { SectionHeader } from "@/components/ui/section-header";
import {
  ACHIEVEMENTS,
  EDUCATION,
  LEADERSHIP,
} from "@/constants/background-constants";
import { type BackgroundItem } from "@/types/portfolio-types";

const COLUMNS: { title: string; items: BackgroundItem[]; delay: number }[] = [
  { title: "Education", items: EDUCATION, delay: 0 },
  { title: "Achievements", items: ACHIEVEMENTS, delay: 0.08 },
  { title: "Leadership", items: LEADERSHIP, delay: 0.16 },
];

export const Background: FC = () => (
  <section
    id="background"
    className="c-space section-spacing relative overflow-hidden !min-h-0"
  >
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-violet/15 blur-[140px]" />
    </div>

    <SectionHeader
      eyebrow="Background"
      title={
        <>
          Education, achievements{" "}
          <span className="text-gradient">&amp; leadership.</span>
        </>
      }
    />

    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {COLUMNS.map((column) => (
        <motion.div
          key={column.title}
          {...revealProps(column.delay)}
          className="glass gradient-border p-7"
        >
          <h3 className="text-eyebrow mb-6">{column.title}</h3>
          <ul className="space-y-5">
            {column.items.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-glow to-lavender" />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-neutral-400">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);
