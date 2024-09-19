import { OverridableStringUnion } from '@mui/types';
import { orange, purple, neutrals, success, warning, error } from '@styles/Color';

type CustomSpacing = OverridableStringUnion<
  'base' | 'xxs' | 'xs' | 's' | 'sm' | 'm' | 'ml' | 'l' | 'xl',
  object
>;

declare module '@mui/material/styles' {
    interface Theme {
        status : {
            danger : string
        },
        spacing : (factor: CustomSpacing | number) => string,
        radius : {
            none : number,
            xxs : number,
            xs : number,
            sm : number,
            m : number,
            ml : number,
            l : number,
            xl : number,
            round : number,
        },
        colors: {
            orange: typeof orange;
            purple: typeof purple;
            neutrals: typeof neutrals;
            success: typeof success;
            warning: typeof warning;
            error: typeof error;
          };
    }

    interface ThemeOptions {
        status : {
            danger : React.CSSProperties['color'],
        },
        spacing?: (factor: CustomSpacing | number) => string,
        radius : {
            none? : number,
            xxs? : number,
            xs? : number,
            sm? : number,
            m? : number,
            ml? : number,
            l? : number,
            xl? : number,
            round? : number,
        },
        colors?: {
            orange?: typeof orange;
            purple?: typeof purple;
            neutrals?: typeof neutrals;
            success?: typeof success;
            warning?: typeof warning;
            error?: typeof error;
          };
    }
    
}