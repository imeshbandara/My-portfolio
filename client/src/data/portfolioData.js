/**
 * portfolioData.js
 * ────────────────────────────────────────────────────────
 * Static data store for the portfolio.
 * Replaces the MongoDB / Express backend entirely.
 * ────────────────────────────────────────────────────────
 */

// ── Project Data ──────────────────────────────────────────
export const projectData = [
  {
    id: 'visitceylonx',
    title: 'VisitCeylonX',
    description:
      'A comprehensive tourism platform for Sri Lanka featuring an AI-powered travel itinerary planner.',
    category: 'Individual',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    githubLink: 'https://github.com/imeshbandara/visitceylonx',
    liveLink: '#',
    image: '/images/visitceylonx.jpg',
  },
  {
    id: 'scoop-heaven',
    title: 'Scoop Heaven',
    description:
      'A dynamic ice cream shop website with administrative order management and flavor tracking.',
    category: 'Individual',
    techStack: ['PHP', 'MySQL', 'Tailwind CSS'],
    githubLink: 'https://github.com/imeshbandara/scoop-heaven',
    liveLink: '#',
    image: '/images/scoop-heaven.png',
  },
  {
    id: 'house-renting-website',
    title: 'House-renting-website',
    description:
      'A collaborative house-renting platform built with friends using PHP & MySQL.',
    category: 'Group',
    techStack: ['HTML', 'CSS', 'PHP', 'MySQL'],
    githubLink: 'https://github.com/imeshbandara/house-renting-website',
    liveLink: '#',
    image: '/images/house-renting-website.png',
  },
  {
    id: 'architecture-group-project',
    title: 'Stall Reservation System',
    description:
      'A collaborative project focused on modular software design using Java and Spring Boot.',
    category: 'Group',
    techStack: ['Java', 'Spring Boot', 'React', 'MySQL'],
    githubLink: 'https://github.com/imeshbandara/architecture_project',
    liveLink: '#',
    image: '/images/architecture-group-project.jpeg',
  },
];

// ── Experience / Timeline Data ────────────────────────────
export const experienceData = [
  {
    id: 'uok-degree',
    date: '2022 – Present',
    title: 'BSc (Hons) in Software Engineering',
    subtitle: 'University of Kelaniya — Faculty of Science',
    description:
      'Pursuing a degree focused on full-stack development, software design, data structures, and scalable system architecture.',
    iconText: 'UOK',
  },
  {
    id: 'projects-2023',
    date: '2023',
    title: "Completed 'Scoop Heaven' & 'Architecture Project'",
    subtitle: 'Individual + Group Milestones',
    description:
      "Successfully delivered the 'Scoop Heaven' ice cream shop website and a collaborative Architecture Group Project, gaining hands-on experience with PHP, MySQL, Java, and Spring Boot.",
    iconText: 'PM',
  },
  {
    id: 'visitceylonx-2024',
    date: '2024',
    title: 'Development of VisitCeylonX',
    subtitle: 'MERN Stack — AI Travel Planner',
    description:
      "Built 'VisitCeylonX', a full-featured Sri Lankan tourism platform with an AI-powered itinerary planner, using MongoDB, Express, React, and Node.js.",
    iconText: 'MERN',
  },
];

// ── Skills Data ───────────────────────────────────────────
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiExpress, SiSpringboot, 
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiDocker, SiPostman, SiVite 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

export const skillsData = {
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript (ES6+)", icon: SiJavascript },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Java", icon: FaJava },
  ],
  databaseTools: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Postman", icon: SiPostman },
    { name: "Vite", icon: SiVite },
  ],
};

// ── Blog Data ─────────────────────────────────────────────
export const blogData = [
  {
    id: 1,
    title: "Mastering the MERN Stack: A Comprehensive Guide",
    description: "Deep dive into building scalable full-stack applications using MongoDB, Express, React, and Node.js with best practices.",
    date: "May 10, 2024",
    tags: ["#MERN", "#WebDev", "#FullStack"],
    link: "https://medium.com/@imeshbandara",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Enterprise Architecture with Spring Boot & Java",
    description: "Exploring modular software design and scalable backend architectures for modern enterprise reservation systems.",
    date: "April 22, 2024",
    tags: ["#Java", "#SpringBoot", "#Backend"],
    link: "https://medium.com/@imeshbandara",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "AI in Tourism: Building VisitCeylonX",
    description: "How we integrated AI-powered travel itinerary planning into a comprehensive tourism platform for Sri Lanka.",
    date: "March 15, 2024",
    tags: ["#AI", "#Tourism", "#NextJS"],
    link: "https://medium.com/@imeshbandara",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1469&auto=format&fit=crop"
  }
];
