import { Button, FormInput } from '@/shared/ui';
import styles from './RegisterForm.module.scss';
import { EmailIcon, PasswordIcon, UserIcon } from '@/shared/ui/Icons';

type RegisterFormProps = {
  onSwitchToLogin: () => void;
};

export const RegisterForm = ({ onSwitchToLogin }: RegisterFormProps) => {
  return (
    <div className={styles.register}>
      <h3 className={styles.register__title}>Регистрация</h3>
      <FormInput
        theme='light'
        icon={<EmailIcon />}
        placeholder='Электронная почта'
      />
      <FormInput
        theme='light'
        icon={<UserIcon />}
        placeholder='Имя'
        type='text'
      />
      <FormInput
        theme='light'
        icon={<UserIcon />}
        placeholder='Фамидия'
        type='text'
      />
      <FormInput
        theme='light'
        icon={<PasswordIcon />}
        placeholder='Пароль'
        type='password'
      />
      <Button theme='blue' className={styles.register__btn}>
        Создать аккаунт
      </Button>
      <Button
        theme='light'
        className={styles.register__btn}
        onClick={onSwitchToLogin}
      >
        У меня есть пароль
      </Button>
    </div>
  );
};
