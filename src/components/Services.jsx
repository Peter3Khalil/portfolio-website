import React from 'react';
import SectionWrapper from './SectionWrapper';
import BoxesContainer from './BoxesContainer';

const Services = () => {
  return (
    <SectionWrapper
    id="services"
      className={'h-auto'}
    >
     <BoxesContainer sectionName={"Services"}/>
    </SectionWrapper>
  );
};

export default Services;
