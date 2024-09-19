import { createTheme } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { orange, purple, neutrals, success, warning, error } from '@styles/Color';

type CustomSpacing = OverridableStringUnion<
  'base' | 'xxs' | 'xs' | 's' | 'sm' | 'm' | 'ml' | 'l' | 'xl',
  object
>;

const theme = createTheme({
  status: {
    danger: '#FFFFFF',
  },
  
  colors: {
    orange,
    purple,
    neutrals,
    success,
    warning,
    error,
  },

  palette: {
    primary: {
      main: orange.base, // Orange as primary
    },
    secondary: {
      main: purple.base, // Purple as secondary
    },
    error: {
      main: error.base, // Error
    },
    warning: {
      main: warning.base, // Warning
    },
    success: {
      main: success.base, // Success
    },
    common: {
      black: neutrals.BaseBlack, // Black
      white: neutrals.BaseWhite, // White
    },
  },

  spacing: (factor) => {
    const spacingMap: Record<CustomSpacing, number> = {
      base: 1, // 1rem
      xxs: 0.25, // 0.25rem
      xs: 0.375, // 0.375rem
      s: 0.5, // 0.5rem
      sm: 0.75, // 0.75rem
      m: 1, // 1rem
      ml: 1.5, // 1.5rem
      l: 2, // 2rem
      xl: 3, // 3rem
    };
    return `${spacingMap[factor as keyof typeof spacingMap] || factor}rem`;
  },

  typography: {
    fontFamily: 'Poppins, Inter, sans-serif',
    display: {
      fontSize: '120px',
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: 'Poppins',
    },
    h1: {
      fontSize: '80px',
      fontWeight: 600, // Semi Bold
      lineHeight: 1.2,
      fontFamily: 'Poppins',
    },
    h2: {
      fontSize: '60px',
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: 'Poppins',
    },
    h3: {
      fontSize: '46px',
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: 'Poppins',
    },
    h4: {
      fontSize: '35px',
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: 'Poppins',
    },
    h5: {
      fontSize: '26px',
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: 'Poppins',
    },
    h6: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: 'Poppins',
    },
    subtitle1: {
      fontSize: '22px',
      fontWeight: 700, // Bold
      fontFamily: 'Inter',
    },
    subtitle2: {
      fontSize: '18px',
      fontWeight: 700, // Bold
      fontFamily: 'Inter',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 600, // Semi Bold
      fontFamily: 'Inter',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 600, // Semi Bold
      fontFamily: 'Inter',
    },
    button: {
      fontSize: '15px', // Medium size
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: 'Inter',
    },
    caption: {
      fontSize: '12px',
      fontWeight: 600, // Semi Bold
      fontFamily: 'Inter',
    },
  },

  shape: {
    borderRadius: 4,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
        sizeSmall: {
          borderRadius: 2,
        },
        sizeMedium: {
          borderRadius: 6,
        },
        sizeLarge: {
          borderRadius: 16,
        },
      },
    },
  },

  radius: {
    none: 0, // 0px
    xxs: 2, // 2px
    xs: 4, // 4px
    sm: 6, // 6px
    m: 10, // 10px
    ml: 16, // 16px
    l: 24, // 24px
    xl: 36, // 36px
    round: 999, // Fully rounded
  },
});

export default theme;
