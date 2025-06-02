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
    image: "screenshot_main.webp",
    moreInfo:
      "A custom-built tool to streamline my crochet pattern creation process - built for speed, consistency, and automation.",
    features: [
      "Rapid entry of repeatable crochet instructions in consistent format",
      "Auto-formatted PDF export for polished pattern presentation",
      "Yarn estimation using dynamic stitch count calculation",
      "Task tracking for publishing across multiple platforms (Etsy, Ravelry, etc.)",
      "Upload and organize tester and final pattern images",
      "Export structured JSON for website integration",
      "Translate between US and UK crochet terminology",
    ],
    fileName: "patternCreator",
    screenshots: [
      {
        src: "screenshot_layout.webp",
        alt: "Pattern Creator - Overview of main interface",
        caption: "Main interface showing pattern structure and tools",
      },
      {
        src: "screenshot_repeatable.webp",
        alt: "Pattern Creator - Repeat instruction input",
        caption: "Quick entry of repeatable instructions",
      },
      {
        src: "screenshot_view_pattern.webp",
        alt: "Pattern Creator - PDF Export Preview",
        caption: "Final pattern preview for PDF export",
      },
      {
        src: "screenshot_images.webp",
        alt: "Pattern Creator - Image Upload",
        caption: "Managing tester and product images",
      },
      {
        src: "screenshot_tasks.webp",
        alt: "Pattern Creator - Task Tracking",
        caption: "Tracking progress and platform-specific tasks",
      },
    ],
  },
  {
    title: "DreamWeave Creations Website",
    featured: true,
    fileName: "dreamweaveCreations",
    tech: {
      frontend: ["HTML", "CSS", "MudBlazor", "Blazor WebAssembly", "C#"],
      deployment: ["Azure"],
    },
    text: "Live website showcasing digital crochet patterns, blog posts, and interactive games. Custom-designed and deployed.",
    buttons: [
      { text: "Visit Website", link: "https://dreamweavecreations.com" },
    ],
    image: "screenshot_homepage.webp",
  },
  {
    title: "Chess Game",
    featured: true,
    fileName: "chess",
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
    buttons: [
      { text: "View Online", link: "https://lessonplanner.azurewebsites.net/" },
    ],
    image: "screenshot_calendar.webp",
    moreInfo:
      "A full-featured teaching assistant app designed to streamline lesson planning, student tracking, and curriculum management - saving time and improving lesson quality.",
    features: [
      "Calendar view for quick overview of planned and unplanned lessons",
      "Color-coded schedule based on lesson status (planned, unplanned, homework due)",
      "Link lessons to schemes of work for structured curriculum planning",
      "RAG rating system to track lesson readiness and quality",
      "Reusable lesson templates to save time when teaching similar content",
      "Student profile tracking: attendance, missed lessons, and personal notes",
      "Responsive design with offline-first architecture for fast interaction",
    ],
    fileName: "lessonPlanner",
    screenshots: [
      {
        src: "screenshot_calendar.webp",
        alt: "Lesson Planner - Calendar View",
        caption: "Color-coded calendar overview of upcoming lessons",
      },
      {
        src: "screenshot_lesson.webp",
        alt: "Lesson Planner - Lesson Planning Interface",
        caption: "Plan lessons with objectives, resources and RAG rating",
      },
      {
        src: "screenshot_learner.webp",
        alt: "Lesson Planner - Student Overview",
        caption: "View individual student profiles with attendance and notes",
      },
      {
        src: "screenshot_plans.webp",
        alt: "Lesson Planner - Scheme of Work Integration",
        caption: "Organize and plan against schemes of work",
      },
    ],
    extraContent: (
      <>
        <h2>Hosting & Architecture</h2>
        <p>
          The original version of the lesson planner was hosted on Azure with a
          server-side Blazor architecture. To improve responsiveness and reduce
          hosting costs, I refactored it to Blazor WebAssembly, enabling local
          hosting with periodic backups to OneDrive.
        </p>
        <p>The original version can be viewed online.</p>
      </>
    ),
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
    fileName: "searchMyContent",
    buttons: [
      {
        text: "GitHub",
        link: "https://github.com/SianMat/youtube-blogger-search",
      },
      { text: "View Online", link: "http://common-cat.surge.sh/" },
    ],
    image: "YouTubeBloggerSearch.webp",
  },
  {
    title: "Codecademy Projects",
    featured: false,
    tech: {
      frontend: ["React", "JavaScript", "HTML", "CSS"],
      backend: ["Express", "Node.js"],
      tools: ["Git", "GitHub", "Webpack", "Jest"],
    },
    text: "A collection of projects completed as part of the Full-Stack Engineer and Create a React App paths on Codecademy.",
    buttons: [],
    image: "codecademy_overview.webp",
    moreInfo:
      "As part of the Codecademy Full-Stack Engineer curriculum, I’ve worked through a wide range of hands-on projects to build practical frontend and backend skills, including React apps, REST APIs, and full-stack integrations.",
    features: [
      "Built React applications with routing, state management, and API integrations",
      "Created RESTful APIs using Express and Node.js",
      "Worked with client-side routing and dynamic UIs",
      "Practiced test-driven development and debugging techniques",
      "Deployed projects using GitHub and live environments",
      "Completed skill paths like 'Create a React App' to deepen React experience",
      "Used real-world APIs like Spotify for integration exercises (e.g., Jammming)",
    ],
    fileName: "codecademyProjects",
    screenshots: [
      {
        src: "screenshot_jammming.webp",
        alt: "Jammming App",
        caption:
          "Jammming - A React app that searches and creates Spotify playlists",
        link: "https://capable-centaur-786742.netlify.app",
        gitHubLink: "https://github.com/SianMat/jammming",
      },
      {
        src: "screenshot_portfolio.webp",
        alt: "Developer Portfolio Website",
        caption:
          "This portfolio was built as part of the Full Stack Engineer Career Path",
      },
      {
        src: "screenshot_api_project.webp",
        alt: "Express API Project",
        caption: "REST API project using Express and Node.js",
      },
    ],
    extraContent: (
      <>
        <h2>Learning Outcomes</h2>
        <p>
          Through Codecademy's full-stack engineer track, I’ve gained a strong
          foundation in frontend and backend technologies, with an emphasis on
          React, Node, and practical development workflows. These projects
          reflect my growing expertise in modern web development and serve as a
          basis for continued exploration.
        </p>
        <a
          href="https://www.codecademy.com/profiles/sian_matthews"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark btn-sm fw-bold d-inline-flex align-items-center gap-2"
        >
          <img
            src="https://cdn.worldvectorlogo.com/logos/codecademy.svg"
            alt="Codecademy logo"
            style={{ height: "1.2rem", width: "auto" }}
          />
          View My Codecademy Profile
        </a>
      </>
    ),
  },
];
