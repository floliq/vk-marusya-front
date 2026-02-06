import { NavLink } from 'react-router-dom';
import styles from './MobileMenu.module.scss';
import { GenresIcon, ProfileIcon, SearchBtnIcon } from '@/shared/ui/Icons';

export const MobileMenu = () => {
  return (
    <div className={styles['mobile-menu']}>
      <NavLink to={'/'}>
        <img
          className={styles['mobile-menu__logo']}
          src='/logo.png'
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
        <button className={styles['mobile-menu__btn']}>
          <ProfileIcon />
        </button>
      </div>
    </div>
  );
};
