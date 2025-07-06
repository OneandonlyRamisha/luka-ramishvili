import { CommandOutputItem } from "@/components/terminalRenderer/terminalRenderer";
interface CommandEntry {
  command: string;
  output: CommandOutputItem[];
}

export const commandData: CommandEntry[] = [
  {
    command: "help",
    output: [
      { type: "text", content: "Available commands:" },
      { type: "command", content: "./about - Learn about me" },
      { type: "command", content: "./projects - View my projects" },
      { type: "command", content: "./skills - See my technical skills" },
      { type: "command", content: "./contact - Get in touch" },
      { type: "command", content: "clear - Clear terminal" },
      { type: "command", content: "help - Show this help" },
    ],
  },
  {
    command: "./about",
    output: [
      { type: "text", content: "Loading profile..." },
      {
        type: "profile",
        content: {
          name: "Luka",
          role: "Full-Stack Web & App Developer",
          location: "Italy",
          bio: "I’m Luka—a foil fencer and computer science student who taught myself web development. Driven by faith in Jesus Christ and discipline on the piste, I balance life between code, training, and exploring new tech. Outside of screens, I’m chasing the next great recipe or planning my path to financial freedom.",
        },
      },
    ],
  },
  {
    command: "./projects",
    output: [
      { type: "text", content: "Fetching repositories..." },
      {
        type: "projectList",
        content: [
          {
            name: "Web To-Do List",
            description: "Simple and clean to-do list for desktop browsers",
            tech: ["Next JS", "TypeSCript", "Module CSS"],
            status: "Production",
            link: "https://github.com/OneandonlyRamisha/to-do",
          },
          {
            name: "Weather Website",
            description: "Weather forecast site with real-time API data",
            tech: ["Next JS", "Module CSS", "TypeScript", "Weather API"],
            status: "Production",
            link: "https://github.com/OneandonlyRamisha/weather-app",
          },
          {
            name: "IdeaNest",
            description: "Mobile app for writing and managing idea validations",
            tech: ["React Native", "AsyncStorage", "Context API"],
            status: "Production",
            link: "https://github.com/OneandonlyRamisha/idea-nest",
          },
          {
            name: "LaterEarlier",
            description:
              "Quiz game guessing which historical event happened first",
            tech: ["React Native", "Expo", "JavaScript"],
            status: "Beta",
            link: "https://github.com/OneandonlyRamisha/georgian-history",
          },
          {
            name: "Ramiforza",
            description:
              "Portfolio and service site for web development agency",
            tech: ["Next JS", "JavaScript", "SEO"],
            status: "Production",
            link: "https://github.com/OneandonlyRamisha/RamiForzaNew",
          },
          {
            name: "Lizi Ramishvili Website",
            description: "Personal website for a professional cellist",
            tech: ["Next JS", "Module CSS", "SEO", "JavaScript"],
            status: "Production",
            link: "https://github.com/OneandonlyRamisha/Lizi-ramishvili",
          },
          {
            name: "Editing Pheonms",
            description: "Landing site for a creative video editing agency",
            tech: ["HTML", "CSS"],
            status: "Production",
            link: "https://github.com/OneandonlyRamisha/Editing-phenoms",
          },
          {
            name: "Mobile To-Do List",
            description: "To-do list app tailored for mobile users",
            tech: ["React Native", "Expo", "AsyncStorage"],
            status: "Development",
            link: "https://github.com/OneandonlyRamisha/mobile-to-do",
          },
          {
            name: "Finance App",
            description: "Mobile app for tracking expenses and budgeting",
            tech: ["React Native", "Expo"],
            status: "Development",
            link: "#",
          },
          {
            name: "Fullstack SaaS App",
            description: "SaaS platform with user auth, billing, and dashboard",
            tech: ["Next.js", "SupaBase", "Stripe", "Module CSS"],
            status: "Development",
            link: "#",
          },
          // {
          //   name: "E-Commerce Platform",
          //   description:
          //     "Full-stack React/Node.js application with payment integration",
          //   tech: ["React", "Node.js", "PostgreSQL", "Stripe API"],
          //   status: "Production",
          //   users: 10000, // ✅ fixed
          //   link: "www.ramiforza.com",
          // },
          // {
          //   name: "Task Management App",
          //   description:
          //     "Real-time collaborative task management with drag-and-drop",
          //   tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
          //   status: "Beta",
          //   contributors: 3,
          //   link: "www.ramiforza.com",
          // },
          // {
          //   name: "AI Code Assistant",
          //   description: "VS Code extension for intelligent code completion",
          //   tech: ["TypeScript", "OpenAI API", "VS Code API"],
          //   status: "Development",
          //   downloads: 1200, // ✅ fixed
          //   link: "www.ramiforza.com",
          // },
        ],
      },
    ],
  },
  {
    command: "./skills",
    output: [
      { type: "text", content: "Analyzing skill tree..." },
      {
        type: "skills",
        content: {
          languages: [
            { name: "JavaScript", level: "90%" },
            { name: "TypeScript", level: "95%" },
            { name: "HTML", level: "90%" },
            { name: "CSS", level: "85%" },
          ],
          frameworks: [
            { name: "React", level: "90%" },
            { name: "Next JS", level: "95%" },
            { name: "Native", level: "85%" },
            { name: "Angular", level: "55%" },
          ],
          databases: [
            { name: "PostgreSQL", level: "70%" },
            { name: "MongoDB", level: "80%" },
            { name: "SupaBase", level: "80%" },
          ],
          tools: [
            { name: "Git", level: "95%" },
            { name: "SupaBase", level: "80%" },
            { name: "GitHub", level: "95%" },
          ],
        },
      },
    ],
  },
  {
    command: "./contact",
    output: [
      { type: "text", content: "Establishing connection..." },
      {
        type: "contact",
        content: {
          email: "ramishvililukawork@gmail.com",
          linkedin: "linkedin.com/in/luka-ramishvili-329352373/",
          github: "github.com/OneandonlyRamisha",
          twitter: "x.com/LukaRamishvili_",
          phone: "disclosed",
          availability:
            "Currently open to new opportunities and freelance projects!",
          message: "Let's build something amazing together!",
        },
      },
    ],
  },
  {
    command: "awd",
    output: [
      { type: "error", content: "Command not found: awd" },
      { type: "text", content: "Type 'help' for available commands." },
    ],
  },
];
