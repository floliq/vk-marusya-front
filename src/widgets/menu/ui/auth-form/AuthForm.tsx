import styles from './AuthForm.module.scss';
import { useState } from 'react';
import { LoginForm } from './login-form/LoginForm';
import { RegisterForm } from './register-form/RegisterForm';

export const AuthForm = () => {
  const [authState, setAuthState] = useState<'login' | 'register'>('login');

  return (
    <div className={styles.auth}>
      <div className={styles.auth__content}>
        <img
          src='/logo_black.png'
          alt='Логотип компании'
          className={styles.auth__logo}
        />
        {authState === 'login' ? (
          <LoginForm
            onSwitchToRegister={() => {
              setAuthState('register');
            }}
          />
        ) : (
          <RegisterForm
            onSwitchToLogin={() => {
              setAuthState('login');
            }}
          />
        )}
      </div>
    </div>
  );
};
