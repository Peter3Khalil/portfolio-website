import React from 'react';
import Header, { socials } from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <main className="flex h-[100svh] w-full flex-col">
      <Header />
      <div className='w-full h-[20vh] flex-grow overflow-auto snap-y snap-mandatory'>
        <Hero />
        <Hero />
        <Hero />
      </div>
    </main>
  );
};

export default Home;
