import { Button } from '@/shared/ui';
import styles from './ProfileSettings.module.scss';

import { EmailIcon } from '@/shared/ui/Icons';

export const ProfileSettings = () => {
  return (
    <div className={styles['profile-settings']}>
      <ul className={styles['profile-settings__list']}>
        <li className={styles['profile-settings__item']}>
          <div className={styles['profile-settings__banner']}>КК</div>
          <div className={styles['profile-settings__content']}>
            <p className={styles['profile-settings__name']}>Имя Фамилия</p>
            <h3 className={styles['profile-settings__value']}>
              Константин Константинопольский
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
            <h3 className={styles['profile-settings__value']}>
              example@domain.com
            </h3>
          </div>
        </li>
      </ul>
      <Button theme='blue' className={styles['profile-settings__signout']}>
        Выйти из аккаунта
      </Button>
    </div>
  );
};
