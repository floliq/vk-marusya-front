import { Trailer } from '@/features/films';
import styles from './Banner.module.scss';

import { Button, Container, Rating } from '@/shared/ui';
import { LikeIcon, ReloadIcon } from '@/shared/ui/Icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Banner = () => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const handleTrailerClick = () => {
    setIsTrailerOpen(true);
  };

  const handleCloseTrailer = () => {
    setIsTrailerOpen(false);
  };

  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.banner__content}>
          <div className={styles.banner__left}>
            <div className={styles.banner__shorts}>
              <Rating mark='7.5' />
              <p className={styles.banner__short}>1979</p>
              <p className={styles.banner__short}>детектив</p>
              <p className={styles.banner__short}>1 ч 7 мин</p>
            </div>
            <h2 className={`${styles.banner__title} title`}>
              Шерлок Холмс и доктор Ватсон: Знакомство
            </h2>
            <p className={styles.banner__desc}>
              Увлекательные приключения самого известного сыщика всех времен
            </p>

            <div className={styles.banner__btns}>
              <Button
                theme='blue'
                className={styles.banner__trailer}
                onClick={handleTrailerClick}
              >
                Трейлер
              </Button>
              <Link to='/films/1'>
                <Button theme='dark' className={styles.banner__about}>
                  О фильме
                </Button>
              </Link>
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
        <Trailer isOpen={isTrailerOpen} onClose={handleCloseTrailer} />
      </Container>
    </section>
  );
};
