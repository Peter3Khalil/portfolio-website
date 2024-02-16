import React from 'react'
import { cn } from '../utils/helperFunctions'

const SectionWrapper = ({children,className,...props}) => {
  return (
    <section {...props} className={cn("flex shrink-0 h-[calc(100svh-4rem)] w-full flex-col items-center justify-center gap-2 text-center lg:px-20 py-10",className)}>{children}</section>
  )
}

export default SectionWrapper