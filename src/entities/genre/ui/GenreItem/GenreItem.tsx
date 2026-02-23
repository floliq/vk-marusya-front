import { Link } from 'react-router-dom';
import { getGenrePicture } from '@/entities/genre';
import { translateGenre } from '@/shared/lib';
import styles from './GenreItem.module.scss';

type GenreItemProps = {
  title: string;
};

export const GenreItem = ({ title }: GenreItemProps) => {
  const translatedGenre = translateGenre(title);
  const genreImage = getGenrePicture(title);

  return (
    <Link to={`/genres/${title}`}>
      <div className={styles['genre-item']}>
        <div className={styles['genre-item__poster']}>
          {genreImage && (
            <img
              src={genreImage}
              className={styles['genre-item__image']}
              alt={`Картинка ${translatedGenre}`}
            />
          )}
        </div>
        <p className={styles['genre-item__title']}>{translatedGenre}</p>
      </div>
    </Link>
  );
};
