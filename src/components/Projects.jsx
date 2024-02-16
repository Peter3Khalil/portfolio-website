import React from 'react';
import SectionWrapper from './SectionWrapper';
import Container from './Container';
import Box from './Box';

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      className={'h-auto'}
    >
      <Container sectionName={"Projects"}>
      <ul className="flex flex-col justify-center gap-4 px-6 md:px-24 lg:flex-row">
        {Array.from({ length: 3 }).map((_, index) => (
          <Box key={index} title={`Project ${index + 1}`} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
        ))}
      </ul>
      </Container>
    </SectionWrapper>
  );
};

export default Projects;
