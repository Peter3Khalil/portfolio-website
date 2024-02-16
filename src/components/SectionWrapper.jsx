import React from 'react'
import { cn } from '../utils/helperFunctions'

const SectionWrapper = ({children,className}) => {
  return (
    <section className={cn("flex shrink-0 snap-start h-[calc(100svh-4rem)] w-full flex-col items-center justify-center gap-2 text-center lg:flex-row lg:justify-between lg:px-20 lg:py-10",className)}>{children}</section>
  )
}

export default SectionWrapper