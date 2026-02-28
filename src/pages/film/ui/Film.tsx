import { useState } from 'react';
import {
  FilmBanner,
  FilmDescription,
  useGetFilmByIdQuery,
} from '@/entities/film';
import { Trailer } from '@/features/films';
import { useAuth, AuthForm } from '@/features/auth';
import {
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
  setFavorites,
} from '@/entities/session';
import { useParams } from 'react-router-dom';
/* eslint-disable no-restricted-imports -- FSD: pages не импортируют из app, используем react-redux */
import { useDispatch } from 'react-redux';
import { Modal, Skeleton } from '@/shared/ui';

export const Film = () => {
  const dispatch = useDispatch();
  const { filmId } = useParams<{ filmId: string }>();
  const { data: film, isLoading } = useGetFilmByIdQuery(Number(filmId ?? '0'));
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isFavouriteLoading, setIsFavouriteLoading] = useState(false);

  const { isAuth, favourites } = useAuth();
  const [addFavouriteMutation] = useAddFavouriteMutation();
  const [removeFavouriteMutation] = useRemoveFavouriteMutation();

  const isLiked = film != null && favourites.includes(String(film.id));

  const handleFavouriteClick = async () => {
    if (film == null) return;
    if (!isAuth) {
      setIsAuthOpen(true);
      return;
    }
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
  };

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
