import React from 'react';
import { cn } from '../utils/helperFunctions';

const Container = ({ sectionName, children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'flex w-full flex-col items-start gap-8 text-left md:items-center',
        className,
      )}
    >
      <h2 className="text-3xl font-bold text-primary">{sectionName}</h2>
      {children}
    </div>
  );
};
export default Container;
