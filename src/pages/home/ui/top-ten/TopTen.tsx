import styles from './TopTen.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import { FilmItem, useGetTopFilmsQuery } from '@/entities/film';

export const TopTen = () => {
  const { data: films, isLoading } = useGetTopFilmsQuery();

  if (isLoading) {
    return (
      <section className={styles.top}>
        <div className='container fluid'>
          <div className={styles.top__skeleton} />
        </div>
      </section>
    );
  }
  return (
    <section className={styles.top}>
      <div className='container fluid'>
        <div className={styles.top__content}>
          <h2 className={styles.top__title}>Топ 10 фильмов</h2>
          <ul className={styles.top__films}>
            {films?.map((film, index) => (
              <li key={film.id} className={styles.top__film}>
                <span className={styles.top__number}>{index + 1}</span>
                <FilmItem
                  id={film.id}
                  image_url={film.posterUrl ?? film.backdropUrl ?? ''}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles['top__content-mobile']}>
          <h2 className={styles.top__title}>Топ 10 фильмов</h2>
          <Swiper
            spaceBetween={40}
            slidesPerView='auto'
            navigation
            pagination={{ clickable: true }}
            className={styles.top__swiper}
            tag='ul'
            breakpoints={{
              320: { slidesPerView: 1.2 },
              480: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 'auto', enabled: false },
            }}
          >
            {films?.map((film, index) => (
              <SwiperSlide key={film.id} className={styles.swiperSlide}>
                <li className={styles.top__film}>
                  <span className={styles.top__number}>{index + 1}</span>
                  <FilmItem
                    id={film.id}
                    image_url={film.posterUrl ?? film.backdropUrl ?? ''}
                  />
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
