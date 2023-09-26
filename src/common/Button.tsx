// Button.tsx

import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', disabled, ...rest }) => {
    const buttonClasses = `btn btn-${variant}`;

    return (
        <button className={buttonClasses} disabled={disabled} {...rest}>
            {children}
        </button>
    );
};

export default Button;