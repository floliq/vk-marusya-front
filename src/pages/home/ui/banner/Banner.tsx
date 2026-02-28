import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trailer } from '@/features/films';
import { useGetRandomFilmQuery } from '@/entities/film';
import { Button, Container, Rating, Skeleton } from '@/shared/ui';
import { LikeIcon, ReloadIcon } from '@/shared/ui/Icons';
import styles from './Banner.module.scss';
import { formatRuntime, translateGenre } from '@/shared/lib';
import { useAuth, AuthForm } from '@/features/auth';
import { Modal } from '@/shared/ui';
import {
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
  setFavorites,
} from '@/entities/session';
/* eslint-disable no-restricted-imports -- FSD: pages не импортируют из app, используем react-redux */
import { useDispatch } from 'react-redux';

export const Banner = () => {
  const dispatch = useDispatch();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const { data: film, isLoading, refetch } = useGetRandomFilmQuery();
  const { isAuth, favourites } = useAuth();
  const [addFavouriteMutation] = useAddFavouriteMutation();
  const [removeFavouriteMutation] = useRemoveFavouriteMutation();
  const [isFavouriteLoading, setIsFavouriteLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(() =>
    favourites.includes(String(film?.id))
  );

  useEffect(() => {
    if (favourites.length > 0) {
      setIsLiked(favourites.includes(String(film?.id)));
    } else {
      setIsLiked(false);
    }
  }, [favourites, film?.id]);

  const handleReload = () => {
    void refetch();
  };

  const handleTrailerClick = () => {
    setIsTrailerOpen(true);
  };

  const handleCloseTrailer = () => {
    setIsTrailerOpen(false);
  };

  const handleFavouriteClick = async () => {
    if (!film || isFavouriteLoading) return;
    if (!isAuth) {
      setIsAuthOpen(true);
    } else {
      setIsFavouriteLoading(true);
      try {
        if (isLiked) {
          await removeFavouriteMutation(film.id).unwrap();
          dispatch(
            setFavorites(favourites.filter((id) => id !== String(film.id)))
          );
        } else {
          await addFavouriteMutation(film.id).unwrap();
          dispatch(setFavorites([...favourites, String(film.id)]));
        }
      } finally {
        setIsFavouriteLoading(false);
      }
    }
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
                className={`${styles.banner__favourite} ${isLiked ? styles['banner__favourite-liked'] : ''}`}
                onClick={() => void handleFavouriteClick()}
                disabled={isFavouriteLoading}
              >
                <LikeIcon filled={isLiked} />
              </button>
              <button
                className={styles.banner__reload}
                onClick={handleReload}
                disabled={isLoading}
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
