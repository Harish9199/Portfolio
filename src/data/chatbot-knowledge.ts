import { ChatPattern } from "@/types";

export const chatPatterns: ChatPattern[] = [
  {
    keywords: ["hello", "hi", "hey", "greetings", "sup"],
    response: "Hey there! I'm Harish's portfolio assistant. I can tell you about his skills, projects, experience, education, or how to get in touch. What would you like to know?",
    category: "greeting",
  },
  {
    keywords: ["skill", "tech", "stack", "language", "framework", "tool"],
    response: "Harish is skilled in: Python, Golang, JavaScript/TypeScript for languages; FastAPI, Django, React, Next.js for frameworks; TensorFlow, PyTorch, Scikit-learn for AI/ML; and Docker, AWS, PostgreSQL, MongoDB for tools & infrastructure. His strongest areas are AI/ML and backend development.",
    category: "skills",
  },
  {
    keywords: ["project", "work", "built", "portfolio", "app"],
    response: "Harish has built some impressive projects:\n\n1. CardioPredict — Heart attack risk prediction from retinal eye images using CNNs (85%+ accuracy)\n2. AOI System — Automated Optical Inspection for wire defect detection, deployed in production with Docker\n3. CATS — QR code-based Cable Assembly Traceability System deployed on shop-floor lines\n4. Validation Framework — Test automation utility for cross-app data & process validation\n\nWant details on any specific project?",
    category: "projects",
  },
  {
    keywords: ["experience", "intern", "job", "career", "work history"],
    response: "Harish has worked as a Junior Developer at DigiBull AI building backend systems with Python, Golang, and FastAPI for shop-floor applications, and as a Machine Learning Intern at Contriver working on Heart Attack Risk Prediction using Retinal Eye Images. Check the Experience section for full details!",
    category: "experience",
  },
  {
    keywords: ["education", "degree", "college", "university", "gpa", "cgpa"],
    response: "Harish is pursuing a B.E. in Computer Science & Engineering with a CGPA of 8.58/10, specializing in AI and Machine Learning. He's been an active participant in technical clubs and hackathons throughout his studies.",
    category: "education",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "connect", "message"],
    response: "You can reach Harish at:\n\nEmail: thorathharish3@gmail.com\nLinkedIn: linkedin.com/in/harish-shankar-thorath-7b776722a\nGitHub: github.com/Harish919901\n\nOr use the contact form in the Contact section below!",
    category: "contact",
  },
  {
    keywords: ["ai", "ml", "machine learning", "deep learning", "artificial intelligence"],
    response: "Harish has strong AI/ML expertise including:\n\n- Deep Learning: TensorFlow, PyTorch, CNNs\n- NLP: Text analysis, sentiment detection\n- Computer Vision: Image classification, OpenCV\n- Data Science: Pandas, NumPy, Scikit-learn\n\nHis crop disease detection project achieved 85%+ accuracy using CNNs!",
    category: "ai-ml",
  },
  {
    keywords: ["python", "golang", "go", "backend", "api", "fastapi"],
    response: "Harish excels in backend development:\n\nPython: FastAPI, Django, Flask — his primary language\nGolang: Building high-performance services\nAPIs: RESTful design, WebSockets, authentication\nDatabases: PostgreSQL, MongoDB, SQLite\n\nHe loves building scalable, efficient backend systems!",
    category: "backend",
  },
  {
    keywords: ["resume", "cv", "download", "pdf"],
    response: "You can download Harish's resume from the Resume section of this portfolio, or click the download button in the navigation.",
    category: "resume",
  },
  {
    keywords: ["who", "about", "tell me", "yourself", "harish"],
    response: "Harish Shankar Thorath is a passionate AI/ML Engineer & Full-Stack Developer from India. He specializes in building intelligent systems using Python, TensorFlow, and modern web technologies. With a CGPA of 8.58, he combines strong academics with hands-on project experience.",
    category: "about",
  },
];

export const defaultResponse = "I'm not sure about that one! I can help with information about Harish's skills, projects, experience, education, or contact details. What would you like to know?";
