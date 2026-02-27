import type { UseFormRegister } from 'react-hook-form';
import styles from './FormInput.module.scss';
import { type ReactNode } from 'react';

type FormInputProps = {
  theme: 'dark' | 'light';
  icon: ReactNode;
  placeholder: string;
  type?: string;
  error?: string;
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
};

export const FormInput = ({
  theme,
  icon,
  placeholder,
  type = 'text',
  error,
  name = '',
  register,
}: FormInputProps) => {
  const inputProps = register && name ? register(name) : { name };

  return (
    <div className={`${styles.input} ${styles[`theme-${theme}`]}`}>
      <input
        type={type}
        {...inputProps}
        placeholder={placeholder}
        className={`${styles.input__input} ${styles[`theme-${theme}`]} ${error ? styles.input__error : ''}`}
      />
      <button
        type='button'
        className={styles.input__icon}
        aria-label={`Focus ${placeholder} field`}
      >
        {icon}
      </button>
    </div>
  );
};
