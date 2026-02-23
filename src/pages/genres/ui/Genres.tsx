import { useGetGenresQuery } from '@/entities/genre';
import styles from './Genres.module.scss';

import { GenreItem } from '@/features/genres';

export const Genres = () => {
  const { data: genresList, isLoading } = useGetGenresQuery();

  if (isLoading) {
    return (
      <section className={styles.genres}>
        <div className='container'>
          <div className={styles.genres__skeleton} />
        </div>
      </section>
    );
  }

  if (!genresList) {
    return null;
  }

  return (
    <section className={styles.genres}>
      <div className='container'>
        <div className={styles.genres__content}>
          <h2 className={`${styles.genres__title} title`}>Жанры фильмов</h2>
          <ul className={styles.genres__list}>
            {genresList.map((genre) => (
              <GenreItem key={genre} title={genre} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
