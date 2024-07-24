import { Radio as RadioButtonMUI } from '@mui/material';
import { ReactNode } from 'react';

export interface RadioButtonProps extends React.ComponentProps<typeof RadioButtonMUI>{
    testId?: string;
    checked?: boolean;
    checkedIcon?: ReactNode;
    color?: 'primary';
    disabled?: boolean;
    size?: 'small' | 'medium';
    onClick?: () => void;
}

export const Radio = ({
  testId,
  checked,
  checkedIcon,
  color,
  disabled,
  size,
  onClick=() => {},
  ...props
}: RadioButtonProps) => {
  return (
    <RadioButtonMUI 
      checked={checked}
      checkedIcon={checkedIcon}
      color={color}
      disabled={disabled}
      size={size}
      data-testid={testId}
      onClick={onClick}
      {...props}
    />
  )
}