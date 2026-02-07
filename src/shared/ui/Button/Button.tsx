import type { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  theme: 'blue' | 'dark' | 'light';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({
  theme,
  children,
  className = '',
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[`theme-${theme}`]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
