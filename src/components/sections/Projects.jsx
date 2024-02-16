import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Container from '../Container';
import { cn } from '../../utils/helperFunctions';

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <Container sectionName={'Projects'}>
        <ul className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              title="Project Title"
              description="DescriptionProject DescriptionProject DescriptionProject Description"
              img="https://via.placeholder.com/300"
            />
          ))}
        </ul>
      </Container>
    </SectionWrapper>
  );
};

const Card = ({ title, description, img }) => {
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
    <div className="flex w-full bg-background text-foreground hover:bg-accent hover:dark:bg-card cursor-pointer flex-col items-start gap-2 rounded p-4 border dark:border-foreground/20">
      <img
        src={img}
        alt={title}
        className="h-52 w-full rounded-lg object-cover"
      />
      <div className='text-left'>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-md text-muted-foreground">{description}</p>
      </div>
      <menu className="flex gap-4">
        <li>
          <Button>Demo</Button>
        </li>
        <li>
          <Button
            className={
              'border border-primary bg-background text-foreground hover:bg-primary hover:text-primary-foreground'
            }
          >
            Source
          </Button>
        </li>
      </menu>
    </div>
  );
};

export default Projects;
