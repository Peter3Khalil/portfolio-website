import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { links } from '../../public/data';
import useObserver from '../hooks/useObserver';

const Home = () => {
  const { visibleElement } = useObserver({ parentId: 'container' });
  return (
    <main className="flex h-[100svh] w-full flex-col bg-background text-foreground transition-all duration-500 ease-in-out">
      <Header activeLink={visibleElement?.id} />
      <div className="flex h-auto w-full flex-col overflow-auto">
        <div id="container" className="h-auto">
          {links.map((link) => (
            <React.Fragment key={link.id}>{link.section}</React.Fragment>
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
