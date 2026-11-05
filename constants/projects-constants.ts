import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";

// `repo` is empty on purpose: add the real GitHub URL when it exists and the
// button turns into a link. `image` is empty until you have a real screenshot;
// the panel then draws the architecture diagram instead. Nothing here is
// invented: every bullet comes from the project brief.
export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "SANTAID",
    category: "AI-Powered Health Insurance Assistant",
    description:
      "An intelligent health insurance platform leveraging Generative AI to simplify insurance processes.",
    subDescription: [
      "RAG-based conversational assistant.",
      "Mistral LLM integration.",
      "Knowledge Graphs for fraud investigation.",
      "Intelligent document understanding.",
      "Healthcare reimbursement assistance.",
      "Investigation copilot.",
    ],
    repo: "",
    image: "",
    architecture: [
      "Insurance documents",
      "FAISS retrieval",
      "Mistral LLM",
      "Assistant + graph copilot",
    ],
    achievement: "Bronze Prize · 3rd Place, Talan SummerCamp 2026",
    accent: "from-glow/40 to-violet/10",
    tags: [
      { id: 1, name: "Python" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "Mistral AI" },
      { id: 4, name: "FAISS" },
      { id: 5, name: "SQLite" },
      { id: 6, name: "NetworkX" },
    ],
  },
  {
    id: 2,
    title: "CardioAgent-Ops",
    category: "Multi-Agent AI System",
    description:
      "An intelligent multi-agent architecture for cardiac analysis and clinical decision support.",
    subDescription: [
      "LangGraph orchestration.",
      "Specialized AI agents.",
      "Cardiology-focused RAG.",
      "Knowledge retrieval with Qdrant.",
      "Docker-based services.",
    ],
    repo: "",
    image: "",
    architecture: [
      "Clinical query",
      "LangGraph orchestrator",
      "Specialized agents",
      "Qdrant cardiology RAG",
    ],
    accent: "from-violet/40 to-royal/10",
    tags: [
      { id: 1, name: "Python" },
      { id: 2, name: "LangGraph" },
      { id: 3, name: "RAG" },
      { id: 4, name: "Qdrant" },
      { id: 5, name: "Docker" },
      { id: 6, name: "FastAPI" },
    ],
  },
  {
    id: 3,
    title: "AI Coach",
    category: "Personalized Coaching Platform",
    description:
      "An intelligent coaching platform providing personalized recommendations.",
    subDescription: [
      "Personalized recommendations driven by machine learning.",
      "Full-stack web platform with a React and Next.js front end.",
      "Flask API with SQLAlchemy models on PostgreSQL.",
    ],
    repo: "",
    image: "",
    architecture: [
      "Next.js interface",
      "Flask API",
      "ML recommendations",
      "PostgreSQL",
    ],
    accent: "from-aqua/40 to-royal/10",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Flask" },
      { id: 4, name: "SQLAlchemy" },
      { id: 5, name: "PostgreSQL" },
      { id: 6, name: "Machine Learning" },
    ],
  },
  {
    id: 4,
    title: "CV & Job Matching System",
    category: "NLP & Workflow Automation",
    description:
      "An automated CV analysis and job matching solution using NLP and workflow automation.",
    subDescription: [
      "Automated CV analysis with NLP.",
      "Job matching powered by machine learning.",
      "End-to-end workflow automation with n8n.",
    ],
    repo: "",
    image: "",
    architecture: ["CV intake", "NLP analysis", "ML matching", "n8n workflow"],
    accent: "from-lavender/40 to-glow/10",
    tags: [
      { id: 1, name: "Python" },
      { id: 2, name: "NLP" },
      { id: 3, name: "n8n" },
      { id: 4, name: "Machine Learning" },
    ],
  },
];

export const TILT_SPRING: Transition = { stiffness: 200, damping: 18 };

export const TILT_RANGE: { x: [number, number]; y: [number, number] } = {
  x: [10, -10],
  y: [-14, 14],
};

export const TRACK_SPRING: Transition = { stiffness: 60, damping: 20 };
