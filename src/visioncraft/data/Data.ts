import { CardProps, TimelineProps } from '../types';

export const bootcampInfo = {
  date: '[Insert Date]', // Replace with actual date, e.g., "May 10-11, 2025"
  registrationLink: '[Registration Link]', // Replace with actual URL
};

export const features: CardProps[] = [
  {
    title: 'Exclusive Speaker Session',
    description: 'Learn industry trends and portfolio tips from expert designers.',
  },
  {
    title: 'Hands-on Workshops',
    description: 'Master Figma, wireframing, and prototyping in live sessions.',
  },
  {
    title: 'Design Challenges',
    description: 'Test your skills and get mentor feedback to build your portfolio.',
  },
  {
    title: 'Networking',
    description: 'Connect with creatives and explore collaborations.',
  },
];

export const timeline: TimelineProps[] = [
  {
    day: 'Day 1',
    title: 'UI/UX Fundamentals & Tools',
    description: 'Learn design thinking, Figma basics, and start wireframing.',
  },
  {
    day: 'Day 2',
    title: 'Prototyping & Portfolio Building',
    description: 'Create prototypes, tackle design challenges, and get feedback.',
  },
];

export const whoShouldJoin: CardProps[] = [
  {
    title: 'Students',
    description: 'Curious about digital design? Start here.',
  },
  {
    title: 'Developers',
    description: 'Level up your front-end skills.',
  },
  {
    title: 'Creators',
    description: 'Build user-friendly products.',
  },
];