import { HERO_LOCATION, HERO_NAME, HERO_ROLE } from "./hero-constants";
import { CONTACT_EMAIL, MY_SOCIALS } from "./social-constants";

// TODO: set NEXT_PUBLIC_SITE_URL to your real domain once deployed.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sirinezaibi.dev"
).replace(/\/$/, "");

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = `${HERO_NAME} | AI Engineer`;

export const SITE_TITLE = `${HERO_NAME} | ${HERO_ROLE}`;

export const SITE_DESCRIPTION =
  "Computer science engineering student at ENSIT building Generative AI, RAG and agentic systems. Open to a 5–6 month PFE internship from January 2027.";

export const SITE_TAGLINE =
  "Intelligent systems and practical AI applications: LLMs, RAG and multi-agent AI.";

export const OG_IMAGE = "/og.jpg";
export const OG_IMAGE_ALT = `${HERO_NAME}, ${HERO_ROLE} portfolio`;
export const OG_LOCALE = "en_US";

export const OG_IMAGES = [
  {
    url: OG_IMAGE,
    width: 1200,
    height: 630,
    alt: OG_IMAGE_ALT,
  },
];

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const SITE_KEYWORDS = [
  HERO_NAME,
  "AI Engineer",
  "Generative AI",
  "Agentic AI",
  "LLM",
  "RAG",
  "LangGraph",
  "LangChain",
  "Knowledge Graphs",
  "NLP",
  "Machine Learning",
  "ENSIT",
  "PFE 2027",
  "AI internship",
  HERO_LOCATION,
];

export const HOME_TITLE = `${HERO_NAME} | AI Engineer · Generative AI & Agentic AI`;

export const HOME_DESCRIPTION =
  "AI engineering student at ENSIT, Tunisia. I build RAG assistants, knowledge-graph tools and multi-agent systems. Looking for a PFE internship from January 2027.";

export const SITE_SECTIONS = [
  {
    name: "Home",
    hash: "#home",
    description: `${HERO_NAME}, ${HERO_ROLE}.`,
  },
  {
    name: "About",
    hash: "#about",
    description: `Background and technical stack of ${HERO_NAME}, a computer science engineering student at ENSIT specializing in AI.`,
  },
  {
    name: "Work",
    hash: "#work",
    description:
      "AI projects: SANTAID, CardioAgent-Ops, AI Coach and a CV & job matching system.",
  },
  {
    name: "Experience",
    hash: "#experience",
    description: "AI engineering internship at Talan Tunisia and software development internship at Code & Craft.",
  },
  {
    name: "Background",
    hash: "#background",
    description: "Education, achievements and student leadership.",
  },
  {
    name: "Contact",
    hash: "#contact",
    description: `Get in touch with ${HERO_NAME} about PFE internship opportunities.`,
  },
] as const;

export const SOCIAL_PROFILES = MY_SOCIALS.map((social) => social.href);

export const CONTACT_POINT_EMAIL = CONTACT_EMAIL;
