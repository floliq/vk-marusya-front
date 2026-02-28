import { Rating } from '@/shared/ui';
import styles from './SearchFilmList.module.scss';
import { Link } from 'react-router-dom';
import { SearchFilmListMobile } from '../search-film-list-mobile/SearchFilmListMobile';
import type { Film } from '@/entities/film';
import { formatRuntime, translateGenre } from '@/shared/lib';

type SearchFilmListProps = {
  films: Film[];
  onSuccess: () => void;
};

export const SearchFilmList = ({ films, onSuccess }: SearchFilmListProps) => {
  return (
    <>
      <ul className={styles['search-film__list']}>
        {films.length > 0 ? (
          films.map((film) => (
            <li key={film.id} className={styles['search-film__item']}>
              <Link
                to={`/films/${film.id}`}
                className={styles['search-film__film']}
                onClick={onSuccess}
              >
                <img
                  src={film.posterUrl ?? film.backdropUrl ?? ''}
                  alt={film.title}
                  className={styles['search-film__image']}
                />
                <div className={styles['search-film__content']}>
                  <div className={styles['search-film__shorts']}>
                    <Rating mark={film.tmdbRating} type='small' />
                    <p className={styles['search-film__short']}>
                      {film.releaseYear}
                    </p>
                    <p className={styles['search-film__short']}>
                      {translateGenre(film.genres[0])}
                    </p>
                    <p className={styles['search-film__short']}>
                      {formatRuntime(film.runtime)}
                    </p>
                  </div>
                  <h3 className={styles['search-film__title']}>{film.title}</h3>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li className={styles['search-film__item']}>
            <h3 className={styles['search-film__title']}>Ничего не найдено</h3>
          </li>
        )}
      </ul>
      <SearchFilmListMobile films={films} onSuccess={onSuccess} />
    </>
  );
};
