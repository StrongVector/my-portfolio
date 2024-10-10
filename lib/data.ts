import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/2.png";
import ozdevsImg from "@/public/1.png";
import assetTradingImg from "@/public/4.png";
import techprowlImg from "@/public/2-2.png";
import familyTreeImg from "@/public/1-1.png";
import rymo from "@/public/RYMO.png";
import electropia from "@/public/electropia.png";
import hizenimg from "@/public/5.png";
import smoke from "@/public/smoke.png";


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
    title: "HiZEN",
    tags: ["JavaScript", "shopify", "tabler:brand-threejs"],
    icons: ["logos:javascript", "logos:shopify", "logos: openai"],
    imageUrl: hizenimg,
    urlLink: "https://en.hizen.de/",
  },
  {
    title: "Smoke2Snack",
    tags: ["react", "shopify", "node.js"],
    icons: ["logos:react", "logos:shopify","logos:nodejs"],
    imageUrl: smoke,
    urlLink: "https://smoke2snack.com/",
  },
  {
    title: "Electropia",
    tags: ["next.js", "shopify" , "nodejs"],
    icons: ["logos:nextjs", "logos:shopify","logos:nodejs"],
    imageUrl: electropia,
    urlLink: "https://72c916-e5.myshopify.com/",
  },
  {
    title: "LEVANTINE",
    tags: ["shopify", "wordpress", "scss", "nodejs"],
    icons: [
      "logos:shopify",
      "logos:wordpress",
      "logos:scss",
      "logos:nodejs-icon",
    ],
    imageUrl: techprowlImg,
    urlLink: "https://levantinebags.com/",
  },
  {
    title: "Pink the cat",
    tags: ["shopify", "react", "typescript", "scss","nodejs"],
    icons: [
      "logos:shopify",
      "logos:react",
      "logos:typescript",
      "logos:scss",
      "logos:nodejs"
    ],
    imageUrl: assetTradingImg,
    urlLink: "https://eratchet.com/",
  },
    {
    title: "RYMO",
    description:
      "Powerful MERN Stack Ecommerce Project using React, Redux, Node.js, Express, MongoDB, Stripe.We are going to using Redux for state management, stipe to handle our payments, Cloudinary to handle our images, and follow the best practices to implement Authentication & Authorization. ",
    tags: ["react", "express", "scss", "mongodb","nodejs"],
    icons: [
      "logos:react",
      "logos:express",
      "logos:scss",
      "logos:mongodb",
      "logos:nodejs"
    ],
    imageUrl: rymo,
    urlLink: "https://e-shop-app.onrender.com/",
    githubLink: "https://github.com/StrongVector/ecommerce-mern-full",
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
    name: "",
    icon: "logos:wordpress",
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
  {
    name: "Python",
    icon: "logos:python",
  },
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
  {
    name: "",
    icon: "logos:mongodb",
  },
  {
    name: "",
    icon: "logos:express",
  },
  {
    name: "next.js",
    icon: "logos:nextjs",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },

] as const;
