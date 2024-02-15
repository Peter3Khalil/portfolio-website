import React from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu,
} from 'react-icons/ai';
import { cn } from '../utils/helperFunctions';
import { socials,links, user } from '../../public/data';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="flex sticky top-0 z-10 h-16 w-full shrink-0 items-center justify-between bg-background px-4 text-foreground shadow-sm md:px-6 lg:px-10">
        <Logo/>
      <nav className="hidden h-full md:block">
        <ul className="flex h-full gap-6">
          {links.map((link, i) => (
            <li
              key={i}
              className="flex h-full cursor-pointer items-center justify-center border-b-2 border-transparent hover:border-primary"
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={toggleMenu} className="text-2xl md:hidden">
        <AiOutlineMenu />
      </button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed z-10 right-0 top-0 flex h-screen w-full transition-all duration-700 ease-in-out ${
        isOpen ? 'translate-x-0':'translate-x-full'
      }`}
    >
      {/* Modal */}
      <div onClick={toggleMenu} className="h-full w-full bg-foreground/5"></div>
      <nav className="relative flex h-full w-[70%] shrink-0 flex-col gap-10 bg-background p-6 text-foreground">
        <button onClick={toggleMenu} className="self-end text-2xl">
          <AiOutlineClose />
        </button>
        <ul className="flex flex-col gap-2">
          {links.map((link, i) => (
            <li
              key={i}
              className="flex h-14 w-full cursor-pointer items-center border-b transition-all duration-300 ease-in-out hover:border-primary dark:border-foreground/20 dark:hover:border-primary"
            >
              {link}
            </li>
          ))}
        </ul>
        <ul className="absolute bottom-0 left-0 flex h-14 w-full shrink-0 items-center justify-center gap-6 border-t dark:border-foreground/20">
          {socials.map((social, i) => (
            <li key={i} className="text-3xl text-primary">
              <a target="_blank" href={social.link}>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export const Logo = ({className}) => {
  return <h1 className={cn(`font-bold text-xl md:text-3xl`,className)}>
    {user.firstName} <span className="text-primary">{user.lastName}</span>
  </h1>;
};
export default Header;
