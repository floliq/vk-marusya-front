import { Button, Skeleton } from '@/shared/ui';
import styles from './FilmList.module.scss';
import { FilmItem, type Film, useGetFilmsQuery } from '@/entities/film';
import { useEffect, useState } from 'react';

type FilmListProps = {
  genre: string;
};

export const FilmList = ({ genre }: FilmListProps) => {
  const [page, setPage] = useState(0);
  const [allFilms, setAllFilms] = useState<Film[]>([]);
  const { data: films, isLoading } = useGetFilmsQuery({
    genre,
    count: 10,
    page,
  });

  useEffect(() => {
    setPage(0);
    setAllFilms([]);
  }, [genre]);

  useEffect(() => {
    if (!isLoading && films && films.length > 0) {
      if (page === 0) {
        setAllFilms(films);
      } else {
        setAllFilms((prev) => [
          ...prev,
          ...films.filter((f) => !prev.find((p) => p.id === f.id)),
        ]);
      }
    }
  }, [films, isLoading, page]);

  if (isLoading && page === 0 && allFilms.length === 0) {
    return (
      <div className={styles.films}>
        <Skeleton height={800} />
      </div>
    );
  }

  return (
    <>
      <ul className={styles.films}>
        {allFilms.map((film) => (
          <li key={film.id} className={styles.films__item}>
            <FilmItem
              id={film.id}
              imageUrl={film.posterUrl ?? film.backdropUrl ?? ''}
            />
          </li>
        ))}
      </ul>
      {allFilms.length > 0 && (
        <Button
          theme='blue'
          className={styles.films__more}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Показать еще
        </Button>
      )}
    </>
  );
};
