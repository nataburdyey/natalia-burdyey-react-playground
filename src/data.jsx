import React from 'react';
import { nanoid } from 'nanoid';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiRedux,
  SiReactquery,
  SiTestinglibrary,
  SiReactrouter,
  SiCypress,
} from 'react-icons/si';
import cakeMates from './assets/cake-mates.png';
import accordionFun from './assets/accordion-fun.png';
import dynamicNavPro from './assets/dynamic-nav.png';
import colorBurst from './assets/color-burst.png';
import menuVerse from './assets/menu-verse.png';
import slideEase from './assets/slide-ease.png';
import sidebarSurfer from './assets/sidebarSurfer.png';
import smartShopper from './assets/smart-shopper.png';
import opinionSpot from './assets/opinion-spot.png';
import textGenius from './assets/text-genius.png';
import tabMaster from './assets/tab-master.png';
import navbar from './assets/navbar.png';
import reactUseReducerCart from './assets/use-reducer-cart.png';
import windingWays from './assets/winding-ways.png';
import unsplashMagic from './assets/unsplash-magic.png';
import sipCraft from './assets/sip-craft.png';
import cushyComfort from './assets/cushycomfort.png';
import reduxToolkitCart from './assets/redux-toolkit-cart.png';
import contentfulCms from './assets/contentful-cms.png';
import jobhuntx from './assets/jobhuntx.png';

export const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'React Router',
  'Redux',
  'React Query',
  'React Testing Library',
  'Cypress',
];

export const devTools = [
  {
    id: nanoid(),
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: <SiJavascript />,
  },
  {
    id: nanoid(),
    url: 'https://www.typescriptlang.org/',
    icon: <SiTypescript />,
  },
  {
    id: nanoid(),
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: <SiHtml5 />,
  },
  {
    id: nanoid(),
    url: 'https://www.w3.org/Style/CSS/',
    icon: <SiCss3 />,
  },
  {
    id: nanoid(),
    url: 'https://react.dev/',
    icon: <SiReact />,
  },
  {
    id: nanoid(),
    url: 'https://reactrouter.com/',
    icon: <SiReactrouter />,
  },
  {
    id: nanoid(),
    url: 'https://redux.js.org/',
    icon: <SiRedux />,
  },
  {
    id: nanoid(),
    url: 'https://tanstack.com/query/latest/docs/react/overview',
    icon: <SiReactquery />,
  },
  {
    id: nanoid(),
    url: 'https://testing-library.com/docs/react-testing-library/intro/',
    icon: <SiTestinglibrary />,
  },
  {
    id: nanoid(),
    url: 'https://www.cypress.io/',
    icon: <SiCypress />,
  },
];

export const links = [
  {
    id: nanoid(),
    url: 'https://github.com/nataburdyey',
    icon: <FaGithub />,
    color: '#000000',
  },
  {
    id: nanoid(),
    url: 'https://www.linkedin.com/in/natalia-burdyey/',
    icon: <FaLinkedin />,
    color: '#0072b1',
  },
];

