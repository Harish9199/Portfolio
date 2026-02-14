import { Education, Achievement } from "@/types";

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "University",
    location: "India",
    startDate: "2021",
    endDate: "2025",
    gpa: "8.58 / 10",
    highlights: [
      "Specialization in Artificial Intelligence and Machine Learning",
      "Consistent academic performance with 8.58 CGPA",
      "Active participant in technical clubs and hackathons",
      "Completed multiple certifications in AI/ML and cloud computing",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Academic Excellence",
    description: "Maintained 8.58 CGPA throughout undergraduate studies",
    icon: "GraduationCap",
    year: "2021-2025",
  },
  {
    id: "ach-2",
    title: "ML Model Accuracy",
    description: "Achieved 85%+ accuracy in crop disease detection using CNN",
    icon: "Brain",
    year: "2024",
  },
{
    id: "ach-4",
    title: "Hackathon Participant",
    description: "Participated in national-level coding competitions and hackathons",
    icon: "Trophy",
    year: "2023-2024",
  },
];
