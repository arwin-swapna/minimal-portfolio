interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface Experience {
  company: string;
  position: string;
  date: string;
  location: string;
  description?: string;
  technologies: string[];
}

interface SkillGroup {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    title: "ClearCents",
    description:
      "A React Native application built to track expenses, manage budgets, and accelerate credit card debt payoff through smart financial planning and visualization.",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Firebase",
      "Mobile Development",
    ],
  },
  {
    title: "E-commerce Store",
    description:
      "A full-stack e-commerce platform built with React, TypeScript, ASP.NET Web APIs, Entity Framework, and Postgres.",
    technologies: ["React", "TypeScript", "C#", "ASP.NET", "Postgres"],
    liveUrl: "https://invitecards.in",
  },
  {
    title: "Rush-OS",
    description:
      "Rush (Rapid Unix SHell) is a simple, efficient Unix shell implemented as a command line interpreter (CLI).",
    technologies: ["C", "Unix", "Shell Scripting", "CLI"],
    githubUrl: "https://github.com/arwin-swapna/rush-os",
  },
  {
    title: "VZIP-OS",
    description:
      "This project involves speeding up a video compression tool that processes a folder of uncompressed image files ('.ppm' extension) and creates a single zip file with all images after compression.",
    technologies: [
      "C",
      "Image Processing",
      "File Compression",
      "Performance Optimization",
    ],
    githubUrl: "https://github.com/arwin-swapna/vzip-os",
  },
  {
    title: "Spotify To MP3",
    description:
      "A Python Flask application to download Spotify playlist songs as MP3 files by integrating with Spotify and YouTube APIs.",
    technologies: ["Python", "Flask", "Spotify API", "YouTube API"],
    githubUrl: "https://github.com/arwin-swapna/spotify-to-mp3",
  },
  {
    title: "USF Class Scheduler",
    description:
      "A React-based class scheduling application designed to enhance the scheduling experience for USF students.",
    technologies: ["React", "TypeScript", "Material UI", "TailwindCSS"],
    githubUrl: "https://github.com/arwin-swapna/usf-class-schedule",
    liveUrl: "https://usfclass.netlify.app/",
  },
];

export const experiences: Experience[] = [
  {
    company: "White & Case LLP",
    position: "DMS & Risk Engineer",
    date: "March 2025 – Present",
    location: "Tampa, FL",
    technologies: ["iManage", "SharePoint", "MS SQL", "Azure"],
  },
  {
    company: "Tenex Software Solutions",
    position: "Software Engineer",
    date: "Jul 2024 – Present",
    location: "Tampa, FL",
    technologies: ["Blazor", "Golang", "AWS", "VB.NET", "MySQL"],
  },
  {
    company: "White & Case LLP",
    position: "Application Development Intern",
    date: "May 2024 – Jul 2024",
    location: "Tampa, FL",
    technologies: [
      "SharePoint",
      "SPFx",
      "React",
      "PowerShell",
      "Microsoft M365",
    ],
  },
  {
    company: "Tenex Software Solutions",
    position: "Software Engineer Intern",
    date: "Aug 2022 – Apr 2024",
    location: "Tampa, FL",
    technologies: [
      "Blazor",
      "Go",
      "Python",
      "VB.NET",
      "Form.io",
      "AWS",
      "ASP",
      "MySQL",
    ],
  },
  {
    company: "Dodge Industrial, Inc. (ABB)",
    position: "R&D Intern",
    date: "Aug 2021 – May 2022",
    location: "Greenville, South Carolina",
    technologies: ["Python", "Data Analysis", "IoT", "C#"],
  },
  {
    company: "University of South Florida Libraries",
    position: "Student Programmer",
    date: "Jan 2020 – Aug 2021",
    location: "Tampa, Florida",
    technologies: [".NET", "Python", "MySQL", "Raspberry Pi"],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "C#",
      "C/C++",
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "PowerShell",
    ],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "Jira",
      "Visual Studio",
      "VSCode",
      "Docker",
      "GitHub Actions",
      "Stripe",
      "Postman",
      "Vite",
      "Windows",
      "Linux",
      "Agile",
      "SDLC",
    ],
  },
  {
    category: "Technologies/Frameworks",
    items: [
      ".NET",
      "Blazor",
      "Entity Framework",
      "React",
      "Redux",
      "NodeJS",
      "Flask",
      "Pytest",
      "SharePoint",
      "SPFx",
      "M365",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "Postgres", "SQLite", "MongoDB", "Microsoft SQL Server"],
  },
];
