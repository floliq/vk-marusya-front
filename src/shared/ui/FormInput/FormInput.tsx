import styles from './FormInput.module.scss';
import { useRef, type ReactNode } from 'react';

type FormInputProps = {
  theme: 'dark' | 'light';
  icon: ReactNode;
  placeholder: string;
  type?: string;
};

export const FormInput = ({
  theme,
  icon,
  placeholder,
  type = 'text',
}: FormInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={`${styles.input} ${styles[`theme-${theme}`]}`}>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        className={`${styles.input__input} ${styles[`theme-${theme}`]}`}
      />
      <button
        type='button'
        className={styles.input__icon}
        onClick={handleIconClick}
        aria-label={`Focus ${placeholder} field`}
      >
        {icon}
      </button>
    </div>
  );
};
