import { Link } from 'react-router-dom';
import styles from './Film.module.scss';

type FilmItemProps = {
  id: number;
  imageUrl: string | null;
};

export const FilmItem = ({ id, imageUrl }: FilmItemProps) => {
  return (
    <div className={styles.film}>
      <Link to={`/films/${id}`} className={styles.film__link}>
        {imageUrl && (
          <img
            className={styles.film__banner}
            src={imageUrl}
            alt={`Фильм ${id}`}
          />
        )}
      </Link>
    </div>
  );
};
