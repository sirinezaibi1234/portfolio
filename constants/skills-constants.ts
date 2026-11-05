import { type SkillGroup } from "@/types/portfolio-types";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Generative AI",
    accent: "from-glow/40 to-violet/20",
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Prompt Engineering",
      "Fine-tuning",
      "Knowledge Graphs",
      "FAISS",
    ],
  },
  {
    title: "AI & Machine Learning",
    accent: "from-violet/40 to-royal/20",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "YOLO",
    ],
  },
  {
    title: "Programming",
    accent: "from-aqua/40 to-royal/20",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "PHP", "C"],
  },
  {
    title: "Backend & Frontend",
    accent: "from-lavender/40 to-glow/20",
    skills: [
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "React",
      "Angular",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    accent: "from-royal/40 to-aqua/20",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Qdrant"],
  },
  {
    title: "Tools",
    accent: "from-violet/40 to-glow/20",
    skills: ["Docker", "Git", "GitHub", "Linux", "n8n"],
  },
];

/** Flat list for the marquee and structured data. */
export const SKILL_CHIPS = SKILL_GROUPS.flatMap((group) => group.skills);
