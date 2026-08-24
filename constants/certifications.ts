export type CertificationItem = {
  id: string;
  title: string;
  category: "Achievement" | "Recognition";
  organization: string;
  date: string;
  description: string;
  rank?: string;
  featured?: boolean;
  image?: string;
};

export const certifications: CertificationItem[] = [
  {
    id: "hackathon-3",
    title: "Hackathon 3.0 — AI Based Applications",
    category: "Achievement",
    organization:
      "R. C. Patel Institute of Management Research and Development, Shirpur",
    date: "25 Feb 2023",
    rank: "1st Rank",
    description:
      "Secured 1st Rank in Hackathon 3.0 for developing and presenting an AI-based application.",
    featured: true,
    image: "/certificates/hackathon_c.jpg",
  },

  {
    id: "hackathon-ai-metaverse",
    title: "Hackathon — AI & Metaverse Application",
    category: "Achievement",
    organization:
      "R. C. Patel Institute of Management Research and Development, Shirpur",
    date: "28 Oct 2023",
    rank: "3rd Rank",
    description:
      "Secured 3rd Rank in a hackathon focused on AI and Metaverse applications.",
    image: "/certificates/3 rank.jpg",
  },

  {
    id: "hackathon-4",
    title: "Hackathon 4.0",
    category: "Recognition",
    organization:
      "R. C. Patel Institute of Management Research and Development, Shirpur",
    date: "2024",
    description:
      "Recognized through event and media coverage for participation, presentation, and team selection at Hackathon 4.0.",
    image: "/certificates/hackathon-4-recognition.jpg",
  },

  {
  id: "director-certificate-1",
  title: "Your Certificate Title",
  category: "Achievement",
  organization: "R. C. Patel Institute of Management Research and Development, Shirpur",
  date: "2024",
  description: "Recognition awarded by the college.",
  image: "/certificates/hackathon.jpg",
},

{
  id: "director-certificate-2",
  title: "Your Certificate Title",
  category: "Recognition",
  organization: "R. C. Patel Institute of Management Research and Development, Shirpur",
  date: "2024",
  description: "Recognition awarded by the college.",
  image: "/certificates/achievement_librarymam.jpeg",
},
];