import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { links } from '../../public/data';
import useObserver from '../hooks/useObserver';
import { cn } from '../utils/helperFunctions';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home = () => {
  const { visibleElement } = useObserver({ parentId: 'container' });
  return (
    <>
      <Head>
        <title>Peter Khalil | Frontend Developer</title>
        <meta
          name="description"
          content="Peter Khalil is a frontend developer who specializes in building high-quality, responsive, and accessible websites and web applications."
        />
        <meta
          name="keywords"
          content="Peter Khalil, Frontend Developer, Web Developer, React Developer, Next.js Developer, JavaScript Developer, HTML Developer, CSS Developer"
        />
        <meta name="author" content="Peter Khalil" />

        <meta property="og:title" content="Peter Khalil | Frontend Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://peterkhalil.netlify.app/" />
        <meta
          property="og:description"
          content="Peter Khalil is a frontend developer who specializes in building high-quality, responsive, and accessible websites and web applications."
        />
        <link rel="icon" href="/profile.jpg" />
      </Head>
      <main className="flex h-[100svh] w-full flex-col bg-background text-foreground transition-all duration-500 ease-in-out">
        <Header activeLink={visibleElement?.id} />
        <div className="mb-14 flex h-auto w-full flex-col overflow-auto md:mb-0">
          <div id="container" className="h-auto">
            <Hero />
            <Projects />
            <About />
            <Contact />
          </div>
          <Footer />
        </div>
        <nav>
          <ul
            role="navigation"
            className="fixed bottom-0 left-0 flex h-14 w-full items-center justify-between border-t bg-primary px-4 dark:border-foreground/30 md:hidden"
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
                    'flex h-full cursor-pointer items-center justify-center border-t-4 border-transparent text-muted',
                    {
                      'border-background font-bold text-primary-foreground':
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
        </nav>
      </main>
    </>
  );
};

export default Home;
