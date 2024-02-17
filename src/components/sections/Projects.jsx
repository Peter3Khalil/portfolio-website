import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Container from '../Container';
import { cn } from '../../utils/helperFunctions';

const Projects = () => {
  const projects = [
    {
      title: 'Where in the world?',
      description:
        'Web application that allows users to search for countries and display information about them.',
      img: '/project1.png',
      demo: 'https://whereintheworldapp.netlify.app/',
      source: 'https://github.com/Peter3Khalil/where_in_the_world',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Landing page for a social media dashboard with dark mode and light mode.',
      img: '/project2.png',
      demo: 'https://socialmediadashboardpage.netlify.app/',
      source: 'https://github.com/Peter3Khalil/social_media_dashboard',
    },
    {
      title: 'Advice generator',
      description:
        'Web application that allows users to get random advice every time they click the button.',
      img: '/project3.png',
      demo: 'https://vocal-baklava-b46e14.netlify.app/',
      source: 'https://github.com/Peter3Khalil/generate_random_advice',
    },
  ];
  return (
    <SectionWrapper id="projects">
      <Container sectionName={'Projects'}>
        <ul className="flex w-full flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              img={project.img}
              demo={project.demo}
              source={project.source}
            />
          ))}
        </ul>
      </Container>
    </SectionWrapper>
  );
};

const Card = ({ title, description, img, demo, source }) => {
  const Button = ({ children, className }) => (
    <button
      className={cn(
        'w-16 rounded bg-primary py-1 text-md font-bold text-primary-foreground',
        className,
      )}
    >
      {children}
    </button>
  );
  return (
    <div
      onClick={() => {
        window.open(demo, '_blank');
      }}
      className="flex w-full cursor-pointer flex-col items-start gap-2 rounded border bg-background p-4 text-foreground hover:bg-accent/50 dark:border-foreground/20 md:w-[350px]"
    >
      <img
        src={img}
        alt={title}
        className="h-52 w-full object-cover object-top"
      />
      <div className="text-left">
        <h3 className="text-xl font-bold capitalize text-primary">{title}</h3>
        <p className="text-md text-muted-foreground">{description}</p>
      </div>
      <menu className="flex gap-4">
        <li>
          <a href={demo} target="_blank" rel="noreferrer">
            <Button>Demo</Button>
          </a>
        </li>
        <li>
          <a href={source} target="_blank" rel="noreferrer">
            <Button
              className={
                'border border-primary bg-background text-foreground hover:bg-primary hover:text-primary-foreground'
              }
            >
              Source
            </Button>
          </a>
        </li>
      </menu>
    </div>
  );
};

export default Projects;
