export interface CardProps {
    title: string;
    description: string;
  }
  
  export interface TimelineProps {
    day: string;
    title: string;
    description: string;
  }
  
  export interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
  }