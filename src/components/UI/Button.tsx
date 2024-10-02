import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textOnly?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, textOnly = false, className = '', ...props }) => {
  // Determine the CSS classes based on the textOnly prop
  let cssClasses = textOnly ? 'text-button' : 'button';
  cssClasses += ' ' + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
