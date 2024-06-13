import { Button as ButtonMUI, ExtendButtonBase, ButtonTypeMap } from '@mui/material';

interface ButtonProps extends ExtendButtonBase<ButtonTypeMap<{}, "button">>{
    disabled?: boolean;
    testId: string;
    title?: string;
}

export const Button = ({
    disabled,
    testId,
    title
}: ButtonProps) =>{
    return (
        <ButtonMUI
            disabled={disabled}
            data-testid={testId}
        >{title}
        </ButtonMUI>
    )
}