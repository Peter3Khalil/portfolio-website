import React from 'react'
import { cn } from '../utils/helperFunctions'

const SectionWrapper = ({children,className,...props}) => {
  return (
    <section {...props} className={cn("flex h-auto border-b dark:border-foreground/30 shrink-0 w-full flex-col items-center justify-start gap-2 text-center px-8 lg:px-20 py-10",className)}>{children}</section>
  )
}

export default SectionWrapper