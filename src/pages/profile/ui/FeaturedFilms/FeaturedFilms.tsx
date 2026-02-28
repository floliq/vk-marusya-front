import { useState } from 'react';
import { CloseButton, Skeleton } from '@/shared/ui';
import styles from './FeaturedFilms.module.scss';

import { FilmItem } from '@/entities/film';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line no-restricted-imports
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavorites,
  setFavorites,
  useGetFavouritesQuery,
  useRemoveFavouriteMutation,
} from '@/entities/session';

export const FeaturedFilms = () => {
  const dispatch = useDispatch();
  const { data: films = [], isLoading } = useGetFavouritesQuery();
  const [removeFavouriteMutation] = useRemoveFavouriteMutation();
  const favourites = useSelector(selectFavorites);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleDeleteClick = async (filmId: number) => {
    setDeleteError(null);
    try {
      await removeFavouriteMutation(filmId).unwrap();
      dispatch(setFavorites(favourites.filter((id) => id !== String(filmId))));
    } catch {
      setDeleteError(
        'Не удалось удалить фильм из избранного. Попробуйте позже.'
      );
    }
  };

  if (isLoading) {
    return (
      <div className={styles.featured}>
        <Skeleton height={800} />
      </div>
    );
  }

  if (films.length === 0) {
    return (
      <div className={styles.featured}>
        <p className={styles.featured__empty}>Нет избранных фильмов</p>
      </div>
    );
  }

  return (
    <>
      {deleteError && (
        <p className={styles.featured__error} role='alert'>
          {deleteError}
        </p>
      )}
      <div className={styles.featured}>
        <ul className={styles.featured__list}>
          {films.map((film) => (
            <li key={film.id} className={styles.featured__item}>
              <CloseButton
                onClick={() => void handleDeleteClick(film.id)}
                className={styles.featured__close}
                aria-label='Удалить из избранного'
              />
              <FilmItem
                id={film.id}
                imageUrl={film.posterUrl ?? film.backdropUrl ?? ''}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['featured-mobile']}>
        <Swiper
          spaceBetween={40}
          slidesPerView='auto'
          navigation
          pagination={{ clickable: true }}
          className={styles.featured__swiper}
          tag='ul'
          breakpoints={{
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 'auto', enabled: false },
          }}
        >
          {films.map((film) => (
            <SwiperSlide key={film.id} className={styles.swiperSlide}>
              <li key={film.id} className={styles.featured__item}>
                <CloseButton
                  onClick={() => void handleDeleteClick(film.id)}
                  className={styles.featured__close}
                  aria-label='Удалить из избранного'
                />
                <FilmItem
                  id={film.id}
                  imageUrl={film.posterUrl ?? film.backdropUrl ?? ''}
                />
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
