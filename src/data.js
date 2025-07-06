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
    title: "Food recipe app",
    description:
      "This is an application that provides recipes for various food items, including ingredients and step-by-step cooking instructions.",
    tech: ["HTML5", "CSS", "Javascript", "Bootstrap"],
    isProjectActive: true,
    url: "https://manishkulal-foodrecipe.netlify.app"
  },
  {
    title: "Restaurant management system",
    description:
      "Restaurant Management System is an application that helps manage various restaurant operations such as order processing, menu management, and order monitoring efficiently.",
    tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDb", "Bootstrap"],
    isProjectActive: true,
    url: "https://manishkulal-restaurant-management.netlify.app"
  },
  {
    title: "Invoice management system",
    description:
      "Invoice Management System automates the creation, processing, and tracking of invoices to streamline billing and payment workflows.",
    tech: ["C#", ".Net", "SSMS"],
    isProjectActive: false
  },
  {
    title: "FreeChat application",
    description:
      "A Chatting Application enables real-time text communication between users over the internet.",
    tech: ["C#", ".Net", "SSMS", "SignalR", "PostgreSql"],
    isProjectActive: false
  },
  {
    title: "ICloud-Notebook",
    description:
      "This allows users to create, store, and access notes online from any device, enabling real-time collaboration and synchronization.",
    tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDb", "Bootstrap"],
    isProjectActive: true,
    url: "https://manishkulal-cloudnotebook.netlify.app"
  },
  {
    title: "Text Utils",
    description:
      "Text Utils is a tool that provides various text processing features like formatting, analyzing, and storing text quickly and easily.",
    tech: ["ReactJs", "Bootstrap"],
    isProjectActive: true,
    url: "https://manishkulal-textutil.netlify.app/"
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

const name = "Manish"


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
  name
};
