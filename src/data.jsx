import React from "react";
import { nanoid } from "nanoid";
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
import unsplashMagic from "./assets/unsplash-magic.png";

export const links = [
  {
    id: nanoid(),
    url: "https://github.com/nataburdyey",
    icon: <FaGithub />,
    color: "#000000",
  },
  {
    id: nanoid(),
    url: "https://www.linkedin.com/in/natalia-burdyey/",
    icon: <FaLinkedin />,
    color: "#0072b1",
  },
];

export const reactHookSnippets = [
  {
    id: nanoid(),
    title: "ReactUseReducerCart",
    url: "https://react-use-reducer-cart.netlify.app/",
    img: reactUseReducerCart,
    stack: [
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
    id: nanoid(),
    title: "DynamicNavPro",
    url: "https://dynamic-nav-pro.netlify.app/",
    img: dynamicNavPro,
    stack: [
      "useState()",
      "createContext()",
      "useContext()",
      "custom hooks",
      "react-icons",
    ],
    repo: "https://github.com/nataburdyey/dynamic-nav-pro",
  },
  {
    id: nanoid(),
    title: "SidebarSurfer",
    url: "https://sidebar-surfer.netlify.app/",
    img: sidebarSurfer,
    stack: [
      "useState()",
      "createContext()",
      "useContext()",
      "custom hooks",
      "react-icons",
    ],
    repo: "https://github.com/nataburdyey/sidebar-surfer",
  },
  {
    id: nanoid(),
    title: "NavBarPro",
    url: "https://nav-bar-pro.netlify.app/",
    img: navbar,
    stack: ["useState()", "useRef()", "react-icons"],
    repo: "https://github.com/nataburdyey/nav-pro",
  },
  {
    id: nanoid(),
    title: "TabMaster",
    url: "https://tab-master.netlify.app/ ",
    img: tabMaster,
    stack: ["useState()", "useEffect()", "react-icons", "uuid"],
    repo: "https://github.com/nataburdyey/tab-master",
  },
  {
    id: nanoid(),
    title: "SlideEase",
    url: "https://slide-ease.netlify.app/",
    img: slideEase,
    stack: ["useState()", "useEffect()", "react-icons", "react-slick"],
    repo: "https://github.com/nataburdyey/slide-ease",
  },
  {
    id: nanoid(),
    title: "SmartShopper",
    url: "https://smart-shopper.netlify.app/",
    img: smartShopper,
    stack: ["useState()", "nanoid", "react-toastify", "Local Storage"],
    repo: "https://github.com/nataburdyey/smart-shopper",
  },
  {
    id: nanoid(),
    title: "ColorBurst",
    url: "https://color-burst.netlify.app/",
    img: colorBurst,
    stack: ["useState()", "react-toastify", "nanoid"],
    repo: "https://github.com/nataburdyey/color-burst",
  },
  {
    id: nanoid(),
    title: "TextGenius",
    url: "https://text-genius.netlify.app/",
    img: textGenius,
    stack: ["useState()", "nanoid"],
    repo: "https://github.com/nataburdyey/text-genius",
  },
  {
    id: nanoid(),
    title: "MenuVerse",
    url: "https://menu-verse.netlify.app/",
    img: menuVerse,
    stack: ["useState()"],
    repo: "https://github.com/nataburdyey/menuverse",
  },
  {
    id: nanoid(),
    title: "AccordionFun",
    url: "https://accordion-fun.netlify.app/",
    img: accordionFun,
    stack: ["useState()", "react-icons"],
    repo: "https://github.com/nataburdyey/accordion-fun",
  },
  {
    id: nanoid(),
    title: "OpinionSpot",
    url: "https://opinion-spot.netlify.app/",
    img: opinionSpot,
    stack: ["useState()", "react-icons"],
    repo: "https://github.com/nataburdyey/reviews-app",
  },
  {
    id: nanoid(),
    title: "CakeMates",
    url: "https://cake-mates.netlify.app/",
    img: cakeMates,
    stack: ["useState()"],
    repo: "https://github.com/nataburdyey/cake-mates",
  },
  {
    id: nanoid(),
    title: "WindingWays",
    url: "https://winding-ways.netlify.app/",
    img: windingWays,
    stack: ["HTML", "React"],
    repo: "https://github.com/nataburdyey/winding-ways",
  },
];

export const reactQueryProjects = [
  {
    id: nanoid(),
    title: "UnsplashMagic",
    url: "https://unsplash-magic.netlify.app/",
    img: unsplashMagic,
    stack: [
      "react-query",
      "react-query-devtools",
      "react-icons",
      "Unsplash API",
      "Dark Mode",
      "useState()",
      "useFetch()",
      "createContext()",
      "useContext()",
    ],
    repo: "https://github.com/nataburdyey/unsplash-magic",
  },
];
