import { useState } from 'react';
import { loginSchema } from '@/entities/session';
import styles from './LoginForm.module.scss';
import { Button, FormInput } from '@/shared/ui';
import { EmailIcon, PasswordIcon } from '@/shared/ui/Icons';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { LoginFormData } from '@/entities/session';
import { useAuth } from '@/features/auth';

type LoginFormProps = {
  onSwitchToRegister: () => void;
  onSuccess: () => void;
};

export const LoginForm = ({
  onSwitchToRegister,
  onSuccess,
}: LoginFormProps) => {
  const { login } = useAuth();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setSubmitError(null);
    try {
      const response = await login(data.email, data.password);
      if (response.success) {
        onSuccess();
      } else {
        setSubmitError('Не удалось войти. Проверьте email и пароль.');
      }
    } catch {
      setSubmitError('Произошла ошибка. Попробуйте позже.');
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} noValidate>
        <FormInput
          theme='light'
          icon={<EmailIcon />}
          placeholder='Электронная почта'
          name='email'
          register={register}
          error={errors.email?.message}
        />
        <FormInput
          theme='light'
          icon={<PasswordIcon />}
          placeholder='Пароль'
          name='password'
          type='password'
          register={register}
          error={errors.password?.message}
        />
        {submitError && (
          <p className={styles.login__error} role='alert'>
            {submitError}
          </p>
        )}
        <Button theme='blue' className={styles.login__btn} type='submit'>
          Войти
        </Button>
      </form>

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
