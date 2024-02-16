import React from 'react';
import { cn } from '../utils/helperFunctions';

const Container = ({sectionName,children,className,...props}) => {
  return (
    <div {...props} className={cn("flex w-full flex-col gap-8",className)}>
      <h1 className="text-3xl font-bold text-primary">{sectionName}</h1>
      {children}
    </div>
  );
};
export default Container;
