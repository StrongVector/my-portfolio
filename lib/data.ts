import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/2.png";
import ozdevsImg from "@/public/1.png";
import assetTradingImg from "@/public/4.png";
// import euphorusImg from "@/public/euphorus-two.png";
// import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/2-2.png";
// import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/1-1.png"; 
import hizenimg from "@/public/5.png"; 
// import binaryGameImg from "@/public//binary-game.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Web designer,frontend developer",
    location: "Darwoft",
    description:
      "**Developed interactive and responsive web applications using React and Vue.js,enhancing user experience. **Implemented UI/UX designs from mockups and prototypes, ensuring cross browser compatibility.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2009 - January 2014",
  },
  {
    title: "Full stack Developer",
    location: "C&S",
    description:
      "**Contributed to the successful launch of several small projects, gaining hands-on experience in both front-end and back-end development.**Improved application performance by optimizing existing code and implementing best practices.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2015 - November 2020",
  },
  {
    title: "Ecommerce developer",
    location: "The Fuzzy Fish",
    description:
      "**Spearheaded the development of a scalable e-commerce platform that resulted in a 40% increase in user engagement and a 25% rise in revenue. **Improved application performance by 30% through backend optimization and front-end refactoring. **Successfully migrated a legacy system to a modern tech stack, reducing technical debt and improving maintainability",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - September 2023",
  },
] as const;

export const projectsData = [
  {
    title: "SPARKLEinPINK",
    description: "This site is for children. In this, all guests can buy clothes and things for school and users can sell the things. React, scss for frontend and shopify, express, node.js for backend. I was charge of frontend",
    tags: ["shopify", "react", "scss", "express", "nodejs"],
    icons: [
      "logos:shopify",
      "logos:react",
      "logos:scss",
      "logos:express",
      "logos:nodejs-icon",
    ],
    imageUrl: familyTreeImg,
    githubLink: "https://github.com/StrongVector/clothes-ecommerce-mern",
    urlLink: "https://sparkleinpink.com ",
  },
  {
    title: "LEVANTINE",
    description:
      "This site is for children. In this, all guests can buy clothes and things for school and users can sell the things. React, scss for frontend and shopify, node.js for backend. I was charge of backend",
    tags: ["shopify", "react", "scss", "nodejs"],
    icons: [
      "logos:shopify",
      "logos:react",
      "logos:scss",
      "logos:nodejs-icon",
    ],
    imageUrl: techprowlImg,
    githubLink: "https://github.com/StrongVector/Apotek-full-laravel",
    urlLink: "https://levantinebags.com/",
  },
  {
    title: "Poly&Bark",
    description:
      "Poly&Bark site is e-shop site for selling and buying furnitures. Frontend is made by reat + tailwind + scss. All elements is based on shopify",
    tags: ["shopify", "react", "typescript", "tailwindcss", "scss", "express", "node"],
    icons: [
      "logos:shopify",
      "logos:react",
      "logos:typescript",
      "logos:tailwindcss",
      "logos:scss",
      "logos:express",
      "logos:nodejs-icon",
    ],
    imageUrl: cryptoCrowdImg,
    githubLink: "https://github.com/StrongVector/react-medusa",
    urlLink: "https://alshaabfurniture.com/",
  },
  {
    title: "Pink the cat",
    description:
      "Pink the cat is e-shop site for selling and buying tools. Frontend is made by react + scss. Backend is on shopify. I was charge of backend and I had completed it without any fault",
    tags: ["shopify", "react", "typescript", "scss", "express", "nodejs"],
    icons: [
      "logos:shopify",
      "logos:react",
      "logos:typescript",
      "logos:scss",
      "logos:express",
      "logos:nodejs-icon",
    ],
    imageUrl: assetTradingImg,
    urlLink: "https://eratchet.com/",
    githubLink: "https://github.com/StrongVector/macketplace-medusa",
  },
  {
    title: "NEEDED",
    description:
      "E-shop system written in react + shopify. Product management system via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.",
    tags: ["Java", "MariaDB", "shopify", "react"],
    icons: ["logos:java", "logos:mariadb-icon", "logos:shopify", "logos:react"],
    imageUrl: ozdevsImg,
    githubLink: "https://github.com/StrongVector/vue-medusa",
    urlLink: "https://thisisneeded.com/",
  },
  {
    title: "HiZEN",
    description:
      "E-shop system written in three.js + openai  + javascript + shopify. Charged of vaporizer marketing, and sale. I was charge of questionaire and 3D modeling display",
    tags: ["JavaScript",  "shopify", "tabler:brand-threejs"],
    icons: ["logos:javascript",  "logos:shopify", "logos: openai"],
    imageUrl: hizenimg,
    // githubLink: "https://github.com/StrongVector/vue-medusa",
    urlLink: "https://en.hizen.de/",
  },
] as const;

export const skillsData = [
  {
    name: "Shopify",
    icon: "logos:shopify",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },

  {
    name: "Laravel",
    icon: "logos:laravel",
  },
  {
    name: "",
    icon: "logos:tailwindcss",
  },
  {
    name: "less",
    icon: "logos:less",
  },
  // {
  //   name: "Symfony",
  //   icon: "logos:symfony",
  // },
  {
    name: "Python",
    icon: "logos:python",
  },
  // {
  //   name: "Java",
  //   icon: "logos:java",
  // },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  // {
  //   name: "MySQL",
  //   icon: "logos:SQL",
  // },
  {
    name: "",
    icon: "logos:mongodb",
  },
  {
    name: "",
    icon: "logos:express",
  },
  // {
  //   name: "Linux",
  //   icon: "flat-color-icons:linux",
  // },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  // {
  //   name: "Jenkins",
  //   icon: "devicon:jenkins",
  // },

] as const;
