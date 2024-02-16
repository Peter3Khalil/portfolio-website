import React from 'react';
const Box = ({ title, description }) => {
  return (
    <li className="flex  w-full shrink-0 flex-col items-start justify-center gap-2 rounded border border-primary bg-background px-6 py-8 text-left text-foreground lg:w-72">
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <p className="text-lg">{description}</p>
    </li>
  );
};

export default Box;
