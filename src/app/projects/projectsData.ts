export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  // Add other relevant fields like project link, repo link, etc.
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "My personal portfolio website built with Next.js and Tailwind CSS, showcasing my projects and skills.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/portfolio.png",
  },
  {
    id: "coleurs",
    title: "Coleurs - Color Palette Generator",
    description:
      "A web application that allows users to generate, save, and explore color palettes. Built with React and Vite.",
    technologies: ["React", "Vite", "TypeScript", "CSS"],
    imageUrl: "/coleurs.png",
  },
  {
    id: "ticnumtoe",
    title: "TicNumToe - Brain Training Game",
    description:
      "A web game designed to challenge and train cognitive skills by solving simple math problems against the clock. Built with React, Shadcn UI, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
    imageUrl: "/ticnumtoe.png",
  },
  {
    id: "co2-calculator",
    title: "CO2 Calculator",
    description: "A CO2 calculator for a consumer protection page.",
    technologies: ["Placeholder Tech 1", "Placeholder Tech 2"],
    imageUrl: "/co2.png",
  },
];

// Helper function to get project data by ID (optional, but can be useful)
export function getProjectData(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
