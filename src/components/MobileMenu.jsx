import React from 'react';
import { links, socials } from '../../public/data';
import { AiOutlineClose } from 'react-icons/ai';
import { cn } from '../utils/helperFunctions';

const MobileMenu = ({ isOpen, closeMenu,activeLink }) => {
  console.log(activeLink)
  return (
    <div
      className={`fixed right-0 top-0 z-10 flex h-full w-full transition-all duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Modal */}
      <div onClick={closeMenu} className="h-full w-full bg-foreground/5"></div>
      <nav className="relative flex h-full w-[70%] shrink-0 flex-col gap-10 bg-background p-6 text-foreground">
        <button onClick={closeMenu} className="self-end text-2xl">
          <AiOutlineClose />
        </button>
        <ul className="flex flex-col gap-2">
          {links.map((link, i) => (
            <li
              onClick={() => {
                closeMenu();
                document
                  .getElementById(link.id)
                  .scrollIntoView({ behavior: 'smooth' });
              }}
              key={link.id}
              className={cn("flex h-14 w-full cursor-pointer items-center border-b transition-all duration-300 ease-in-out hover:border-primary dark:border-foreground/20 dark:hover:border-primary",{
                'border-primary': activeLink?.toLowerCase() === link.id.toLowerCase(),
              })}
            >
              {link.name}
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

export default MobileMenu;
