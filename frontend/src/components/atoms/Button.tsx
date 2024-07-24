import { Button as ButtonMUI } from '@mui/material';
import React, { ReactNode } from 'react';

export interface ButtonProps extends React.ComponentProps<typeof ButtonMUI>{
    testId?: string;
    children?: ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    size?: 'small' | 'medium' | 'large';
    disable?: boolean;
    iconPosition?: 'left' | 'right' | 'none';
}

export const Button = ({
  children,
  testId,
  color,
  size='medium',
  disable,
  ...props
}: ButtonProps) =>{
  return (
    <ButtonMUI
      data-testid={testId}
      color={color}
      size={size}
      disabled={disable}
      
      {...props}
    >
      {children}
    </ButtonMUI>
  )
}