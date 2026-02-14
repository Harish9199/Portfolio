import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90, color: "#3776AB" },
      { name: "Golang", level: 75, color: "#00ADD8" },
      { name: "JavaScript", level: 80, color: "#F7DF1E" },
      { name: "TypeScript", level: 75, color: "#3178C6" },
      { name: "SQL", level: 80, color: "#336791" },
      { name: "C/C++", level: 65, color: "#00599C" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React", level: 80, color: "#61DAFB" },
      { name: "Next.js", level: 75, color: "#e4e4e7" },
      { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
      { name: "HTML/CSS", level: 90, color: "#E34F26" },
      { name: "Framer Motion", level: 70, color: "#0055FF" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Server",
    skills: [
      { name: "FastAPI", level: 85, color: "#009688" },
      { name: "Django", level: 75, color: "#092E20" },
      { name: "Flask", level: 80, color: "#e4e4e7" },
      { name: "Node.js", level: 70, color: "#339933" },
      { name: "REST APIs", level: 90, color: "#FF6C37" },
      { name: "GraphQL", level: 60, color: "#E10098" },
    ],
  },
  {
    id: "ai-ml",
    name: "AI / ML",
    icon: "Brain",
    skills: [
      { name: "TensorFlow", level: 80, color: "#FF6F00" },
      { name: "PyTorch", level: 75, color: "#EE4C2C" },
      { name: "Scikit-learn", level: 85, color: "#F7931E" },
      { name: "NLP", level: 75, color: "#00ff88" },
      { name: "Computer Vision", level: 70, color: "#00d4ff" },
      { name: "Pandas/NumPy", level: 90, color: "#150458" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Cloud",
    icon: "Wrench",
    skills: [
      { name: "Git/GitHub", level: 85, color: "#F05032" },
      { name: "Docker", level: 75, color: "#2496ED" },
      { name: "AWS", level: 65, color: "#FF9900" },
      { name: "PostgreSQL", level: 80, color: "#336791" },
      { name: "MongoDB", level: 75, color: "#47A248" },
      { name: "Linux", level: 80, color: "#FCC624" },
    ],
  },
];
