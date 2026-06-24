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
    image: '/images/visitceylonx.jpeg',
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
  id: 'luxora-clothing',
  title: 'Luxora Clothing',
  description:
    'A scalable e-commerce platform built with a microservices architecture, featuring secure authentication, real-time service communication, and optimized multi-database management.',
  category: 'Individual',
  techStack: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Redux',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'Mongoose',
    'Turbo Repo'
  ],
  githubLink: 'https://github.com/imeshbandara/luxora-clothing',
  liveLink: '#',
  image: '/images/luxora-clothing.jpeg',
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
    date: '2024 – Present',
    title: 'BSc (Hons) in Software Engineering',
    subtitle: 'University of Kelaniya — Faculty of Science',
    description:
      'Pursuing a degree focused on full-stack development, software design, data structures, and scalable system architecture.',
    icon: FaGraduationCap,
  },
  {
    id: 'al-results',
    date: '2022',
    title: 'G.C.E. Advanced Level (Physical Science Stream)',
    subtitle: 'Pinnawala Central College, Rambukkana',
    results: [
      { subject: 'Physics', grade: 'A' },
      { subject: 'Chemistry', grade: 'B' },
      { subject: 'Combined Maths', grade: 'C' },
    ],
    statistics: 'Z-score: 1.571, District Rank: 98',
    icon: FaSchool,
  },
];

// ── Skills Data ───────────────────────────────────────────
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiExpress, SiSpringboot, 
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiDocker, SiPostman, SiVite 
} from 'react-icons/si';
import { FaJava, FaGraduationCap, FaSchool, FaCode } from 'react-icons/fa6';

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
    title: "JWT Authentication Done Right: The Definitive Guide to Secure Tokens",
    description: "An in-depth guide that goes beyond basic implementation to address critical security flaws in modern web applications. It explores best practices for securing JSON Web Tokens, common vulnerabilities to avoid, and strategies for robust authentication.",
    date: "April 27, 2026",
    tags: ["#JWT", "#WebSecurity", "#Authentication", "#CyberSecurity", "#WebDevelopment"],
    link: "https://medium.com/@imeshbandara525/jwt-authentication-done-right-the-definitive-guide-to-secure-tokens-377323eab009",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*U5ugzWMxfmwLdNCVzsxSEA.jpeg"
  },
  {
    id: 2,
    title: "Supervised vs. Unsupervised Learning: A Comprehensive Deep Learning Breakdown",
    description: "A detailed exploration of the two primary paradigms in machine learning. The article breaks down the fundamental differences between supervised and unsupervised learning, their unique architectures, and real-world applications in the field of deep learning.",
    date: "May 10, 2026",
    tags: ["#MachineLearning", "#DeepLearning", "#SupervisedLearning", "#UnsupervisedLearning", "#DataScience", "#AI"],
    link: "https://medium.com/@imeshbandara525/supervised-vs-unsupervised-learning-a-comprehensive-deep-learning-breakdown-99ebcb037402",
    image: "https://www.aiu.edu/wp-content/uploads/2024/08/where-is-ai-used-1024x683-1.jpg"
  },
  {
    id: 3,
    title: "Understanding Software Licenses in 2025: A Guide to What’s Out There",
    description: "A modern overview of software licensing models, explaining the differences between proprietary, open-source, and permissive licenses. It provides clarity on how developers and organizations can navigate legal requirements and choose the right licensing strategy for their projects.",
    date: "May 12, 2026",
    tags:["#SoftwareLicensing", "#OpenSource", "#IntellectualProperty", "#SoftwareDevelopment", "#LegalTech", "#TechTrends"],
    link: "https://medium.com/@imeshbandara525/understanding-software-licenses-in-2025-a-guide-to-whats-out-there-41ea7d2d3dc9",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*wK0KWMyuCKI4vc1KYuaoNQ.jpeg"
  },
  {
    id: 4,
    title: "Cyber Security: Essential Strategies for a Digital World",
    description: "A comprehensive look at the fundamental pillars of modern cybersecurity. The article examines evolving threat landscapes, the importance of proactive defense mechanisms, and best practices for protecting sensitive data in an increasingly connected environment.",
    date: "Jul 16, 2024",
    tags:["#CyberSecurity", "#InformationSecurity", "#NetworkSecurity", "#EthicalHacking", "#DataPrivacy", "#TechSecurity"],
    link: "https://medium.com/@imeshbandara525/cyber-security-787672138275",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*xwhVBhYHzNSA33_2whwQiA.jpeg"
  }
];
