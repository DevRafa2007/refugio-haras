export const theme = {
  colors: {
    primary: '#A4B5A0', // Verde sage/menta suave
    white: '#FFFFFF',
    earth: {
      light: '#D2C5B8', // Tom terroso suave
      medium: '#B8A99C', // Tom terroso médio
      dark: '#8C7B6E',   // Tom terroso escuro
    },
    sky: {
      gradient: 'linear-gradient(180deg, #87CEEB 0%, #FFC0CB 100%)', // Gradiente céu-rosa
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%',
  },
  typography: {
    fontFamily: {
      primary: '"Montserrat", sans-serif', // Fonte principal elegante
      secondary: '"Lora", serif', // Fonte secundária para detalhes
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
  },
  shadows: {
    soft: '0 4px 6px rgba(0, 0, 0, 0.05)',
    medium: '0 6px 12px rgba(0, 0, 0, 0.08)',
    strong: '0 8px 16px rgba(0, 0, 0, 0.12)',
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out',
  },
} 