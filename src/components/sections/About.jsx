import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { cn } from '../../utils/helperFunctions';
import { user } from '../../../public/data';
import Image from 'next/image';
const About = () => {
  const [activeTap, setActiveTap] = React.useState('skills');
  const taps = [
    {
      name: 'skills',
      list: [
        'HTML',
        'CSS',
        'Sass',
        'Tailwind',
        'Bootstrap',
        'JavaScript',
        'TypeScript',
        'Git & Github',
        'Next.js',
        'React',
        'Redux',
        'React Testing Library',
        'Node',
        'Express',
        'MongoDB',
      ],
    },
    {
      name: 'Education',
      list: [
        {
          title: 'Bachelor of Computer Science',
          organization: 'Ain Shams University',
          date: '2020-Present',
        },
      ],
    },
    {
      name: 'Certifications',
      list: [
        {
          title: 'Advanced React',
          organization: 'Meta',
          date: 'Feb 2024',
        },
        {
          title: 'ReactJs',
          organization: 'ITI',
          date: 'Aug 2022',
        },
        {
          title: 'Web Development Challenger Track',
          organization: 'Udacity',
          date: 'Sep 2021',
        },
      ],
    },
  ];
  const handleActiveTap = (e) => {
    setActiveTap(e.target.textContent.toLowerCase());
  };
  return (
    <SectionWrapper id="about">
      <div className="flex h-auto min-h-[20vh] w-full flex-col items-center justify-between gap-8 md:flex-row">
        <section className="relative hidden h-[60vh] flex-1  shrink-0 p-1 lg:block">
          
            <Image
              src={user.image}
              alt="Profile Picture"
              width={300}
              height={300}
              className="h-full w-full object-contain"
            />
          
          <div className="absolute inset-0 -z-10 h-full w-full rounded-full bg-primary"></div>
        </section>
        <section className="flex flex-1 flex-col items-start gap-4 text-left">
          <h1 className="text-3xl font-bold text-primary">About me</h1>
          <div className="flex flex-col gap-3">
            <p className='text-muted-foreground'>
              I am a frontend developer with a passion for web development. I
              have experience in building web applications using modern
              technologies. I am a quick learner and a team player who is always
              looking to improve my skills and learn new technologies.
            </p>
            <div className="flex flex-col gap-4">
              <ul className="flex gap-4">
                {taps.map((tap, i) => (
                  <li
                    onClick={handleActiveTap}
                    key={i}
                    className={cn(
                      'font-semi cursor-pointer border-b-2 border-transparent hover:border-primary',
                      {
                        'border-primary font-bold':
                          activeTap === tap.name.toLowerCase(),
                      },
                    )}
                  >
                    {tap.name}
                  </li>
                ))}
              </ul>

              <ul className="flex  list-disc flex-wrap items-start gap-x-8 gap-y-1 px-4">
                {taps
                  .find((tap) => tap.name.toLowerCase() === activeTap)
                  .list.map((item, i) => {
                    if (item.title && activeTap === 'education') {
                      return (
                        <li key={i}>
                          <h3 className="font-bold text-primary">
                            {item.title}
                          </h3>
                          <p className="font-semibold text-foreground">
                            {item.organization}
                          </p>
                          <p className="text-muted-foreground">{item.date}</p>
                        </li>
                      );
                    }
                    if (item.title && activeTap === 'certifications') {
                      return (
                        <li key={i}>
                          <h3 className="font-bold text-primary">
                            {item.title}
                          </h3>
                          <div className="flex gap-1">
                            <p className="font-semibold text-foreground">
                              {item.organization}
                            </p>
                            <p className="text-muted-foreground">{item.date}</p>
                          </div>
                        </li>
                      );
                    }
                    return <li key={i}>{item}</li>;
                  })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
};

export default About;
