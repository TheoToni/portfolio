export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  longDescription: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.png",
    github: "https://github.com/TheoToni/portfolio",
    live: "https://theotoni.dev",
    longDescription: `
      This portfolio website showcases my skills and projects as a developer. 
      Built with Next.js 14 and styled with Tailwind CSS, it features smooth 
      animations powered by Framer Motion and a clean, modern design inspired 
      by code editors.
      
      The site includes interactive elements like the memory card game and 
      responsive design for all device sizes.
    `,
  },
  {
    id: "memory-game",
    title: "Tech Memory Game",
    description:
      "Interactive memory card game featuring web development technologies.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    image: "/projects/memory-game.png",
    github: "https://github.com/TheoToni/memory-game",
    longDescription: `
      A fun memory card game built with React that tests your memory with 
      web development technology icons. The game features smooth card flip 
      animations using Framer Motion and a sleek UI designed with Tailwind CSS.
      
      Players need to match pairs of cards showing the same technology icon.
      The game tracks matches and congratulates players when all pairs are found.
    `,
  },
  {
    id: "coleurs",
    title: "Coleurs - Color Palette Generator",
    description:
      "A web application that allows users to generate, save, and explore color palettes.",
    technologies: ["React", "Vite", "TypeScript", "CSS"],
    image: "/projects/coleurs.png", // Assuming standard path
    github: "", // Placeholder
    live: "", // Placeholder
    longDescription: `
      A web application built with React and Vite that allows users to generate, 
      save, and explore color palettes. Features include color generation, 
      saving palettes, and exploring existing ones.
    `,
  },
  {
    id: "ticnumtoe",
    title: "TicNumToe - Brain Training Game",
    description:
      "A web game designed to challenge and train cognitive skills by solving simple math problems against the clock.",
    technologies: ["React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
    image: "/projects/ticnumtoe.png", // Assuming standard path
    github: "", // Placeholder
    live: "", // Placeholder
    longDescription: `
      A brain training game built with React, Shadcn UI, and Tailwind CSS. 
      Players solve simple math problems against the clock to improve cognitive skills.
    `,
  },
  // Add more projects as needed
];
