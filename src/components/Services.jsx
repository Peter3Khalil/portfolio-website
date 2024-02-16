import React from 'react';
import SectionWrapper from './SectionWrapper';

const Services = () => {
  return (
    <SectionWrapper
      className={'justify-normal py-10 lg:items-start lg:justify-center'}
    >
      <div className="flex h-full w-full flex-col">
        <h1 className="text-3xl font-bold text-primary">Services</h1>
        <ul className="flex flex-col gap-2 overflow-auto lg:flex-row">
          {Array.from({ length: 4 }).map((_, index) => (
            <li className="flex h-96 lg:flex-1 w-full shrink-0 flex-col items-center justify-center gap-2 bg-slate-500"></li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Services;
