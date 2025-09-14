import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  // Leverage global Tailwind component classes defined in globals.css
  // so tests and design tokens stay consistent.
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    danger: 'btn-danger',
  }[variant];

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }[size];

  const classes = clsx('btn', variantClass, sizeClasses, className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
