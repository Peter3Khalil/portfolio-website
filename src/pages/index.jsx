import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { links } from '../../public/data';
import useObserver from '../hooks/useObserver';


const Home = () => {
  const {visibleElement} = useObserver({parentId:'container'})
  console.log(visibleElement?.id)
  return (
    <main className="flex transition-all duration-500 ease-in-out h-[100svh] bg-background text-foreground w-full flex-col">
      <Header activeLink={visibleElement?.id}/>
      <div id='container' className='w-full h-[20vh] flex-grow overflow-auto'>
       {links.map(link=><React.Fragment key={link.id}>{link.section}</React.Fragment>)}
      <Footer/>
      </div>
    </main>
  );
};

export default Home;
