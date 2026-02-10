import { getGenrePicture } from '../../lib/getGenrePicture';
import { translateGenre } from '../../lib/translateGenre';
import styles from './GenreItem.module.scss';

type GenreItemProps = {
  title: string;
};

export const GenreItem = ({ title }: GenreItemProps) => {
  const translatedGenre = translateGenre(title);
  const genreImage = getGenrePicture(title);

  return (
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
  );
};
