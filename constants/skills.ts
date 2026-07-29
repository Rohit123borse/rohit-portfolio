import type { SkillCategoryItem } from "@/types/skill";

export const skillsCategories: SkillCategoryItem[] = [
  {
    id: "mobile-development",
    icon: "📱",
    title: "Mobile Development",
    description: "Building polished cross-platform apps with fluid interactions and reliable architecture.",
    skills: ["Flutter", "Dart", "Firebase", "REST API", "Postman"],
  },
  {
    id: "frontend",
    icon: "🖥️",
    title: "Frontend",
    description: "Crafting modern interfaces with responsive layouts and accessible UI patterns.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "backend-apis",
    icon: "⚙️",
    title: "Backend & APIs",
    description: "Designing API-driven systems and service integrations that scale cleanly.",
    skills: ["REST API", "Firebase", "Postman", "Java"],
  },
  {
    id: "database",
    icon: "🗄️",
    title: "Database",
    description: "Working with local persistence and structured data storage for app reliability.",
    skills: ["Hive", "SQLite", "Shared Preferences"],
  },
  {
    id: "state-management",
    icon: "🧠",
    title: "State Management",
    description: "Applying robust state patterns for predictable app behavior and maintainability.",
    skills: ["Provider", "Riverpod", "Bloc"],
  },
  {
    id: "tools",
    icon: "🛠️",
    title: "Tools",
    description: "Using modern tooling to streamline development, debugging, and collaboration.",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    id: "version-control",
    icon: "🔀",
    title: "Version Control",
    description: "Managing source changes with clear collaboration and release discipline.",
    skills: ["Git", "GitHub", "Branching", "PRs"],
  },
  {
    id: "cloud-deployment",
    icon: "☁️",
    title: "Cloud & Deployment",
    description: "Deploying applications with scalable infrastructure and smooth delivery workflows.",
    skills: ["Firebase", "Vercel", "Netlify", "CI/CD"],
  },
];
