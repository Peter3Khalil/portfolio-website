import React from 'react';
import { socials, user } from '../../public/data';
import SectionWrapper from './SectionWrapper';
const Hero = () => {
  return (
    <SectionWrapper className={"lg:flex-row lg:justify-between"} id="hero">
      <div className="relative h-52 w-52 shrink-0 rounded-full border-[6px] border-primary p-1 lg:order-2 lg:h-96 lg:w-96">
        <img
          src={user.image}
          alt="Profile Picture"
          className="h-full w-full rounded-full object-cover"
        />
        {/* Add tint */}
        <div className="absolute inset-0 m-1 rounded-full bg-primary/20"> </div>
      </div>

      <div className="flex w-[70%] flex-col gap-6 lg:order-1 lg:w-[40%] lg:text-left">
        <div className="flex flex-col items-center gap-1 lg:items-stretch">
          <h1 className={'flex items-center text-4xl font-bold lg:text-5xl'}>
            Hi, It's<span className="ml-1 text-primary">{user.firstName}</span>
          </h1>

          <p className="text-lg font-bold text-muted-foreground md:text-2xl">
            I'm a{' '}
            <span className="border-b-2 border-foreground pb-1 text-foreground">
              <span className="text-primary">{user.title}</span>
            </span>
          </p>
        </div>

        <p className="text-md text-muted-foreground lg:text-xl">
          {user.description}
        </p>

        {/* Links */}
        <ul className="flex items-center justify-center gap-2 lg:justify-normal">
          {socials.map((social, i) => (
            <li key={i} className="text-3xl text-primary">
              <a target="_blank" href={social.link}>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        <menu className="flex flex-col gap-4 lg:flex-row">
          <button className="w-full rounded-md bg-primary px-6 py-2 text-lg font-bold text-white lg:w-fit">
            <a href="/pdf.pdf" download={"peter.pdf"}>
              Download CV
            </a>
          </button>
          <button className="w-full rounded-md border border-primary bg-background px-6 py-2 text-lg font-bold text-foreground transition duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground lg:w-fit">
            Contact Me
          </button>
        </menu>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
