import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trailer } from '@/features/films';
import { useGetRandomFilmQuery } from '@/entities/film';
import { Button, Container, Rating, Skeleton } from '@/shared/ui';
import { LikeIcon, ReloadIcon } from '@/shared/ui/Icons';
import styles from './Banner.module.scss';
import { formatRuntime, translateGenre } from '@/shared/lib';
import { useAuth, AuthForm } from '@/features/auth';
import { useFavouriteAction } from '@/features/favourites';
import { Modal } from '@/shared/ui';

export const Banner = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const { data: film, isLoading, refetch } = useGetRandomFilmQuery();
  const { isAuth, favourites } = useAuth();

  const { handleFavouriteClick, isFavouriteLoading, isLiked } =
    useFavouriteAction(film?.id, {
      isAuth,
      favourites,
      onAuthRequired: () => {
        setIsAuthOpen(true);
      },
    });

  const handleReload = () => {
    void refetch();
  };

  const handleTrailerClick = () => {
    setIsTrailerOpen(true);
  };

  const handleCloseTrailer = () => {
    setIsTrailerOpen(false);
  };

  if (isLoading) {
    return (
      <section className={styles.banner}>
        <Container>
          <Skeleton height={400} />
        </Container>
      </section>
    );
  }

  if (!film) return null;

  const genre = film.genres[0] ? translateGenre(film.genres[0]) : '';
  const backdrop = film.backdropUrl ?? film.posterUrl;

  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.banner__content}>
          <div className={styles.banner__left}>
            <div className={styles.banner__shorts}>
              <Rating mark={film.tmdbRating} />
              <p className={styles.banner__short}>{film.releaseYear}</p>
              {genre && <p className={styles.banner__short}>{genre}</p>}
              {film.runtime > 0 && (
                <p className={styles.banner__short}>
                  {formatRuntime(film.runtime)}
                </p>
              )}
            </div>
            <h2 className={`${styles.banner__title} title`}>{film.title}</h2>
            <p className={styles.banner__desc}>{film.plot}</p>

            <div className={styles.banner__btns}>
              {film.trailerYouTubeId && (
                <Button
                  theme='blue'
                  className={styles.banner__trailer}
                  onClick={handleTrailerClick}
                >
                  Трейлер
                </Button>
              )}
              <Link to={`/films/${String(film.id)}`}>
                <Button theme='dark' className={styles.banner__about}>
                  О фильме
                </Button>
              </Link>
              <button
                type='button'
                className={`${styles.banner__favourite} ${isLiked ? styles['banner__favourite-liked'] : ''}`}
                onClick={() => void handleFavouriteClick()}
                disabled={isFavouriteLoading}
                aria-label={
                  isLiked ? 'Удалить из избранного' : 'Добавить в избранное'
                }
              >
                <LikeIcon filled={isLiked} />
              </button>
              <button
                type='button'
                className={styles.banner__reload}
                onClick={handleReload}
                disabled={isLoading}
                aria-label='Обновить'
              >
                <ReloadIcon />
              </button>
            </div>
          </div>
          <div className={styles.banner__right}>
            {backdrop ? (
              <img
                className={styles.banner__picture}
                src={backdrop}
                alt={film.title}
              />
            ) : (
              <div className={styles.banner__placeholder} />
            )}
          </div>
        </div>
        <Trailer
          isOpen={isTrailerOpen}
          onClose={handleCloseTrailer}
          videoId={film.trailerYouTubeId ?? undefined}
          title={film.title}
        />
      </Container>
      <Modal
        isOpen={isAuthOpen}
        onClose={() => {
          setIsAuthOpen(false);
        }}
      >
        <AuthForm
          onSuccess={() => {
            setIsAuthOpen(false);
          }}
        />
      </Modal>
    </section>
  );
};
