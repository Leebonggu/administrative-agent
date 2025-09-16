import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  fullWidth = false
}: SectionProps) {
  const backgroundClasses = {
    'white': 'bg-white',
    'gray': 'bg-slate-50',
    'blue': 'bg-primary-50',
    'dark': 'bg-slate-900 text-white'
  };

  const paddingClasses = {
    'none': '',
    'sm': 'py-8',
    'md': 'py-12',
    'lg': 'py-16',
    'xl': 'py-24'
  };

  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <Container>
          {children}
        </Container>
      )}
    </section>
  );
}