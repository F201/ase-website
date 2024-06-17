import { Checkbox as CheckboxMUI } from '@mui/material'
import { ReactNode } from 'react';

export interface CheckboxProps extends React.ComponentProps<typeof CheckboxMUI>{
    defaultChecked?: boolean;
    color?: 'primary' | 'secondary' | 'default';
    disable?: boolean;
    icon?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    testId?: string;
    variant?: 'text' | 'outlined' | 'contained';
    required?: boolean;
    onClick?: () => void;
}

export const Checkbox = ({
    defaultChecked,
    color,
    disable=false,
    icon,
    size='medium',
    testId,
    required=false,
    onClick=() => {},
    ...props
}: CheckboxProps) => {
    return (
        <CheckboxMUI 
            defaultChecked={defaultChecked}
            color={color}
            disabled={disable}
            icon={icon}
            size={size}
            data-testid={testId}
            onClick={onClick}
            required={required}
            {...props}
        />
    )
}