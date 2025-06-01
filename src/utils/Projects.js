export function getTechList() {
  const techList = {};

  Projects.forEach((project) => {
    Object.entries(project.tech).forEach(([category, techs]) => {
      if (!techList[category]) {
        techList[category] = [];
      }

      techs.forEach((tech) => {
        if (!techList[category].includes(tech)) {
          techList[category].push(tech);
        }
      });
    });
  });

  // Sort each category's techs alphabetically
  Object.keys(techList).forEach((category) => {
    techList[category].sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    );
  });

  return techList;
}

export const Projects = [
  {
    title: "Pattern Creator",
    main: true,
    tech: {
      frontend: ["HTML", "CSS", "MudBlazor", "C#"],
      backend: ["Blazor Server"],
      database: ["SQLite"],
    },
    text: "A productivity app for writing crochet patterns with repeatable lines, media organization, and PDF export.",
    buttons: [],
    image: "dreamweave.png",
  },
  {
    title: "DreamWeave Creations Website",
    featured: true,
    tech: {
      frontend: ["HTML", "CSS", "MudBlazor", "Blazor WebAssembly", "C#"],
      deployment: ["Azure"],
    },
    text: "Live website showcasing digital crochet patterns, blog posts, and interactive games. Custom-designed and deployed.",
    buttons: [
      { text: "Visit Website", link: "https://dreamweavecreations.com" },
    ],
    image: "dreamweave.png",
  },
  {
    title: "Chess Game",
    featured: true,
    tech: {
      frontend: ["React", "JavaScript", "HTML", "CSS"],
      deployment: ["Netlify"],
    },
    text: "A full chess game built in React to practice JS and logic skills. Includes full move validation.",
    buttons: [
      { text: "GitHub", link: "https://github.com/SianMat/chess" },
      { text: "Play", link: "https://vibrant-johnson-e991a0.netlify.app" },
    ],
    image: "Chess.webp",
  },
  {
    title: "Lesson Planner",
    featured: true,
    tech: {
      frontend: ["MVC", "HTML", "CSS"],
      backend: [".NET Core", "C#"],
      database: ["SQLite"],
      deployment: ["Azure"],
    },
    text: "Designed for planning, tracking and reusing lessons in an education setting.",
    buttons: [],
    image: "dreamweave.png",
  },
  {
    title: "Invoicing App",
    featured: true,
    tech: {
      frontend: ["Blazor WebAssembly", "HTML", "CSS", "MatBlazor"],
      backend: ["C#", ".NET Core"],
      database: ["SQL Server"],
    },
    text: "Tracks time, payments, and invoices - custom-built for freelancer needs.",
    buttons: [],
    image: "dreamweave.png",
  },
  {
    title: "IQA Tracking Tool",
    tech: {
      frontend: ["Blazor WebAssembly", "HTML", "CSS", "Bootstrap"],
      backend: ["C#", ".NET Core"],
      database: ["SQL Server"],
    },
    text: "Designed for internal quality assurance in a Further Education setting streamlining evidence tracking and moderation.",
    buttons: [],
    image: "dreamweave.png",
  },
  {
    title: "Search My Content",
    tech: {
      frontend: ["React", "JavaScript", "HTML", "CSS"],
      backend: ["Third-party API"],
      deployment: ["Surge"],
    },
    text: "A desktop app that allows users to search content from both of my YouTube channels and my blog.",
    buttons: [
      {
        text: "GitHub",
        link: "https://github.com/SianMat/youtube-blogger-search",
      },
      { text: "View", link: "http://common-cat.surge.sh/" },
    ],
    image: "YouTubeBloggerSearch.webp",
  },
  {
    title: "Codecademy",
    tech: {
      frontend: ["React", "JavaScript", "HTML", "CSS"],
      backend: ["Third-party API"],
      deployment: ["Surge"],
    },
    text: "A desktop app that allows users to search content from both of my YouTube channels and my blog.",
    buttons: [
      {
        text: "GitHub",
        link: "https://github.com/SianMat/youtube-blogger-search",
      },
      { text: "View", link: "http://common-cat.surge.sh/" },
    ],
    image: "YouTubeBloggerSearch.PNG",
  },
];
