import React from 'react';
import { cn } from '../utils/helperFunctions';

const BoxesContainer = ({sectionName,className,boxes=[],...props}) => {
  return (
    <div {...props} className={cn("flex w-full flex-col gap-8",className)}>
      <h1 className="text-3xl font-bold text-primary">{sectionName}</h1>
      <ul className="flex flex-col justify-center gap-4 px-6 md:px-24 lg:flex-row">
        {Array.from({ length: 3 }).map((_, index) => (
          <Box key={index} title={`Project ${index + 1}`} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
        ))}
      </ul>
    </div>
  );
};
const Box = ({title,description}) => {
  return (
    <li className="flex  w-full shrink-0 flex-col items-start justify-center gap-2 rounded border border-primary bg-background px-6 py-8 text-left text-foreground lg:w-72">
      <h2 className="text-2xl font-bold text-primary">
        {title}
      </h2>
      <p className="text-lg">
        {description}
      </p>
    </li>
  );
}
export default BoxesContainer;
