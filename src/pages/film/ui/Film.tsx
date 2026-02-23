import { useState } from 'react';
import {
  FilmBanner,
  FilmDescription,
  useGetFilmByIdQuery,
} from '@/entities/film';
import { Trailer } from '@/features/films';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@/shared/ui';

export const Film = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const { data: film, isLoading } = useGetFilmByIdQuery(Number(filmId ?? '0'));
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

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
    </>
  );
};
