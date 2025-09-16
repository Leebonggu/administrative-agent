import { ReactNode } from 'react';

interface IconProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  background?: boolean;
  className?: string;
}

export default function Icon({
  children,
  size = 'md',
  color = 'primary',
  background = false,
  className = ''
}: IconProps) {
  const sizeClasses = {
    sm: background ? 'w-12 h-12' : 'w-5 h-5',
    md: background ? 'w-16 h-16' : 'w-6 h-6',
    lg: background ? 'w-20 h-20' : 'w-8 h-8',
    xl: background ? 'w-24 h-24' : 'w-10 h-10'
  };

  const colorClasses = {
    primary: background ? 'bg-primary-100 text-primary-600' : 'text-primary-600',
    secondary: background ? 'bg-slate-100 text-slate-600' : 'text-slate-600',
    success: background ? 'bg-green-100 text-green-600' : 'text-green-600',
    warning: background ? 'bg-yellow-100 text-yellow-600' : 'text-yellow-600',
    danger: background ? 'bg-red-100 text-red-600' : 'text-red-600'
  };

  const iconSizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12'
  };

  if (background) {
    return (
      <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-lg flex items-center justify-center ${className}`}>
        <div className={iconSizeClasses[size]}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      {children}
    </div>
  );
}