import styles from './Genres.module.scss';

import { GenreItem } from '@/features/genres';

export const Genres = () => {
  const genresList = [
    'history',
    'horror',
    'scifi',
    'stand-up',
    'fantasy',
    'drama',
    'mystery',
    'family',
    'comedy',
    'romance',
    'music',
    'crime',
    'tv-movie',
    'documentary',
    'action',
    'thriller',
    'western',
    'animation',
    'war',
    'adventure',
  ];

  return (
    <section className={styles.genres}>
      <div className='container'>
        <div className={styles.genres__content}>
          <h2 className={`${styles.genres__title} title`}>Жанры фильмов</h2>
          <ul className={styles.genres__list}>
            {genresList.map((genre, index) => (
              <GenreItem key={index} title={genre} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
