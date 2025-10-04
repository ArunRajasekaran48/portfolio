import { number } from "zod";

// Personal Information
export const PERSONAL_INFO = {
  name: 'Arun Rajasekaran',
  title: 'Full Stack Developer',
  subtitle: 'MERN & Java Spring Boot',
  email: 'arunrajasekaran1209@gmail.com',
  location: 'Coimbatore, India',
  college: 'Sri Eshwar College Of Engineering',
  educator: 'Program Professor',
  number: '6374181274'
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/ArunRajasekaran48',
  linkedin: 'https://www.linkedin.com/in/arun-rajasekaran-617538291/',
  email: 'mailto:arunrajasekaran1209@gmail.com',
  leetcode: 'https://leetcode.com/u/arunrajasekaran1209/',
  resume:
    'https://drive.google.com/drive/folders/1R3QvU75V1GJOcYnhiFm9lnCWKmAN1zZm',
};

// Technologies with Icons
export const TECHNOLOGIES = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind css', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
];

// Projects / My Works
export const MY_WORKS = [
  {
    title: 'Program Professor',
    description:
      'Grown YouTube channel "Program Professor" to over 1050+ subscribers by delivering beginner-friendly Java programming tutorials that simplify complex concepts into easy-to-follow lessons.',
    youtube: 'https://www.youtube.com/@ProgramProfessor',
  },
  {
    title: 'MERN Pet Adoption Platform',
    description:
      'A comprehensive pet adoption platform built with MERN stack featuring user authentication, pet listings, adoption requests, and admin dashboard.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB',],
    github: 'https://github.com/ArunRajasekaran48/MERN-PetAdoption-Platform',
  },
  {
    title: 'Truckshare',
    description:
      'A microservices-based logistics platform connecting businesses with truck owners, enabling shipment requests dynamic truck matching, secure booking with payment updates, and real-time GPS tracking for seamless and transparent transportation.',
    technologies: ['Spring Boot Microservices', 'PostgreSQL', 'Eureka', 'API Gateway', 'Resilience4j','React'],
    github: 'https://github.com/ArunRajasekaran48/Truckshare',
  },
  {
    title: 'Inventory Stock Alert Tool',
    description:
      'A smart inventory management system with real-time stock alerts, automated notifications and separate interfaces for users and administrators.',
    technologies: ['React', 'Spring Boot', 'MYSQL'],
    github: 'https://github.com/ArunRajasekaran48/Inventory-StockAlert-Tool',
  }
];
