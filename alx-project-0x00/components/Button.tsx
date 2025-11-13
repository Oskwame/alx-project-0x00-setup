import React from "react";
import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({
    title,
    size = 'medium',
    shapes = 'rounded-md',
    className = '',
    style,
    ...props

}) => {
    const sizeClasses: Record<string, String> ={
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
    extralarge: "px-8 py-4 text-xl",
    };

    const shapeClasses: Record<string, String> ={
        "rounded-sm": "rounded-sm",
        "rounded-md": "rounded-md",
        "rounded-lg": "rounded-lg",
        "rounded-full": "rounded-full",
    };
    return(
        <button
        className={`bg-blue-600 text-white font-medium ${sizeClasses[size]} ${shapeClasses[shapes]} hover:bg-blue-700 transition ${className}`}
        style={style}
        {...props}
    >
        {title}

        </button>
    );
};
export default Button;