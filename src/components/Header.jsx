import React from 'react';
import { CiLight, CiDark } from 'react-icons/ci';
import { links } from '../../public/data';
import { ThemeContext } from '../pages/_app';
import Logo from './Logo';
import { cn } from '../utils/helperFunctions';

const Header = ({ activeLink }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { toggleTheme, theme } = React.useContext(ThemeContext);
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center justify-between bg-background px-4 text-foreground shadow-sm dark:border-b dark:border-foreground/20 md:px-6 lg:px-10">
      <Logo />
      <div className="flex h-full items-center gap-6">
        <nav className="hidden h-full md:block">
          <ul className="flex h-full gap-6">
            {links.map((link, i) => (
              <li
                onClick={() => {
                  document
                    .getElementById(link.id)
                    .scrollIntoView({ behavior: 'smooth' });
                }}
                key={link.id}
                className={cn(
                  'flex h-full cursor-pointer text-muted items-center justify-center border-b-2 border-transparent hover:border-primary',
                  {
                    'border-primary font-bold text-foreground': activeLink === link.id,
                  },
                )}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </nav>
        <button onClick={toggleTheme} className="text-2xl">
          {theme === 'light' ? <CiLight /> : <CiDark />}
        </button>
      </div>
    </header>
  );
};

export default Header;
