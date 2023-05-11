import {
  mobile,
  backend,
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
  docker,
  elbit,
  angular,
  gamehub,
  netflix,
  pizza,
  airbnb,
  threejs,
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
    id: "projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
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
    name: "angular",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Angular Developer",
    company_name: "Elbit Systems.",
    icon: elbit,
    iconBg: "#383E56",
    date: "February 2022 - February 2023",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Write clean, well-documented, and maintainable code.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "as a graduate.",
    icon: reactjs,
    iconBg: "#383E56",
    date: "October 2019 - February 2022",
    points: [
      "As a React developer, I am working on personal projects and building my portfolio to showcase my abilities and expertise in the field.",
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Write clean, well-documented, and maintainable code.",
    ],
  },
];

const projects = [
  {
    name: "Game Hub",
    description:
      "Web-based platform that serves as a comprehensive database and social network for video game enthusiasts. Users can create profiles, track their game collections, write reviews, and connect with other gamers. The site also offers features such as game recommendations and game discovery, making it a popular destination for gamers of all levels.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "very-blue-text-gradient",
      },

      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
    ],
    image: gamehub,
    source_code_link: "https://github.com/GalPalas/game-hub",
    website_link: "https://game-hub-nine-rho.vercel.app/",
  },
  {
    name: "Airbnb",
    description:
      "Web-based platform for vacation rentals inspired by the popular vacation rental service, Airbnb. Our platform is designed to provide users with a seamless and personalized experience, allowing them to search for and book vacation rentals from around the world,the site also offers users can easily search for properties by location, dates, and budget.",
    tags: [
      {
        name: "nextjs",
        color: "gray-text-gradient",
      },
      {
        name: "typescript",
        color: "very-blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/GalPalas/Airbnb",
    website_link: "https://galpalas-airbnb.vercel.app/",
  },
  {
    name: "Netflix",
    description:
      "web-based platform that offering a comprehensive streaming service for TV shows and movies. Users can create personalized profiles, browse a vast library of content, and easily stream their favorite TV shows and movies on any device. The site also offers features such as recommendations and discovery, helping users to discover new content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/GalPalas/Netflix-website",
    website_link: "https://gal-netflix-demo.netlify.app/",
  },
  {
    name: "Pizza Planet",
    description:
      "Pizza Planet is a web-based platform that offers a convenient and efficient way to order delicious pizza from the comfort of your own home. Our website is dedicated to providing the best online ordering experience for pizza lovers, with a wide selection of menu options, customizable toppings, and easy-to-use features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/GalPalas/pizza-website",
    website_link: "https://gal-pizza-planet.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
