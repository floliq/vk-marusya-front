import styles from './Profile.module.scss';

import { LikeIcon, ProfileIcon } from '@/shared/ui/Icons';
import { useState } from 'react';
import { FeaturedFilms } from './FeaturedFilms/FeaturedFilms';
import { ProfileSettings } from './ProfileSettings/ProfileSettings';

export const Profile = () => {
  const [tab, setTab] = useState<'featured' | 'settings'>('featured');

  return (
    <section className={styles.profile}>
      <div className='container fluid'>
        <div className={styles.profile__content}>
          <h2 className={`${styles.profile__title} title`}>Мой аккаунт</h2>
          <nav className={styles.profile__tabs}>
            <ul className={styles.profile__list}>
              <li className={styles.profile__item}>
                <button
                  onClick={() => {
                    setTab('featured');
                  }}
                  className={`${styles.profile__tab} ${tab === 'featured' ? styles['profile__tab-active'] : ''}`}
                >
                  <LikeIcon />
                  <span
                    className={`${styles['profile__tab-text']} ${styles['profile__featured-long']}`}
                  >
                    Избранные фильмы
                  </span>
                  <span
                    className={`${styles['profile__tab-text']} ${styles['profile__featured-short']}`}
                  >
                    Избранное
                  </span>
                </button>
              </li>
              <li className={styles.profile__item}>
                <button
                  onClick={() => {
                    setTab('settings');
                  }}
                  className={`${styles.profile__tab} ${tab === 'settings' ? styles['profile__tab-active'] : ''}`}
                >
                  <ProfileIcon />
                  <span
                    className={`${styles['profile__tab-text']} ${styles['profile__settings-long']}`}
                  >
                    Настройка аккаунта
                  </span>
                  <span
                    className={`${styles['profile__tab-text']} ${styles['profile__settings-short']}`}
                  >
                    Настройки
                  </span>
                </button>
              </li>
            </ul>
          </nav>
          <div className='profile__page'>
            {tab === 'featured' ? <FeaturedFilms /> : <ProfileSettings />}
          </div>
        </div>
      </div>
    </section>
  );
};
