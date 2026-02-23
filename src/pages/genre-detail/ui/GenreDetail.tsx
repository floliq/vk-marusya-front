import { translateGenre } from '@/features/genres';
import styles from './GenreDetail.module.scss';

import { BackIcon } from '@/shared/ui/Icons';
import { FilmList } from './film-list/FilmList';
import { Link, useParams } from 'react-router-dom';

export const GenreDetail = () => {
  const { genre } = useParams<{ genre: string }>();
  const translatedGenre = translateGenre(genre ?? '');

  return (
    <section className={styles.genre}>
      <div className='container'>
        <div className={styles.genre__content}>
          <h2 className={`${styles.genre__title} title`}>
            <Link to={'/genres'} className={styles.genre__back}>
              <BackIcon />
            </Link>{' '}
            {translatedGenre}
          </h2>
          <FilmList genre={genre ?? ''} />
        </div>
      </div>
    </section>
  );
};
