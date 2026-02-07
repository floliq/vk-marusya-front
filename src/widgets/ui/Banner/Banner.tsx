import styles from './Banner.module.scss';

import { Button, Container } from '@/shared/ui';
import { LikeIcon, RatingIcon, ReloadIcon } from '@/shared/ui/Icons';

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.banner__content}>
          <div className={styles.banner__left}>
            <div className={styles.banner__shorts}>
              <div className={styles.banner__rating}>
                <RatingIcon />
                <p className={styles.banner__mark}>7,5</p>
              </div>
              <p className={styles.banner__short}>1979</p>
              <p className={styles.banner__short}>детектив</p>
              <p className={styles.banner__short}>1 ч 7 мин</p>
            </div>
            <h2 className={styles.banner__title}>
              Шерлок Холмс и доктор Ватсон: Знакомство
            </h2>
            <p className={styles.banner__desc}>
              Увлекательные приключения самого известного сыщика всех времен
            </p>

            <div className={styles.banner__btns}>
              <Button theme='blue' className={styles.banner__trailer}>
                Трейлер
              </Button>
              <Button theme='dark' className={styles.banner__about}>
                О фильме
              </Button>
              <button className={styles.banner__favourite}>
                <LikeIcon />
              </button>
              <button className={styles.banner__reload}>
                <ReloadIcon />
              </button>
            </div>
          </div>
          <div className={styles.banner__right}>
            <img
              className={styles.banner__picture}
              src='/banner.jpg'
              alt='Банер'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
