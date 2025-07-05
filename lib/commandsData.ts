export const commandData = [
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
          name: "John",
          role: "Full-Stack Software Engineer",
          location: "San Francisco, CA",
          bio: "Passionate software engineer with 5+ years of experience building scalable web applications. I love creating elegant solutions to complex problems and am always eager to learn new technologies. When I'm not coding, you can find me exploring the great outdoors or experimenting with new recipes.",
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
            name: "E-Commerce Platform",
            description:
              "Full-stack React/Node.js application with payment integration",
            tech: ["React", "Node.js", "PostgreSQL", "Stripe API"],
            status: "Production",
            users: "10k+",
            link: "www.ramiforza.com",
          },
          {
            name: "Task Management App",
            description:
              "Real-time collaborative task management with drag-and-drop",
            tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
            status: "Beta",
            contributors: 3,
            link: "www.ramiforza.com",
          },
          {
            name: "AI Code Assistant",
            description: "VS Code extension for intelligent code completion",
            tech: ["TypeScript", "OpenAI API", "VS Code API"],
            status: "Development",
            downloads: "1.2k",
            link: "www.ramiforza.com",
          },
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
            { name: "JavaScript/TypeScript", level: "95%" },
            { name: "Python", level: "90%" },
            { name: "Java", level: "80%" },
            { name: "Go", level: "60%" },
          ],
          frameworks: [
            { name: "React/Next.js", level: "95%" },
            { name: "Node.js/Express", level: "90%" },
            { name: "Vue.js", level: "75%" },
            { name: "Django", level: "65%" },
          ],
          databases: [
            { name: "PostgreSQL", level: "90%" },
            { name: "MongoDB", level: "80%" },
            { name: "Redis", level: "70%" },
          ],
          tools: [
            { name: "Docker", level: "85%" },
            { name: "AWS", level: "80%" },
            { name: "Git", level: "95%" },
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
          email: "john.developer@email.com",
          linkedin: "linkedin.com/in/johndeveloper",
          github: "github.com/johndeveloper",
          twitter: "@johndeveloper",
          phone: "+1 (555) 123-4567",
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
