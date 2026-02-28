import { Button } from '@/shared/ui';
import styles from './ProfileSettings.module.scss';

import { EmailIcon } from '@/shared/ui/Icons';
import { useAuth } from '@/features/auth';
import { useNavigate } from 'react-router-dom';

export const ProfileSettings = () => {
  const { name, surname, email, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    void navigate('/');
  };

  return (
    <div className={styles['profile-settings']}>
      <ul className={styles['profile-settings__list']}>
        <li className={styles['profile-settings__item']}>
          <div className={styles['profile-settings__banner']}>
            {' '}
            {name?.[0]?.toUpperCase()}
            {surname?.[0]?.toUpperCase()}
          </div>
          <div className={styles['profile-settings__content']}>
            <p className={styles['profile-settings__name']}>Имя Фамилия</p>
            <h3 className={styles['profile-settings__value']}>
              {name} {surname}
            </h3>
          </div>
        </li>
        <li className={styles['profile-settings__item']}>
          <div className={styles['profile-settings__banner']}>
            <EmailIcon />
          </div>
          <div className={styles['profile-settings__content']}>
            <p className={styles['profile-settings__name']}>
              Электронная почта
            </p>
            <h3 className={styles['profile-settings__value']}>{email}</h3>
          </div>
        </li>
      </ul>
      <Button
        theme='blue'
        className={styles['profile-settings__signout']}
        onClick={() => void handleLogout()}
      >
        Выйти из аккаунта
      </Button>
    </div>
  );
};
