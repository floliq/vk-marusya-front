import { useState } from 'react';
import {
  FilmBanner,
  FilmDescription,
  useGetFilmByIdQuery,
} from '@/entities/film';
import { Trailer } from '@/features/films';
import { useAuth, AuthForm } from '@/features/auth';
import { useFavouriteAction } from '@/features/favourites';
import { useParams } from 'react-router-dom';
import { Modal, Skeleton } from '@/shared/ui';

export const Film = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const { data: film, isLoading } = useGetFilmByIdQuery(Number(filmId ?? '0'));
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { isAuth, favourites } = useAuth();

  const { handleFavouriteClick, isFavouriteLoading, isLiked } =
    useFavouriteAction(film?.id, {
      isAuth,
      favourites,
      onAuthRequired: () => {
        setIsAuthOpen(true);
      },
    });

  if (isLoading) {
    return (
      <div className='container'>
        <Skeleton height={800} />
      </div>
    );
  }

  if (!film) return null;

  return (
    <>
      <FilmBanner
        film={film}
        onTrailerClick={() => {
          setIsTrailerOpen(true);
        }}
        isLiked={isLiked}
        isFavouriteLoading={isFavouriteLoading}
        onFavouriteClick={() => {
          void handleFavouriteClick();
        }}
      />
      <FilmDescription film={film} />
      <Trailer
        isOpen={isTrailerOpen}
        onClose={() => {
          setIsTrailerOpen(false);
        }}
        videoId={film.trailerYouTubeId ?? ''}
        title={film.title}
      />
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
    </>
  );
};
