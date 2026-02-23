import { Link } from 'react-router-dom';
import styles from './SearchFilmListMobile.module.scss';
import { Rating } from '@/shared/ui';
import type { Film } from '@/entities/film';
import 'swiper/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatRuntime, translateGenre } from '@/shared/lib';

type SearchFilmListMobileProps = {
  films: Film[];
  onSuccess: () => void;
};

export const SearchFilmListMobile = ({
  films,
  onSuccess,
}: SearchFilmListMobileProps) => {
  return (
    <div className={styles['search-film__list']}>
      {films.length > 0 ? (
        <Swiper
          spaceBetween={16}
          slidesPerView='auto'
          navigation
          pagination={{ clickable: true }}
          className={styles.top__swiper}
          tag='ul'
          breakpoints={{
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 2.2 },
          }}
        >
          {films.map((film) => (
            <SwiperSlide key={film.id} className={styles.swiperSlide}>
              <li className={styles['search-film__item']}>
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
                    <h3 className={styles['search-film__title']}>
                      {film.title}
                    </h3>
                  </div>
                </Link>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <li className={styles['search-film__item']}>
          <h3 className={styles['search-film__title']}>Ничего не найдено</h3>
        </li>
      )}
    </div>
  );
};
