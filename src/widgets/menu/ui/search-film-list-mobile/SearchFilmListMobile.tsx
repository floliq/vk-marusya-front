import { Link } from 'react-router-dom';
import styles from './SearchFilmListMobile.module.scss';
import { Rating } from '@/shared/ui';

import 'swiper/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SearchFilmListMobile = () => {
  const films = [1, 2, 3, 4, 5];
  return (
    <div className={styles['search-film__list']}>
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
        {films.map((num) => (
          <SwiperSlide key={num} className={styles.swiperSlide}>
            <li className={styles['search-film__item']}>
              <Link
                to={`/films/${num}`}
                className={styles['search-film__film']}
              >
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
