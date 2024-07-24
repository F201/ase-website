import { TextField as TextFieldMUI } from '@mui/material';

export interface TextFieldProps extends React.ComponentProps<typeof TextFieldMUI>{
    testId?: string;
    color?: 'primary' | 'secondary';
    disable?: boolean;
    size?: 'small' | 'medium';
    required?: boolean;
}

export const TextField = ({
  testId,
  color,
  disable,
  size,
  required,
  ...props
}: TextFieldProps) => {
  return (
    <TextFieldMUI 
      color={color}
      disabled={disable}
      size={size}
      data-testid={testId}
      required={required}
      {...props}
    />
  )
}