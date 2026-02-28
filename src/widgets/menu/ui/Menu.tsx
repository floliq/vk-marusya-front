import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import { Container, Modal } from '@/shared/ui';
import { MobileMenu } from './mobile-menu/MobileMenu';
import { useState } from 'react';
import { AuthForm } from './auth-form/AuthForm';
import { SearchFilm } from './search-film/SearchFilm';
import { useAuth } from '@/widgets/menu';

export const Menu = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { isAuth, name } = useAuth();

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
            <SearchFilm />
          </div>

          {!isAuth ? (
            <button
              className={styles.menu__link}
              onClick={() => {
                setIsAuthOpen(true);
              }}
            >
              Войти
            </button>
          ) : (
            <NavLink
              to={'/profile'}
              className={({ isActive }) =>
                isActive
                  ? `${styles.menu__link} ${styles.menu__auth} ${styles['menu__link-active']}`
                  : `${styles.menu__link} ${styles.menu__auth}`
              }
            >
              {name ?? ''}
            </NavLink>
          )}
        </div>
        <MobileMenu
          isAuth={isAuth}
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
        <AuthForm
          onSuccess={() => {
            setIsAuthOpen(false);
          }}
        />
      </Modal>
    </header>
  );
};
