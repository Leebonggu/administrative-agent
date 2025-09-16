import { ReactNode, createElement } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function Heading({ children, level = 1, className = '' }: HeadingProps) {
  const baseClasses = 'font-bold text-slate-900';

  const levelClasses = {
    1: 'text-4xl md:text-6xl mb-6',
    2: 'text-3xl md:text-4xl mb-4',
    3: 'text-2xl md:text-3xl mb-4',
    4: 'text-xl md:text-2xl mb-3',
    5: 'text-lg md:text-xl mb-3',
    6: 'text-base md:text-lg mb-2'
  };

  return createElement(
    `h${level}` as 'h1',
    { className: `${baseClasses} ${levelClasses[level]} ${className}` },
    children
  );
}

interface TextProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'muted';
  className?: string;
}

export function Text({ children, size = 'base', color = 'primary', className = '' }: TextProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const colorClasses = {
    primary: 'text-slate-900',
    secondary: 'text-slate-600',
    muted: 'text-slate-500'
  };

  return (
    <p className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      {children}
    </p>
  );
}