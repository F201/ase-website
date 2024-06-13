interface ButtonProps{
    title: string;
    color: string;
    disabled: boolean;
}

function Button ({title, color, disabled}: ButtonProps) {
    return (
        <button disabled={disabled}>{title}</button>
    )
}