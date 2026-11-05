import { type HTMLAttributes } from "react";

export interface ProjectTag {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  subDescription: string[];
  /** Repository URL. Leave "" until it exists; the UI then shows a disabled state. */
  repo: string;
  /** Optional real screenshot in /public/projects. Leave "" to show the architecture diagram. */
  image: string;
  /** Short, factual pipeline shown as a diagram when there is no screenshot. */
  architecture: string[];
  achievement?: string;
  tags: ProjectTag[];
  accent: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Experience {
  title: string;
  job: string;
  date: string;
  contents: string[];
  badge?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
  accent: string;
}

export interface BackgroundItem {
  title: string;
  detail: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProjectDetailsProps extends Project {
  closeModal: () => void;
}

export interface AlertProps {
  type: "success" | "danger";
  text: string;
}

export interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export interface ParticlesProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

export interface TimelineProps {
  data: Experience[];
}

export interface AstronautProps {
  scale?: number;
  position?: [number, number, number];
}

export interface ThemedGlobeProps {
  className?: string;
}
