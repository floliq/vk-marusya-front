import { Button, FormInput } from '@/shared/ui';
import styles from './RegisterForm.module.scss';
import { EmailIcon, PasswordIcon, UserIcon } from '@/shared/ui/Icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { RegisterFormData } from '@/entities/session';
import { registerSchema, useRegisterMutation } from '@/entities/session';

type RegisterFormProps = {
  onSwitchToLogin: () => void;
  onSuccessClickHandler: () => void;
};

export const RegisterForm = ({
  onSwitchToLogin,
  onSuccessClickHandler,
}: RegisterFormProps) => {
  const [registerMutation] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      name: '',
      surname: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { message: 'Пароли не совпадают' });
      return;
    }
    try {
      await registerMutation(data).unwrap();
      onSuccessClickHandler();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.register}>
      <h3 className={styles.register__title}>Регистрация</h3>
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
          icon={<UserIcon />}
          placeholder='Имя'
          type='text'
          name='name'
          register={register}
          error={errors.name?.message}
        />
        <FormInput
          theme='light'
          icon={<UserIcon />}
          placeholder='Фамилия'
          type='text'
          name='surname'
          register={register}
          error={errors.surname?.message}
        />
        <FormInput
          theme='light'
          icon={<PasswordIcon />}
          placeholder='Пароль'
          type='password'
          name='password'
          register={register}
          error={errors.password?.message}
        />
        <FormInput
          theme='light'
          icon={<PasswordIcon />}
          placeholder='Подтвердите пароль'
          type='password'
          name='confirmPassword'
          register={register}
          error={errors.confirmPassword?.message}
        />
        <Button theme='blue' className={styles.register__btn} type='submit'>
          Создать аккаунт
        </Button>
        <Button
          theme='light'
          className={styles.register__btn}
          type='button'
          onClick={onSwitchToLogin}
        >
          У меня есть пароль
        </Button>
      </form>
    </div>
  );
};
