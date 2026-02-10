import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import { Container, Modal } from '@/shared/ui';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import { AuthForm } from '@/features/auth';

export const Menu = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <header className={styles.menu}>
      <Container>
        <div className={styles.menu__content}>
          <NavLink to={'/'}>
            <img
              className={styles.menu__logo}
              src='/logo_white.png'
              alt='логотип'
            />
          </NavLink>
          <div className={styles.menu__middle}>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? `${styles.menu__link} ${styles['menu__link-active']}`
                  : styles.menu__link
              }
            >
              Главная
            </NavLink>
            <NavLink
              to={'/genres'}
              className={({ isActive }) =>
                isActive
                  ? `${styles.menu__link} ${styles['menu__link-active']}`
                  : styles.menu__link
              }
            >
              Жанры
            </NavLink>
            <input
              type='text'
              className={styles.menu__search}
              placeholder='Поиск'
            />
          </div>
          <button
            className={styles.menu__link}
            onClick={() => {
              setIsAuthOpen(true);
            }}
          >
            Войти
          </button>
        </div>
        <MobileMenu
          onAuthClick={() => {
            setIsAuthOpen(true);
          }}
        />
      </Container>
      <Modal
        isOpen={isAuthOpen}
        onClose={() => {
          setIsAuthOpen(false);
        }}
      >
        <AuthForm />
      </Modal>
    </header>
  );
};
