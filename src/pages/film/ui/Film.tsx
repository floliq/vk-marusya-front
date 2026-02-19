import { useState } from 'react';
import { FilmBanner, FilmDescription } from '@/entities/film';
import { Trailer } from '@/features/films';

export const Film = () => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <>
      <FilmBanner
        onTrailerClick={() => {
          setIsTrailerOpen(true);
        }}
      />
      <FilmDescription />
      <Trailer
        isOpen={isTrailerOpen}
        onClose={() => {
          setIsTrailerOpen(false);
        }}
      />
    </>
  );
};
