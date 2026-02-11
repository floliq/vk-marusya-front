import styles from './LoginForm.module.scss';
import { Button, FormInput } from '@/shared/ui';
import { EmailIcon, PasswordIcon } from '@/shared/ui/Icons';

type LoginFormProps = {
  onSwitchToRegister: () => void;
};

export const LoginForm = ({ onSwitchToRegister }: LoginFormProps) => {
  return (
    <div className={styles.login}>
      <FormInput
        theme='light'
        icon={<EmailIcon />}
        placeholder='Электронная почта'
      />
      <FormInput
        theme='light'
        icon={<PasswordIcon />}
        placeholder='Пароль'
        type='password'
      />
      <Button theme='blue' className={styles.login__btn}>
        Войти
      </Button>
      <Button
        theme='light'
        className={styles.login__btn}
        onClick={onSwitchToRegister}
      >
        Регистрация
      </Button>
    </div>
  );
};
