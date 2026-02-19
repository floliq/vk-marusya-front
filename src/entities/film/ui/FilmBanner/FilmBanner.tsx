import { LikeIcon, RatingIcon } from '@/shared/ui/Icons';
import styles from './FilmBanner.module.scss';

import { Button, Container } from '@/shared/ui';

type FilmBannerProps = {
  onTrailerClick?: () => void;
};

export const FilmBanner = ({ onTrailerClick }: FilmBannerProps) => {
  return (
    <section className={styles['film-banner']}>
      <Container>
        <div className={styles['film-banner__content']}>
          <div className={styles['film-banner__left']}>
            <div className={styles['film-banner__shorts']}>
              <div className={styles['film-banner__rating']}>
                <RatingIcon />
                <p className={styles['film-banner__mark']}>7,5</p>
              </div>
              <p className={styles['film-banner__short']}>1979</p>
              <p className={styles['film-banner__short']}>детектив</p>
              <p className={styles['film-banner__short']}>1 ч 7 мин</p>
            </div>
            <h2 className={`${styles['film-banner__title']} title`}>
              Шерлок Холмс и доктор Ватсон: Знакомство
            </h2>
            <p className={styles['film-banner__desc']}>
              Увлекательные приключения самого известного сыщика всех времен
            </p>

            <div className={styles['film-banner__btns']}>
              <Button
                theme='blue'
                className={styles['film-banner__trailer']}
                onClick={() => onTrailerClick?.()}
              >
                Трейлер
              </Button>
              <button className={styles['film-banner__favourite']}>
                <LikeIcon />
              </button>
            </div>
          </div>
          <div className={styles['film-banner__right']}>
            <img
              className={styles['film-banner__picture']}
              src='/banner.jpg'
              alt='Банер'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
