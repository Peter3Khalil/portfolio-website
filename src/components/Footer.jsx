import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-24 flex items-center justify-center'>
      <p className='text-muted-foreground'>
        &copy; 2024 - Made
        by{' '}
        <a
          href='https://www.linkedin.com/in/peter3khalil/'
          target='_blank'
          rel='noreferrer'
          className='text-primary hover:underline'
        >
          Peter
        </a>

      </p>
    </footer>
  )
}

export default Footer