import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

export const contact = [
  {
    id: 1,
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/share/1Ce9RpRkaJ/",
  },
  {
    id: 2,
    name: "GitHub",
    icon: FaGithubAlt,
    link: "https://github.com/AwirutJr",
  },
  {
    id: 3,
    name: "Instagram",
    icon: RiInstagramFill,
    link: "https://www.instagram.com/awirut_ck/",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/",
  },
];

export const data = [
  {
    id: 1,
    title: "TUBC SUMMIT",
    Img: "/Project/TUBC.png",
    Video: "",
    Detail: [
      {
        project: "TUBC SUMMIT 2025",
        work: "This project, held at PUEY UNGPHAKORN CENTENARY HALL AND PARK, Thammasat University, Rangsit, brought together participants from various sectors to foster knowledge exchange and development in 2025. I contributed by improving UX/UI design, implementing responsive layouts to enhance usability across devices, and working on the front-end development of event management systems and online registration platforms.",
      },
    ],
  },
  {
    id: 2,
    title: "Lexoration",
    Img: "/Project/Lexoration.png",
    Video: "",
    Detail: [
      {
        project: "Online Programming Course Platform (with Admin Panel)",
        work: "Developed a fully responsive platform for buying and selling programming courses using React.js, Tailwind CSS, shadcn/ui, and Framer Motion. Backend features include course management, recommendation API, payment gateway, and an admin panel using Node.js and Express.js.",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "AwirutShop",
  //   Img: "/programer/js.png",
  //   Video: "",
  //   Detail: [
  //     {
  //       project: "Single-Vendor E-commerce Platform (B2C with Admin Panel)",
  //       work: "Created a single-seller e-commerce site using React.js, Tailwind CSS, shadcn/ui, and Framer Motion. Built backend with Node.js and Express.js to support product management, recommendation API, payment gateway, and an admin dashboard.",
  //     },
  //   ],
  // },
];

export const navbar = {
  Home: "#profile",
  WorkShop: "#workshop",
  Skill: "#skill",
};

export const skill = [
  {
    id: 1,
    title: "Programming Languages",
    logo: [
      { id: 1, image: "/programer/html.png" },
      { id: 2, image: "/programer/css.png" },
      { id: 3, image: "/programer/js.png" },
      { id: 4, image: "/programer/php.png" },
      { id: 5, image: "/programer/type.png" },
      { id: 6, image: "/programer/sql.png" },
    ],
  },
  {
    id: 2,
    title: "Frameworks / Technicals",
    logo: [
      { id: 7, image: "/frameworks/react.png" },
      { id: 8, image: "/frameworks/next.png" },
      { id: 9, image: "/frameworks/node.png" },
      { id: 10, image: "/frameworks/ex.png" },
      { id: 11, image: "/frameworks/tailwind.svg" },
    ],
  },
  {
    id: 3,
    title: "Database",
    logo: [
      { id: 12, image: "/db/mysql.png" },
      { id: 13, image: "/db/p.png" },
      { id: 14, image: "/db/prisma.svg" },
      { id: 15, image: "/db/Supabase.png" },
    ],
  },
  {
    id: 4,
    title: "Tools",
    logo: [
      { id: 16, image: "/tools/git.png" },
      { id: 17, image: "/tools/github.png" },
      { id: 18, image: "/tools/post.png" },
      { id: 19, image: "/tools/docker.png" },
      { id: 20, image: "/tools/vercel.png" },
      { id: 21, image: "/tools/figma.png" },
    ],
  },
];
