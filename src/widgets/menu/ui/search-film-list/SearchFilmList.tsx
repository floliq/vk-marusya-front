import { Rating } from '@/shared/ui';
import styles from './SearchFilmLIst.module.scss';
import { Link } from 'react-router-dom';
import { SearchFilmListMobile } from '../search-film-list-mobile/SearchFilmListMobile';

export const SearchFilmList = () => {
  const films = [1, 2, 3, 4, 5];

  return (
    <>
      <ul className={styles['search-film__list']}>
        {films.map((num) => (
          <li className={styles['search-film__item']}>
            <Link to={`/films/${num}`} className={styles['search-film__film']}>
              <img
                src='https://cinemaguide.skillbox.cc/images/1045770/9jlGTo6GiHeri1lx2czChvLzTO3.jpg'
                alt={`Баннер ${num}`}
                className={styles['search-film__image']}
              />
              <div className={styles['search-film__content']}>
                <div className={styles['search-film__shorts']}>
                  <Rating mark='7,5' type='small' />
                  <p className={styles['search-film__short']}>1979</p>
                  <p className={styles['search-film__short']}>детектив</p>
                  <p className={styles['search-film__short']}>1 ч 7 мин</p>
                </div>
                <h3 className={styles['search-film__title']}>
                  Шерлок Холмс и доктор Ватсон: Знакомство
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <SearchFilmListMobile />
    </>
  );
};
