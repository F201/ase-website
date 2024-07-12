import { Checkbox as CheckboxMUI } from '@mui/material'
//import React, { ReactNode } from 'react';

export interface CheckboxProps extends React.ComponentProps<typeof CheckboxMUI>{
    defaultChecked?: boolean;
    color?: 'primary' | 'secondary' | 'default';
    disable?: boolean;
    size?: 'small' | 'medium';
    testId?: string;
    //variant?: 'text' | 'outlined' | 'contained';
    required?: boolean;
    onClick?: () => void;
}

export const Checkbox = ({
  defaultChecked,
  color,
  disable,
  size,
  testId,
  //variant,
  required,
  onClick=() => {},
  ...props
}: CheckboxProps) => {
  return (
    <CheckboxMUI 
      defaultChecked={defaultChecked}
      color={color}
      disabled={disable}
      size={size}
      //variant={variant}
      data-testid={testId}
      onClick={onClick}
      required={required}
      {...props}
    />
  )
}