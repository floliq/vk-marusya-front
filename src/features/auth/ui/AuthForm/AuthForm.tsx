import styles from './AuthForm.module.scss';
import { useState } from 'react';
import { LoginForm } from './login-form/LoginForm';
import { RegisterForm } from './register-form/RegisterForm';
import { SuccessForm } from './success-form/SuccessForm';

type AuthFormProps = {
  onSuccess: () => void;
};

export const AuthForm = ({ onSuccess }: AuthFormProps) => {
  const [authState, setAuthState] = useState<'login' | 'register'>('login');
  const [isSuccess, setIsSuccess] = useState(false);

  const onSuccessRegisterClickHandler = () => {
    setIsSuccess(false);
    setAuthState('login');
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__content}>
        <img
          src='/logo_black.png'
          alt='Логотип компании'
          className={styles.auth__logo}
        />
        {!isSuccess ? (
          authState === 'login' ? (
            <LoginForm
              onSwitchToRegister={() => {
                setAuthState('register');
              }}
              onSuccess={onSuccess}
            />
          ) : (
            <RegisterForm
              onSwitchToLogin={() => {
                setAuthState('login');
              }}
              onSuccessClickHandler={() => {
                setIsSuccess(true);
              }}
            />
          )
        ) : (
          <SuccessForm onSuccessClickHandler={onSuccessRegisterClickHandler} />
        )}
      </div>
    </div>
  );
};
