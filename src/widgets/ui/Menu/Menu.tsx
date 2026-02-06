import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import { Container } from '@/shared/ui';
import { MobileMenu } from '../..';

export const Menu = () => {
  return (
    <header className={styles.menu}>
      <Container>
        <div className={styles.menu__content}>
          <NavLink to={'/'}>
            <img className={styles.menu__logo} src='/logo.png' alt='логотип' />
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
          <button className={styles.menu__link}>Войти</button>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
};
