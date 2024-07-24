import { Fab as FabMUI } from '@mui/material';
import { ReactNode } from 'react';

export interface FabProps extends React.ComponentProps<typeof FabMUI>{
    testId?: string;
    color?: 'primary' | 'secondary' | 'default';
    disable?: boolean;
    size?: 'small' | 'medium' | 'large';
    variant?: 'circular' | 'extended';
    children?: ReactNode;
    onClick?: () => void;
}

export const Fab = ({
  testId,
  color,
  disable,
  size,
  variant,
  children,
  onClick=() => {},
  ...props
}: FabProps) => {
  return (
    <FabMUI 
      color={color}
      disabled={disable}
      size={size}
      variant={variant}
      data-testid={testId}
      onClick={onClick}
      {...props}
    >{children} 
    </FabMUI>
  )
}