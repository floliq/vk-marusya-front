import { LikeIcon } from '@/shared/ui/Icons';
import styles from './FilmBanner.module.scss';

import { Button, Container, Rating } from '@/shared/ui';
import type { Film } from '../..';
import { formatRuntime, translateGenre } from '@/shared/lib';

type FilmBannerProps = {
  film: Film;
  onTrailerClick?: () => void;
  isLiked?: boolean;
  isFavouriteLoading?: boolean;
  onFavouriteClick?: () => void;
};

export const FilmBanner = ({
  film,
  onTrailerClick,
  isLiked = false,
  isFavouriteLoading = false,
  onFavouriteClick,
}: FilmBannerProps) => {
  const genre = film.genres[0] ? translateGenre(film.genres[0]) : '';

  const handleFavouriteClick = () => {
    if (isFavouriteLoading) return;
    onFavouriteClick?.();
  };

  return (
    <section className={styles['film-banner']}>
      <Container>
        <div className={styles['film-banner__content']}>
          <div className={styles['film-banner__left']}>
            <div className={styles['film-banner__shorts']}>
              <Rating mark={film.tmdbRating} />
              <p className={styles['film-banner__short']}>{film.releaseYear}</p>
              <p className={styles['film-banner__short']}>{genre}</p>
              <p className={styles['film-banner__short']}>
                {formatRuntime(film.runtime)}
              </p>
            </div>
            <h2 className={`${styles['film-banner__title']} title`}>
              {film.title}
            </h2>
            <p className={styles['film-banner__desc']}>{film.plot}</p>

            <div className={styles['film-banner__btns']}>
              <Button
                theme='blue'
                className={styles['film-banner__trailer']}
                onClick={() => onTrailerClick?.()}
              >
                Трейлер
              </Button>
              <button
                className={`${styles['film-banner__favourite']} ${isLiked ? styles['film-banner__favourite-liked'] : ''}`}
                onClick={handleFavouriteClick}
                disabled={isFavouriteLoading}
              >
                <LikeIcon filled={isLiked} />
              </button>
            </div>
          </div>
          <div className={styles['film-banner__right']}>
            {film.backdropUrl ? (
              <img
                className={styles['film-banner__picture']}
                src={film.backdropUrl}
                alt={film.title}
              />
            ) : (
              <div className={styles['film-banner__placeholder']} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
