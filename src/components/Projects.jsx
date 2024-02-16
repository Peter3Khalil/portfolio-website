import React from 'react';
import SectionWrapper from './SectionWrapper';
import BoxesContainer from './BoxesContainer';

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      className={'h-auto'}
    >
      <BoxesContainer sectionName={"Projects"}/>
    </SectionWrapper>
  );
};

export default Projects;
