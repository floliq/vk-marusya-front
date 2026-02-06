import styles from './TopTen.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';

export const TopTen = () => {
  const films = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className={styles.top}>
      <div className='container fluid'>
        <div className={styles.top__content}>
          <h2 className={styles.top__title}>Топ 10 фильмов</h2>
          <ul className={styles.top__films}>
            {films.map((num) => (
              <li key={num} className={styles.top__film}>
                <span className={styles.top__number}>{num}</span>
                <img
                  className={styles.top__banner}
                  src='/poster.webp'
                  alt={`Фильм ${num}`}
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
            breakpoints={{
              320: { slidesPerView: 1.2 },
              480: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 'auto', enabled: false },
            }}
          >
            {films.map((num) => (
              <SwiperSlide key={num} className={styles.swiperSlide}>
                <div className={styles.top__film}>
                  <span className={styles.top__number}>{num}</span>
                  <img
                    className={styles.top__banner}
                    src='/poster.webp'
                    alt={`Фильм ${num}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
