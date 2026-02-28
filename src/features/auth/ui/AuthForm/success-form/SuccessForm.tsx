import { Button } from '@/shared/ui';
import styles from './SuccessForm.module.scss';

type SuccessFormProps = {
  onSuccessClickHandler: () => void;
};

export const SuccessForm = ({ onSuccessClickHandler }: SuccessFormProps) => {
  return (
    <div className={styles.success}>
      <h3 className={styles.success__title}>Регистрация завершена</h3>
      <p className={styles.success__text}>
        Используйте вашу электронную почту для входа
      </p>
      <Button
        theme='blue'
        className={styles.success__btn}
        onClick={onSuccessClickHandler}
      >
        Войти
      </Button>
    </div>
  );
};
