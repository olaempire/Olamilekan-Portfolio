import reactLogo from '@/assets/react 01.png';
import typescriptLogo from '@/assets/typescript.jpg';
import htmlCssLogo from '@/assets/HTML AND CSS.jpg';
import javascriptLogo from '@/assets/JAVASCRIPT.jpg';
import wordpressLogo from '@/assets/WORDPRESS.jpg';
import tailwindLogo from '@/assets/Tailwind CSS.png';
import uiuxLogo from '@/assets/UI AND UX.svg';
import vueLogo from '@/assets/VUE.png';
import angularLogo from '@/assets/ANGULAR.svg';
import gsapLogo from '@/assets/GSAP.jpg';
import expressLogo from '@/assets/EXPRESS.png';
import nextLogo from '@/assets/NEXTJS.png';
import supabaseLogo from '@/assets/SUPABASE.png';
import mongoLogo from '@/assets/MONGODB.svg';
import nodeLogo from '@/assets/NODEJS.png';
import framerLogo from '@/assets/FRAMER-MOTION.jpg';

import femoyladLogo from '@/assets/FEMOYLAD STORE.jpg';
import xoLogo from '@/assets/XO.jpg';
import bestWishesLogo from '@/assets/BEST WISHES.jpg';

export const PROJECTS = [
  {
    id: '1',
    title: 'FEMOYLAD STORE',
    category: 'E-COMMERCE',
    description: 'Shop for your Gadgets',
    color: 'pink' as const,
    year: '2024',
    logo: femoyladLogo,
  },
  {
    id: '2',
    title: 'TIC-TAC-TOK',
    category: 'GAME DESIGN',
    description: 'Play and Enjoy',
    color: 'cyan' as const,
    year: '2025',
    logo: xoLogo,
  },
  {
    id: '3',
    title: 'GIFTED JEWELRY',
    category: 'DESIGN SYSTEM',
    description: 'Original and Certified Jewelry',
    color: 'orange' as const,
    year: '2024',
    logo: null, 
  },
  {
    id: '4',
    title: 'BEST WISHES STORE',
    category: 'E-COMMERCE',
    description: 'Get all you need from shopping online to getting it delivered to your doorstep',
    color: 'yellow' as const,
    year: '2024',
    logo: bestWishesLogo,
  },
];

export const SKILLS = [
  { name: 'REACT', level: 95, logo: reactLogo },
  { name: 'TypeScipt', level: 90, logo: typescriptLogo },
  { name: 'HTML/CSS', level: 95, logo: htmlCssLogo },
  { name: 'JavaScript', level: 90, logo: javascriptLogo },
  { name: 'Wordpress', level: 88, logo: wordpressLogo },
  { name: 'Tailwind', level: 90, logo: tailwindLogo },
  { name: 'UI/UX', level: 90, logo: uiuxLogo },
  { name: 'VUE', level: 75, logo: vueLogo },
  { name: 'Angular', level: 95, logo: angularLogo },
  { name: 'GSAP', level: 90, logo: gsapLogo },
  { name: 'Express', level: 88, logo: expressLogo },
  { name: 'NextJs', level: 75, logo: nextLogo },
  { name: 'Supabase', level: 95, logo: supabaseLogo },
  { name: 'MongoDb', level: 90, logo: mongoLogo },
  { name: 'Nodejs', level: 88, logo: nodeLogo },
  { name: 'Framer-motion', level: 75, logo: framerLogo },
];

export const NAV_ITEMS = ['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'];