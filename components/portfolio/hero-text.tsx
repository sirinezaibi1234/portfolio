"use client";

import { type CSSProperties, type FC } from "react";
import { FlipWords } from "@/components/portfolio/flip-words";
import {
  FLIP_WORDS,
  FLIP_WORDS_PREFIX,
  HERO_AVAILABILITY,
  HERO_GREETING,
  HERO_INTRO,
  HERO_ROLE,
  MY_SOCIALS,
} from "@/constants/portfolio-constants";

const delay = (seconds: number): CSSProperties => ({
  animationDelay: `calc(var(--intro-delay) + ${seconds}s)`,
});

export const HeroText: FC = () => (
  <div className="c-space z-10 mt-24 flex max-w-3xl flex-col items-center text-center md:mt-32 md:items-start md:text-left">
    <div
      className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md"
      style={delay(0.05)}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-mint opacity-75" />
        <span className="relative h-2 w-2 rounded-full bg-mint" />
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300 md:text-xs md:tracking-[0.25em]">
        {HERO_AVAILABILITY}
      </span>
    </div>

    <h1
      className="reveal text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
      style={delay(0.12)}
    >
      {HERO_GREETING}
    </h1>

    <p
      className="reveal text-gradient mt-3 text-xl font-semibold md:text-3xl"
      style={delay(0.19)}
    >
      {HERO_ROLE}
    </p>

    <div
      className="reveal mt-2 flex flex-wrap items-baseline justify-center gap-x-3 md:justify-start"
      style={delay(0.26)}
    >
      <span className="text-xl font-light text-neutral-400 md:text-3xl">
        {FLIP_WORDS_PREFIX}
      </span>
      <FlipWords
        words={[...FLIP_WORDS]}
        className="text-2xl font-bold text-white md:text-4xl"
      />
    </div>

    <p
      className="reveal mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg"
      style={delay(0.33)}
    >
      {HERO_INTRO}
    </p>

    <div
      className="reveal mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
      style={delay(0.4)}
    >
      <a href="#work" className="btn-primary">
        <span>Explore My Work</span>
        <span aria-hidden>→</span>
      </a>
      <a href="#contact" className="btn-ghost">
        <span>Contact Me</span>
      </a>
    </div>

    <div className="reveal mt-6 flex gap-3" style={delay(0.47)}>
      {MY_SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-colors hover:border-white/30 hover:bg-white/[0.1]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={social.icon} alt="" className="h-4 w-4" />
        </a>
      ))}
    </div>
  </div>
);
