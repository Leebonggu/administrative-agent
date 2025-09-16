export const colors = {
  primary: {
    50: '#e6f3ff',
    100: '#b3d9ff',
    200: '#80bfff',
    300: '#4da6ff',
    400: '#1a8cff',
    500: '#0066cc',
    600: '#0052a3',
    700: '#003d7a',
    800: '#002952',
    900: '#001429',
    950: '#000a14'
  },
  secondary: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712'
  }
} as const;

export const getColorClass = (color: keyof typeof colors, shade: keyof typeof colors.primary) => {
  return `${color}-${shade}`;
};

export const getPrimaryClass = (shade: keyof typeof colors.primary, type: 'bg' | 'text' | 'border' = 'bg') => {
  return `${type}-primary-${shade}`;
};

export const getSecondaryClass = (shade: keyof typeof colors.secondary, type: 'bg' | 'text' | 'border' = 'bg') => {
  return `${type}-secondary-${shade}`;
};