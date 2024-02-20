import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

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
    name: 'LinkedIn',
  },
  {
    icon: <AiFillGithub />,
    link: 'https://github.com/Peter3Khalil',
    name: 'GitHub',
  },
  { icon: <AiFillMail />, link: `mailto:${user.email}`, name: 'Email' },
  {
    icon: <AiOutlineWhatsApp />,
    link: `https://wa.me/${user.phone}`,
    name: 'WhatsApp',
  },
];

export const links = [
  { name: 'Home', id: 'hero' },
  { name: 'Projects', id: 'projects' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];
