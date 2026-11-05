"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";
import { CONTACT_TITLE } from "@/constants/contact-constants";
import { HERO_AVAILABILITY } from "@/constants/hero-constants";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/constants/social-constants";
import { ContactInfoCard } from "./contact-info-card";

export const ContactDetails: FC = () => (
  <motion.div {...revealProps()} className="lg:col-span-5">
    <p className="text-eyebrow">Contact</p>
    <h2 className="text-heading mt-3">
      <span className="text-gradient">{CONTACT_TITLE}</span>
    </h2>
    <p className="mt-4 leading-relaxed text-neutral-400">
      I&apos;m looking for a 5–6 month final-year engineering internship
      starting in January 2027. If you are working on Generative AI, RAG or
      agentic systems, I&apos;d love to hear about it.
    </p>

    <div className="mt-8 space-y-4">
      <ContactInfoCard
        icon="✉"
        label="Email"
        value={CONTACT_EMAIL}
        href={`mailto:${CONTACT_EMAIL}`}
        gradient="from-glow/30 to-lavender/30"
      />
      <ContactInfoCard
        icon="in"
        label="LinkedIn"
        value={LINKEDIN_URL.replace(/^https?:\/\/(www\.)?/, "")}
        href={LINKEDIN_URL}
        gradient="from-aqua/30 to-royal/30"
      />
      <ContactInfoCard
        icon="⌥"
        label="GitHub"
        value={GITHUB_URL.replace(/^https?:\/\/(www\.)?/, "")}
        href={GITHUB_URL}
        gradient="from-royal/30 to-violet/30"
      />
      <ContactInfoCard
        icon="◉"
        label="Availability"
        value={HERO_AVAILABILITY}
        gradient="from-mint/30 to-aqua/30"
      />
    </div>
  </motion.div>
);
