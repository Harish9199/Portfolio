import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Junior Developer",
    company: "DigiBull AI",
    companyUrl: "https://digibull.ai",
    location: "Mysore, Karnataka, India",
    startDate: "Aug 2025",
    endDate: "Jan 2026",
    current: false,
    description:
      "Developed backend systems and contributed to production deployments for industrial AI applications.",
    highlights: [
      "Developed backend systems using Python, Golang, and FastAPI for real-world projects and shop-floor applications",
      "Designed RESTful APIs and database schemas for QR-based cable tracking and contributed to production deployment of AOI and CAT systems",
      "Performed manual testing for ETQ and built a validation framework to automate and improve testing efficiency",
    ],
    technologies: ["Python", "Golang", "FastAPI", "REST APIs", "PostgreSQL", "Testing"],
    color: "#00ff88",
  },
  {
    id: "exp-2",
    title: "Machine Learning Intern",
    company: "Contriver",
    location: "Mysore, Karnataka, India",
    startDate: "Jul 2024",
    endDate: "Jan 2025",
    current: false,
    description:
      "Built a strong foundation in Python and ML frameworks through hands-on development on real-world healthcare AI projects.",
    highlights: [
      "Built a strong foundation in Python and machine learning frameworks through hands-on development tasks",
      'Worked on a real-world project "Heart Attack Risk Prediction using Retinal Eye Images", applying end-to-end ML workflows',
      "Developed an understanding of real-world project lifecycles, from problem definition to model validation",
    ],
    technologies: ["Python", "Machine Learning", "Deep Learning", "OpenCV", "Scikit-learn"],
    color: "#00d4ff",
  },
];
