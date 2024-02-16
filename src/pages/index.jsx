import React from 'react';
import Header, { socials } from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <main className="flex transition-all duration-500 ease-in-out h-[100svh] bg-background text-foreground w-full flex-col">
      <Header />
      <div className='w-full h-[20vh] flex-grow overflow-auto'>
        <Hero />
        <Services />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
