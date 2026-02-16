import { NavLink } from 'react-router-dom';
import styles from './MobileMenu.module.scss';
import { GenresIcon, ProfileIcon, SearchBtnIcon } from '@/shared/ui/Icons';

type MobileMenuProps = {
  isAuth: boolean;
  onAuthClick: () => void;
};

export const MobileMenu = ({ isAuth, onAuthClick }: MobileMenuProps) => {
  return (
    <div className={styles['mobile-menu']}>
      <NavLink to={'/'}>
        <img
          className={styles['mobile-menu__logo']}
          src='/logo_white.png'
          alt='логотип'
        />
      </NavLink>
      <div className={styles['mobile-menu__btns']}>
        <NavLink to={'/genres'} className={styles['mobile-menu__btn']}>
          <GenresIcon />
        </NavLink>
        <button className={styles['mobile-menu__btn']}>
          <SearchBtnIcon />
        </button>
        {!isAuth ? (
          <button
            className={styles['mobile-menu__btn']}
            onClick={() => {
              onAuthClick();
            }}
          >
            <ProfileIcon />
          </button>
        ) : (
          <NavLink
            to={'/profile'}
            className={({ isActive }) =>
              isActive
                ? `${styles.menu__link} ${styles['menu__link-active']}`
                : styles.menu__link
            }
          >
            <ProfileIcon />
          </NavLink>
        )}
      </div>
    </div>
  );
};
