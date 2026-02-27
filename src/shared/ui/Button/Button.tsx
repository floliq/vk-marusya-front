import type { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  theme: 'blue' | 'dark' | 'light';
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button = ({
  theme,
  children,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[`theme-${theme}`]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
