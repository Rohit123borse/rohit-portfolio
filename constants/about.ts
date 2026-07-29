export type JourneyItem = {
  title: string;
  description: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export const aboutContent = {
  heading: "About Me",
  subheading: "Flutter Developer | MCA Graduate | Mobile App Enthusiast",
  summary:
    "I'm Rohit Borse, a passionate Flutter Developer with hands-on internship experience building real-world mobile applications. During my internship, I worked with Flutter, Dart, REST APIs, Firebase, Git, and responsive UI development. I enjoy creating scalable applications and continuously learning modern technologies.",
  journey: [
    {
      title: "MCA Graduate",
      description: "Completed post-graduate education with strong foundations in software engineering and app development.",
    },
    {
      title: "Flutter Internship",
      description: "Built practical mobile app solutions and collaborated on product-focused development workflows.",
    },
    {
      title: "Mobile App Development",
      description: "Focused on creating intuitive user experiences and performant interfaces for modern devices.",
    },
    {
      title: "API Integration",
      description: "Integrated REST APIs and Firebase services to deliver scalable, data-driven app experiences.",
    },
  ] as JourneyItem[],
  stats: [
    { value: "1+", label: "Internship Completed" },
    { value: "5+", label: "Mobile Projects" },
    { value: "10+", label: "REST API Integrations" },
    { value: "6+", label: "Technologies Learned" },
  ] as StatItem[],
};
