import React from 'react';
import { cn } from '../utils/helperFunctions';
import { user } from '../../public/data';

const Logo = ({ className }) => {
  return (
    <h1 className={cn(`text-xl font-bold md:text-3xl`, className)}>
      {user.firstName} <span className="text-primary">{user.lastName}</span>
    </h1>
  );
};

export default Logo;
