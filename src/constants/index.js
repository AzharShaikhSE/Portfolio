import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hub,
  quinnox,
  iit,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  java,
  vue,
  aws,
  serverlessYT,
  solodrinker,
  hotelhunt,
  kelly,
  venki,
  sai
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Solution Architect & Tech Lead",
    icon: creator,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company_name: "Hub Group Inc.",
    icon: hub,
    iconBg: "#383E56",
    date: "May 2018 - Present",
    points: [
      "Designed and developed web and mobile application based on MEAN/MEVN/MERN stack and microservice architecture that is used by our drivers in their day-to-day life to efficiently complete the transportation workflow.",
      "Designed and developed a new order management system to retire legacy TPS system by working with multiple stakeholders and architecting a process workflow that efficiently spanned across multiple different systems subsequently improving productivity by 10x and saving 40% operational cost.",
      "Designed, developed, tested, and deployed microservices applications and REST APIs using Angular, Vue, React, Node.js, Express, MongoDB, Jenkins, Docker and various Azure cloud services.",
      "Led and mentored other developers as the tech lead ensuring their growth and development initiating and contributing to a bi-weekly developer session covering different new tools/technologies used across the industry.",
    ],
    tags: [
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "angular",
        color: "yellow-text-gradient",
      },
      {
        name: "vue",
        color: "light-blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
  },
  {
    title: "Web Developer",
    company_name: "Illinois Institute of Technology",
    icon: iit,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - May 2018",
    points: [
      "Developed and maintained CSEP website http://ethics.iit.edu/ using CMS Drupal, JavaScript, PHP, MySQL.",
      "Fixed bugs in website's HTML content and JavaScript.",
      "Responsible for complete website and database backup to cloud storage.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "drupal",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Quinnox (DX group, U.K)",
    icon: quinnox,
    iconBg: "#383E56",
    date: "Aug 2014 - Jan 2017",
    points: [
      "Developed code for automating client reports that increased the accuracy of reports by 30%, purging mechanisms that reduced the number of tickets raised due to storage/disk space issues by 99% saving manual effect of 100+ support tickets annually and performed hotfix/change requests (CR) on critical production interfaces as required.",
      "Performed production Go-Live’s for new projects based on Agile development model that enhanced the business functionality and revenue by millions of dollars.",
      "Designed and developed business critical integrated order management interfaces that constituted 80% of the company’s revenue using webMethods Designer 8.2, MWS & IS, Broker, MS SQL Server 2008.",
      "Prepared support Standard Operating Procedure documents.",
    ],
    tags: [
      {
        name: "webmethods",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "sqlserver",
        color: "yellow-text-gradient",
      },
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Azhar has gotten more done than many graduate students assistants do in an entire semester. Mr. Shaikh is an extremely diligent and talented individual and has the foresight to find issues well before I do and solve them.",
    name: "Kelly Laas",
    designation: "Manager",
    company: "IIT Chicago(CSEP)",
    image: kelly,
  },
  {
    testimonial:
      "Azhar is one of the key resources at Hub I had pleasure working with. He is calm and composed in any situation and he is well known for his smart work across all the teams. His leadership skills and technical expertise are top notch. ",
    name: "Sai Rajesh",
    designation: "DevSecOps",
    company: "Hub Group Inc.",
    image: sai,
  },
  {
    testimonial:
      "When I think about Azhar, “commitment to work” is what I remember. Azhar was excellent in delivering the operational support to the clients, and always available for on-demand support from me or anyone from the team.",
    name: "Venkatesh K",
    designation: "Manager",
    company: "Quinnox",
    image: venki,
  },
];

const projects = [
  {
    name: "Serverless Youtube",
    description:
      "A cutting-edge video sharing platform with user authentication, smooth large file uploads, and instant transcoding to 480p mp4 format. Enjoy automatic real-time updates and seamless video playback from scalable cloud storage. Elevate your video sharing journey with Serverless YouTube.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: serverlessYT,
    source_code_link: "https://github.com/AzharShaikhSE/ServerlessYoutube/tree/master/Serverless_youtube",
  },
  {
    name: "Solo Drinker",
    description:
      "Web application that discovers companions for your drink plans with features like auto-complete search, Google API-enabled location tagging, seamless posting and viewing of potential company, and user-friendly Google Maps directions with Facebook authentication.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "googleapi",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: solodrinker,
    source_code_link: "https://github.com/AzharShaikhSE/SoloDrinker",
  },
  {
    name: "Hotel Hunt",
    description:
      "An enterprise web application revolutionizing hotel search and bookings. Explore a spectrum of features, including AJAX-driven auto-complete search, interactive chatbot functionality, reviews and ratings, Google Maps for easy directions, and even a unique deal match guarantee via Twitter API.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: hotelhunt,
    source_code_link: "https://github.com/AzharShaikhSE/HotelHunt",
  },
];

export { services, technologies, experiences, testimonials, projects };
