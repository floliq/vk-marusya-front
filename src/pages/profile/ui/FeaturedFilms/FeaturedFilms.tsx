import { CloseButton, Skeleton } from '@/shared/ui';
import styles from './FeaturedFilms.module.scss';

import { FilmItem } from '@/entities/film';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line no-restricted-imports
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectFavorites,
  setFavorites,
  useGetFavouritesQuery,
  useRemoveFavouriteMutation,
  type FavouriteFilm,
} from '@/entities/session';

export const FeaturedFilms = () => {
  const dispatch = useDispatch();
  const { data: films = [], isLoading } = useGetFavouritesQuery();
  const [removeFavouriteMutation] = useRemoveFavouriteMutation();
  const favourites = useSelector(selectFavorites);
  const [filmsState, setFilmsState] = useState<FavouriteFilm[]>([]);

  useEffect(() => {
    if (films.length > 0) {
      setFilmsState(films);
    } else {
      setFilmsState([]);
    }
  }, [films]);

  const handleDeleteClick = async (filmId: number) => {
    await removeFavouriteMutation(filmId).unwrap();
    dispatch(setFavorites(favourites.filter((id) => id !== String(filmId))));
    setFilmsState(filmsState.filter((film) => film.id !== filmId));
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
      <div className={styles.featured}>
        <ul className={styles.featured__list}>
          {filmsState.map((film) => (
            <li key={film.id} className={styles.featured__item}>
              <CloseButton
                onClick={() => void handleDeleteClick(film.id)}
                className={styles.featured__close}
              />
              <FilmItem
                id={film.id}
                image_url={film.posterUrl ?? film.backdropUrl ?? ''}
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
          {filmsState.map((film) => (
            <SwiperSlide key={film.id} className={styles.swiperSlide}>
              <li key={film.id} className={styles.featured__item}>
                <CloseButton
                  onClick={() => void handleDeleteClick(film.id)}
                  className={styles.featured__close}
                />
                <FilmItem
                  id={film.id}
                  image_url={film.posterUrl ?? film.backdropUrl ?? ''}
                />
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
