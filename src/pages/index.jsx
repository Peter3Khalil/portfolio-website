import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { links } from '../../public/data';

const Home = () => {
  return (
    <main className="flex transition-all duration-500 ease-in-out h-[100svh] bg-background text-foreground w-full flex-col">
      <Header />
      <div className='w-full h-[20vh] flex-grow overflow-auto'>
       {links.map(link=><React.Fragment key={link.id}>{link.section}</React.Fragment>)}
      <Footer/>
      </div>
    </main>
  );
};

export default Home;
