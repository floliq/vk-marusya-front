import { CloseButton } from '@/shared/ui';
import styles from './FeaturedFilms.module.scss';

import { FilmItem } from '@/entities/film';
import { Swiper, SwiperSlide } from 'swiper/react';

export const FeaturedFilms = () => {
  const films = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const handleDeleteClick = () => {
    console.log('button clicked');
  };

  return (
    <>
      <div className={styles.featured}>
        <ul className={styles.featured__list}>
          {films.map((num) => (
            <li key={num} className={styles.featured__item}>
              <CloseButton
                onClick={handleDeleteClick}
                className={styles.featured__close}
              />
              <FilmItem
                id={num}
                image_url={
                  'https://cinemaguide.skillbox.cc/images/1045770/9jlGTo6GiHeri1lx2czChvLzTO3.jpg'
                }
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
          {films.map((num) => (
            <SwiperSlide key={num} className={styles.swiperSlide}>
              <li key={num} className={styles.featured__item}>
                <CloseButton
                  onClick={handleDeleteClick}
                  className={styles.featured__close}
                />
                <FilmItem
                  id={num}
                  image_url={
                    'https://cinemaguide.skillbox.cc/images/1045770/9jlGTo6GiHeri1lx2czChvLzTO3.jpg'
                  }
                />
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
