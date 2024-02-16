import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export const socials = [
  {
    icon: <AiFillLinkedin />,
    link: 'https://www.linkedin.com/in/peter3khalil/',
  },
  { icon: <AiFillGithub />, link: 'https://github.com/Peter3Khalil' },
  { icon: <AiFillMail />, link: 'mailto:peter.khalil.fahmy@gmail.com' },
];

export const links = [{name:'Home',id:"hero"},{name:'Services',id:"services"},{name:"Projects",id:"projects"},{name:'Contact',id:"contact"}];

export const user = {
  firstName: 'Peter',
  lastName: 'Khalil',
  title: 'Frontend Developer',
  image: '/profile.jpg',
  description: " I'm a passionate frontend developer who loves to build web applications using modern technologies."
};
