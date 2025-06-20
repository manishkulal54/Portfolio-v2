import { Github, Linkedin, Mail, Phone } from "lucide-react";

const languages = [
  { name: "JavaScript", value: 1 },
  { name: "C#", value: 1 },
  { name: "Python", value: 1 },
  { name: "C", value: 1 },
  { name: "MySQL", value: 1 },
  { name: "MSSQL", value: 1 },
  { name: "MongoDB", value: 1 },
];

const skills = [
  { name: "Frontend", icon: "⚛️", amount: 75 },
  { name: "Backend", icon: "🚀", amount: 80 },
  { name: "Database", icon: "🗄️", amount: 80 },
  { name: "Security", icon: "🔐", amount: 50 },
];

const stacks = ["MERN", ".NET"];
const tools = [
  "GIT",
  "Fork",
  "VSCode",
  "Visual Studio",
  "Jira",
  "Confluence",
  "Figma",
  "GPT's",
];

const projects = [
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "Modern e-commerce solution with real-time inventory, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    isProjectActive: true,
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Data visualization platform with machine learning insights and predictive analytics.",
    tech: ["Python", "React", "TensorFlow", "PostgreSQL"],
    isProjectActive: true,
  },
  {
    title: "Real-Time Collaboration Tool",
    description:
      "Team productivity app with live editing, video calls, and project management features.",
    tech: ["React", "Socket.io", "MongoDB", "WebRTC"],
    isProjectActive: true,
  },
];

const socials = [
  { name: "GitHub", url: "https://github.com/manishkulal54", icon: Github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manish-kulal-530479170",
    icon: Linkedin,
  },
  { name: "Email", url: "mailto:manishkulal.dev@gmail.com", icon: Mail },
  { name: "Phone", url: "tel:+919741933493", icon: Phone },
];

const heroStrings = [
  "Software Developer",
  "Security Minded Engineer",
  "Full Stack Developer",
  "Tech Enthusiast",
  "Backend Developer",
  "Future-Ready Developer",
  "Lifelong Learner",
  "Production-Grade Thinker",
  "Frontend Developer",
  "Creative Coder",
  "JavaScript Ninja",
  "Security-First Coder",
  "Performance Optimizer",
  "Problem Solver",
  "API Designer",
  "React Specialist",
  ".NET Developer",
  "Database Tuner",
  "AI Curious",
  "Agile Practitioner",
];

const quote =
  "I don't just write code — I craft secured, scalable systems that power the future.";

const aboutMe = `I'm a results-oriented software developer with an extensive
              background in developing solid, efficient, and user-focused
              applications. Adept at all phases of the development cycle from
              conception and design to deployment, I thrive on crafting clean,
              maintainable code and overcoming real-world issues creatively and
              with precision.I keep myself updated on new technologies, like
              working autonomously and collaboratively, and I constantly look
              for opportunities for personal development through challenging
              experiences. Apart from coding, I read about new tools, come up
              with ideas for products, and interact with tech communities.`;

export {
  languages,
  skills,
  stacks,
  tools,
  projects,
  socials,
  heroStrings,
  quote,
  aboutMe,
};
