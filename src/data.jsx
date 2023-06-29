import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import cakeMates from "./assets/cake-mates.png";
import accordionFun from "./assets/accordion-fun.png";
import dynamicNavPro from "./assets/dynamicNavPro.png";
import colorBurst from "./assets/color-burst.png";
import menuVerse from "./assets/menu-verse.png";
import slideEase from "./assets/slide-ease.png";
import sidebarSurfer from "./assets/sidebarSurfer.png";
import smartShopper from "./assets/shop-smart.png";
import opinionSpot from "./assets/opinion-spot.png";
import textGenius from "./assets/text-genius.png";
import tabMaster from "./assets/tab-master.png";
import navbar from "./assets/navbar.png";
import reactUseReducerCart from "./assets/reactUseReducerCart.png";
import windingWays from "./assets/winding-ways.png";

export const projects = [
  {
    title: "ReactUseReducerCart",
    url: "https://react-use-reducer-cart.netlify.app/",
    img: reactUseReducerCart,
    stack: [
      "React",
      "useState()",
      "useFetch()",
      "createContext()",
      "useContext()",
      "useReducer()",
      "react-icons",
    ],
    repo: "https://github.com/nataburdyey/react-useReducer-cart",
  },
  {
    title: "NavBarPro",
    url: "https://nav-bar-pro.netlify.app/",
    img: navbar,
    stack: ["React", "useState()", "useRef()", "react-icons"],
    repo: "https://github.com/nataburdyey/nav-pro",
  },
  {
    title: "Color Burst",
    url: "https://color-burst.netlify.app/",
    img: colorBurst,
    stack: ["React", "useState()", "react-toastify", "nanoid"],
    repo: "https://github.com/nataburdyey/color-burst",
  },
  {
    title: "Accordion Fun",
    url: "https://accordion-fun.netlify.app/",
    img: accordionFun,
    stack: ["React", "useState()", "react-icons"],
    repo: "https://github.com/nataburdyey/accordion-fun",
  },
  {
    title: "DynamicNavPro",
    url: "https://dynamic-nav-pro.netlify.app/",
    img: dynamicNavPro,
    stack: [
      "React",
      "useState()",
      "createContext()",
      "useContext()",
      "custom hooks",
      "react-icons",
    ],
    repo: "https://github.com/nataburdyey/dynamic-nav-pro",
  },

  {
    title: "MenuVerse",
    url: "https://menu-verse.netlify.app/",
    img: menuVerse,
    stack: ["React", "useState()"],
    repo: "https://github.com/nataburdyey/menuverse",
  },
  {
    title: "SlideEase",
    url: "https://slide-ease.netlify.app/",
    img: slideEase,
    stack: ["React", "useState()", "useEffect()", "react-icons", "react-slick"],
    repo: "https://github.com/nataburdyey/slide-ease",
  },
  {
    title: "Sidebar Surfer",
    url: "https://sidebar-surfer.netlify.app/",
    img: sidebarSurfer,
    stack: [
      "React",
      "useState()",
      "createContext()",
      "useContext()",
      "custom hooks",
      "react-icons",
    ],
    repo: "https://github.com/nataburdyey/sidebar-surfer",
  },
  {
    title: "Smart Shopper",
    url: "https://smart-shopper.netlify.app/",
    img: smartShopper,
    stack: ["React", "useState()", "nanoid", "react-toastify"],
    repo: "https://github.com/nataburdyey/smart-shopper",
  },
  {
    title: "Opinion Spot",
    url: "https://opinion-spot.netlify.app/",
    img: opinionSpot,
    stack: ["React", "useState()", "react-icons"],
    repo: "https://github.com/nataburdyey/reviews-app",
  },
  {
    title: "TextGenius",
    url: "https://text-genius.netlify.app/",
    img: textGenius,
    stack: ["React", "useState()", "nanoid"],
    repo: "https://github.com/nataburdyey/text-genius",
  },
  {
    title: "Tab Master",
    url: "https://tab-master.netlify.app/ ",
    img: tabMaster,
    stack: ["React", "useState()", "useEffect()", "react-icons", "uuid"],
    repo: "https://github.com/nataburdyey/tab-master",
  },
  {
    title: "Cake Mates",
    url: "https://cake-mates.netlify.app/",
    img: cakeMates,
    stack: ["React", "useState()"],
    repo: "https://github.com/nataburdyey/cake-mates",
  },
  {
    title: "Winding Ways",
    url: "https://winding-ways.netlify.app/",
    img: windingWays,
    stack: ["HTML", "React"],
    repo: "https://github.com/nataburdyey/winding-ways",
  },
];

export const links = [
  {
    id: 1,
    url: "https://github.com/nataburdyey",
    icon: <FaGithub />,
    color: "#000000",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/natalia-burdyey/",
    icon: <FaLinkedin />,
    color: "#0072b1",
  },
];