export const reactHookSnippets = [
  {
    id: nanoid(),
    title: 'ReactUseReducerCart',
    url: 'https://react-use-reducer-cart.netlify.app/',
    img: reactUseReducerCart,
    stack: [
      'useState',
      'useEffect',
      'createContext',
      'useContext',
      'useReducer',
      'React Icons',
    ],
    repo: 'https://github.com/nataburdyey/react-useReducer-cart',
  },
  {
    id: nanoid(),
    title: 'DynamicNavPro',
    url: 'https://dynamic-nav-pro.netlify.app/',
    img: dynamicNavPro,
    stack: [
      'useState',
      'createContext',
      'useContext',
      'custom hooks',
      'React Icons',
    ],
    repo: 'https://github.com/nataburdyey/dynamic-nav-pro',
  },
  {
    id: nanoid(),
    title: 'SidebarSurfer',
    url: 'https://sidebar-surfer.netlify.app/',
    img: sidebarSurfer,
    stack: [
      'useState',
      'createContext',
      'useContext',
      'custom hooks',
      'React Icons',
    ],
    repo: 'https://github.com/nataburdyey/sidebar-surfer',
  },
  {
    id: nanoid(),
    title: 'Navtastic',
    url: 'https://navtastic.netlify.app/',
    img: navbar,
    stack: ['useState', 'useRef', 'React Icons'],
    repo: 'https://github.com/nataburdyey/nav-pro',
  },
  {
    id: nanoid(),
    title: 'TabMaster',
    url: 'https://tab-master.netlify.app/ ',
    img: tabMaster,
    stack: ['useState', 'useEffect', 'uuid', 'React Icons'],
    repo: 'https://github.com/nataburdyey/tab-master',
  },
  {
    id: nanoid(),
    title: 'SlideEase',
    url: 'https://slide-ease.netlify.app/',
    img: slideEase,
    stack: ['useState', 'useEffect', 'React Icons', 'React Slick Carousel'],
    repo: 'https://github.com/nataburdyey/slide-ease',
  },
  {
    id: nanoid(),
    title: 'SmartShopper',
    url: 'https://smart-shopper.netlify.app/',
    img: smartShopper,
    stack: ['useState', 'nanoid', 'form', 'Local Storage', 'React-Toastify'],
    repo: 'https://github.com/nataburdyey/smart-shopper',
  },
  {
    id: nanoid(),
    title: 'ColorBurst',
    url: 'https://color-burst.netlify.app/',
    img: colorBurst,
    stack: [
      'useState',
      'nanoid',
      'form',
      'Navigator: clipboard',
      'React-Toastify',
    ],
    repo: 'https://github.com/nataburdyey/color-burst',
  },
  {
    id: nanoid(),
    title: 'TextGenius',
    url: 'https://text-genius.netlify.app/',
    img: textGenius,
    stack: ['useState', 'nanoid', 'form'],
    repo: 'https://github.com/nataburdyey/text-genius',
  },
  {
    id: nanoid(),
    title: 'MenuVerse',
    url: 'https://menu-verse.netlify.app/',
    img: menuVerse,
    stack: ['useState'],
    repo: 'https://github.com/nataburdyey/menuverse',
  },
  {
    id: nanoid(),
    title: 'AccordionFun',
    url: 'https://accordion-fun.netlify.app/',
    img: accordionFun,
    stack: ['useState', 'React Icons'],
    repo: 'https://github.com/nataburdyey/accordion-fun',
  },
  {
    id: nanoid(),
    title: 'OpinionSpot',
    url: 'https://opinion-spot.netlify.app/',
    img: opinionSpot,
    stack: ['useState', 'React Icons'],
    repo: 'https://github.com/nataburdyey/reviews-app',
  },
  {
    id: nanoid(),
    title: 'CakeMates',
    url: 'https://cake-mates.netlify.app/',
    img: cakeMates,
    stack: ['useState'],
    repo: 'https://github.com/nataburdyey/cake-mates',
  },
  {
    id: nanoid(),
    title: 'WindingWays',
    url: 'https://winding-ways.netlify.app/',
    img: windingWays,
    stack: ['HTML', 'React'],
    repo: 'https://github.com/nataburdyey/winding-ways',
  },
];

export const reduxReactQueryRouterProjects = [
  {
    id: nanoid(),
    title: 'ReduxToolkitCart',
    url: 'https://toolkit-cart-app.netlify.app/',
    img: reduxToolkitCart,
    stack: [
      'Redux',
      'Redux Toolkit',
      'Immer',
      'Redux Thunk',
      'Redux DevTools',
      'Heroicons',
    ],
    repo: '',
  },
  {
    id: nanoid(),
    title: 'UnsplashMagic',
    url: 'https://unsplash-magic.netlify.app/',
    img: unsplashMagic,
    stack: [
      'React Query',
      'React Query Devtools',
      'Axios',
      'React Icons',
      'Dark Mode',
      'Unsplash API',
    ],
    repo: 'https://github.com/nataburdyey/unsplash-magic',
  },
  {
    id: nanoid(),
    title: 'SipCraft',
    url: 'https://sip-craft.netlify.app/',
    img: sipCraft,
    stack: [
      'React Query',
      'React Router 6',
      'Axios',
      'Styled Components',
      'React-Toastify',
      'TheCocktailDB API',
    ],
    repo: 'https://github.com/nataburdyey/sip-craft',
  },
  {
    id: nanoid(),
    title: 'Contentful CMS',
    url: '',
    img: contentfulCms,
    stack: ['Contentful API'],
    repo: '',
  },
];

export const largeScaleProjects = [
  {
    id: nanoid(),
    title: 'e-commerce: Cushy Comfort',
    url: 'https://cushy-comfort.netlify.app/',
    img: cushyComfort,
    stack: [
      'React Context API',
      'React Router 6',
      'AuthO',
      'Stripe API',
      'Axios',
      'Formspree',
      'Netlify Functions',
      'Styled Components',
      'React Icons'
    ],
    repo: 'https://github.com/nataburdyey/e-commerce-app',
  },
  {
    id: nanoid(),
    title: 'Job tracking app: JobHuntX',
    url: 'https://jobhuntx.netlify.app/',
    img: jobhuntx,
    stack: [
      'React Router 6',
      'Redux Toolkit',
      'Recharts',
      'Axios',
      'Local Storage',
      'Pagination',
      'Styled Components',
      'React Icons',
      'React-Tostify'
    ],
    repo: 'https://github.com/nataburdyey/job-hunt-x',
  },
];

export const stateManagementProjects = [
  {
    id: nanoid(),
    title: 'ReduxToolkitCart',
    url: 'https://toolkit-cart-app.netlify.app/',
    img: reduxToolkitCart,
    stack: [
      'Redux',
      'Redux Toolkit',
      'Immer',
      'Redux Thunk',
      'Redux DevTools',
      'Heroicons',
    ],
    repo: '',
  },
];
