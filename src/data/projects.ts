import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "cardiopredict",
    title: "CardioPredict",
    tagline: "CNN-based heart attack risk prediction from retinal eye images",
    description:
      "A heart attack risk prediction system using CNNs on retinal images with 85%+ accuracy, featuring a Flask web app for real-time image upload and instant health risk analysis.",
    longDescription:
      "Built a heart attack risk prediction system using Convolutional Neural Networks on retinal eye images. The system analyzes retinal scans to identify cardiovascular risk markers, delivering predictions with over 85% accuracy. Includes a Flask web application for real-time image upload and instant health risk analysis.",
    problem:
      "Early detection of heart attack risk is critical but often requires expensive and invasive medical procedures. Retinal imaging offers a non-invasive alternative, but manual analysis is impractical at scale.",
    solution:
      "Built a CNN-based classification model trained on retinal eye images to predict heart attack risk. Developed a Flask web app enabling real-time image upload and instant health risk assessment.",
    impact:
      "Achieved 85%+ accuracy in risk prediction and over 80% precision in identifying high-risk patients, enabling non-invasive early screening.",
    technologies: ["Python", "Flask", "Pandas", "CNNs", "TensorFlow/Keras", "OpenCV", "NumPy"],
    metrics: [
      { label: "Accuracy", value: "85%+" },
      { label: "Precision", value: "80%+" },
      { label: "Analysis", value: "Real-time" },
    ],
    links: [{ type: "github", url: "https://github.com/Harish919901", label: "Source Code" }],
    featured: true,
    category: "AI/ML",
  },
  {
    id: "proj-2",
    slug: "aoi-inspection-system",
    title: "AOI - Automated Optical Inspection System",
    tagline: "AI-powered wire interchange defect detection for shop-floor",
    description:
      "An AI-based system to detect wire interchange defects in cable assemblies on the shop-floor, with computer vision models and FastAPI backend containerized using Docker for production deployment.",
    longDescription:
      "Developed an AI-based Automated Optical Inspection system to detect wire interchange defects in cable assemblies on the shop-floor. Implemented computer vision models and FastAPI backend services, containerized using Docker for production deployment. Deployed in a live cable assembly environment to reduce manual inspection effort and improve defect detection accuracy.",
    problem:
      "Manual inspection of cable assemblies for wire interchange defects is slow, error-prone, and doesn't scale for shop-floor production lines.",
    solution:
      "Developed a computer vision-based inspection system with FastAPI backend services, containerized with Docker for seamless production deployment on the shop-floor.",
    impact:
      "Deployed in a live cable assembly environment, reducing manual inspection effort and significantly improving defect detection accuracy.",
    technologies: ["Python", "Machine Learning", "Computer Vision", "FastAPI", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Environment", value: "Production" },
      { label: "Deployment", value: "Docker" },
      { label: "Inspection", value: "Real-time" },
    ],
    links: [{ type: "github", url: "https://github.com/Harish919901", label: "Source Code" }],
    featured: true,
    category: "AI/ML",
  },
  {
    id: "proj-3",
    slug: "cats-cable-traceability",
    title: "CATS - Cable Assembly Traceability System",
    tagline: "QR code-based production traceability across assembly stages",
    description:
      "A QR code-based traceability system to track cable assemblies across production stages, with RESTful APIs enabling real-time status updates, deployed on shop-floor assembly lines.",
    longDescription:
      "Designed and developed a QR code-based traceability system to track cable assemblies across production stages. Architected RESTful APIs and database schemas enabling real-time status updates and optimized query performance. Deployed on shop-floor assembly lines to improve traceability and production visibility.",
    problem:
      "Cable assembly production lacks real-time visibility across stages, making it difficult to trace components, track progress, and ensure quality across the production line.",
    solution:
      "Built a QR code-based traceability system with RESTful APIs and optimized database schemas for real-time status tracking across all production stages.",
    impact:
      "Deployed on shop-floor assembly lines, improving traceability and production visibility across the entire manufacturing process.",
    technologies: ["Python", "Golang", "FastAPI", "PostgreSQL", "REST APIs"],
    metrics: [
      { label: "Tracking", value: "Real-time" },
      { label: "Deployed", value: "Shop-floor" },
      { label: "Queries", value: "Optimized" },
    ],
    links: [{ type: "github", url: "https://github.com/Harish919901", label: "Source Code" }],
    featured: true,
    category: "Full-Stack",
  },
  {
    id: "proj-4",
    slug: "validation-framework",
    title: "Validation Framework - Test Automation Utility",
    tagline: "Reusable validation framework for automated data & process testing",
    description:
      "A reusable validation framework to automate data and process validation across applications, reducing manual testing efforts and improving reliability.",
    longDescription:
      "Developed a reusable validation framework to automate data and process validation across applications. Reduced manual validation efforts by standardizing checks and improving testing efficiency. Used during project testing phases to support faster and more reliable validation workflows.",
    problem:
      "Manual validation of data and processes across multiple applications is repetitive, error-prone, and slows down project testing phases.",
    solution:
      "Built a reusable validation framework that standardizes checks and automates validation across applications, integrating with existing testing workflows.",
    impact:
      "Reduced manual validation efforts significantly, enabling faster and more reliable testing across project phases.",
    technologies: ["Python", "Golang", "React", "Automation", "REST APIs"],
    metrics: [
      { label: "Testing", value: "Automated" },
      { label: "Scope", value: "Cross-app" },
      { label: "Effort", value: "Reduced" },
    ],
    links: [{ type: "github", url: "https://github.com/Harish919901", label: "Source Code" }],
    featured: true,
    category: "Full-Stack",
  },
];
