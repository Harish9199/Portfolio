import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: "Code2",
    skills: [
      { name: "Golang", level: 80, color: "#00ADD8" },
      { name: "Python", level: 90, color: "#3776AB" },
      { name: "C", level: 70, color: "#A8B9CC" },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    icon: "Brain",
    skills: [
      { name: "LangChain", level: 85, color: "#1C3C3C" },
      { name: "LangGraph", level: 80, color: "#00ff88" },
      { name: "LLM Integration", level: 85, color: "#8B5CF6" },
      { name: "AI Workflow Automation", level: 80, color: "#F59E0B" },
      { name: "Prompt Engineering", level: 90, color: "#EC4899" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 80, color: "#61DAFB" },
      { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
      { name: "HTML5", level: 90, color: "#E34F26" },
      { name: "CSS3", level: 85, color: "#1572B6" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Server",
    skills: [
      { name: "FastAPI", level: 85, color: "#009688" },
      { name: "REST API Design", level: 90, color: "#FF6C37" },
      { name: "Authentication", level: 80, color: "#4CAF50" },
    ],
  },
  {
    id: "tools",
    name: "Other Tools, IDEs & Software Development",
    icon: "Wrench",
    skills: [
      { name: "Microsoft Copilot", level: 85, color: "#0078D4" },
      { name: "ClickUp", level: 80, color: "#7B68EE" },
      { name: "Git", level: 85, color: "#F05032" },
      { name: "GitHub", level: 85, color: "#e4e4e7" },
      { name: "Jira", level: 80, color: "#0052CC" },
      { name: "SDLC", level: 85, color: "#2196F3" },
      { name: "Unit Testing", level: 80, color: "#4CAF50" },
      { name: "Bug Fixing", level: 85, color: "#FF5722" },
      { name: "Microsoft Security Stack", level: 75, color: "#0078D4" },
    ],
  },
];
