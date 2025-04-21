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
  // Add more projects as needed
];
