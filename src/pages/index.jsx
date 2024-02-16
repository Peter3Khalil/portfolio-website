import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { links } from '../../public/data';
import useObserver from '../hooks/useObserver';
import { cn } from '../utils/helperFunctions';

const Home = () => {
  const { visibleElement } = useObserver({ parentId: 'container' });
  return (
    <main className="flex h-[100svh] w-full flex-col bg-background text-foreground transition-all duration-500 ease-in-out">
      <Header activeLink={visibleElement?.id} />
      <div className="mb-14 flex h-auto w-full flex-col overflow-auto md:mb-0">
        <div id="container" className="h-auto">
          {links.map((link) => (
            <React.Fragment key={link.id}>{<link.section />}</React.Fragment>
          ))}
        </div>
        <Footer />
      </div>

      <ul
        role="navigation"
        className="fixed border-t bottom-0 left-0 flex h-14 w-full items-center justify-between bg-primary px-4 md:hidden"
      >
        {links.map((link) => {
          return (
            <li
              onClick={() => {
                document
                  .getElementById(link.id)
                  .scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                'border-t-4 h-full flex items-center justify-center cursor-pointer border-transparent text-muted',
                {
                  'border-background text-primary-foreground font-bold':
                    link.id === visibleElement?.id,
                },
              )}
              key={link.id}
            >
              {link.name}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
