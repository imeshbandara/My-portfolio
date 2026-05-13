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
    image: '/images/visitceylonx.png',
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
    title: 'Architecture Group Project',
    description:
      'A collaborative project focused on modular software design using Java and Spring Boot.',
    category: 'Group',
    techStack: ['Java', 'Spring Boot', 'React', 'MySQL'],
    githubLink: 'https://github.com/imeshbandara/architecture_project',
    liveLink: '#',
    image: '/images/architecture-group-project.png',
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
