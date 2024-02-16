import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import Hero from '../src/components/sections/Hero';
import Projects from '../src/components/sections/Projects';
import Contact from '../src/components/sections/Contact';
import About from '../src/components/sections/About';

export const user = {
  firstName: 'Peter',
  lastName: 'Khalil',
  title: 'Frontend Developer',
  email: 'peter.khalil.fahmy@gmail.com',
  phone: '+201201920343',
  image: '/profile.jpg',
  description:
    " I'm a passionate frontend developer who loves to build web applications using modern technologies.",
};
export const socials = [
  {
    icon: <AiFillLinkedin />,
    link: 'https://www.linkedin.com/in/peter3khalil/',
  },
  { icon: <AiFillGithub />, link: 'https://github.com/Peter3Khalil' },
  { icon: <AiFillMail />, link: `mailto:${user.email}` },
  { icon: <AiOutlineWhatsApp />, link: `https://wa.me/${user.phone}` },
];

export const links = [
  { name: 'Home', id: 'hero', section: <Hero /> },
  { name: 'Projects', id: 'projects', section: <Projects /> },
  { name: 'About', id: 'about', section: <About /> },
  { name: 'Contact', id: 'contact', section: <Contact /> },
];
