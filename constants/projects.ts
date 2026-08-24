import type { ProjectItem } from "@/types/project";

export const projects: ProjectItem[] = [
  {
    id: "motobuket",
    title: "MotoBuket — Smart Car Service Mobile Application",
    category: "Flutter Mobile Application",
    description:
      "A smart car service application that allows users to discover services, find vendors, manage vehicles, and request vehicle maintenance services.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Firebase",
      "Dio",
      "Provider",
      "Google Maps",
      "Git",
      "Postman",
    ],
    features: [
      "User Authentication",
      "Service Categories",
      "Vendor Search",
      "Location Based Services",
      "Vehicle Management",
      "REST API Integration",
      "Responsive UI",
      "Service Booking Workflow",
    ],
    challenges: [
      "API integration and authentication handling",
      "Vendor filtering and search logic",
      "State management",
      "Location-based services",
      "Production UI development",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: true,
    imageAlt: "MotoBuket smart car service mobile application",
  },

  {
    id: "expense-tracker",
    title: "Expense Tracker App",
    category: "Flutter App",
    description:
      "A personal finance application that helps users track expenses, organize spending, and manage their budget.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "SQLite",
    ],
    features: [
      "Expense Logging",
      "Category Insights",
      "Local Storage",
      "Budget Tracking",
      "Clean Dashboard",
    ],
    challenges: [
      "Local data management",
      "Expense categorization",
      "Dashboard design",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    imageAlt: "Expense tracker application dashboard",
  },

  {
    id: "weather-app",
    title: "Weather Application",
    category: "Flutter App",
    description:
      "A weather application that provides location-based weather information and forecasts through a clean and intuitive interface.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "JSON",
    ],
    features: [
      "Live Weather",
      "Location Search",
      "Weather Forecast",
      "API Integration",
      "Responsive Layout",
    ],
    challenges: [
      "REST API integration",
      "JSON data handling",
      "Location-based weather data",
    ],
    githubUrl: "https://github.com",
    imageAlt: "Weather application interface",
  },

  {
    id: "chat-app",
    title: "Chat Application",
    category: "Flutter App",
    description:
      "A lightweight real-time messaging application with authentication, conversations, and a modern chat experience.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firebase Authentication",
    ],
    features: [
      "Real-Time Messaging",
      "User Authentication",
      "Conversation List",
      "Message History",
      "Modern UI",
    ],
    challenges: [
      "Real-time data synchronization",
      "Authentication handling",
      "Chat state management",
    ],
    githubUrl: "https://github.com",
    imageAlt: "Chat application interface",
  },

  {
    id: "portfolio-site",
    title: "Developer Portfolio Website",
    category: "Next.js Web Application",
    description:
      "A modern developer portfolio website built to showcase professional experience, technical skills, projects, and career journey.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "Responsive Design",
      "Project Showcase",
      "Skills Section",
      "Career Journey",
      "Motion Effects",
      "SEO Ready",
      "Accessible UI",
    ],
    challenges: [
      "Responsive layout development",
      "Reusable component architecture",
      "Animation implementation",
      "Modern UI development",
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    imageAlt: "Developer portfolio website",
  },
];