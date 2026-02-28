import { Link } from 'react-router-dom';
import styles from './Film.module.scss';

type FilmItemProps = {
  id: number;
  image_url: string | null;
};

export const FilmItem = ({ id, image_url }: FilmItemProps) => {
  return (
    <div className={styles.film}>
      <Link to={`/films/${id}`} className={styles.film__link}>
        {image_url && (
          <img
            className={styles.film__banner}
            src={image_url}
            alt={`Фильм ${id}`}
          />
        )}
      </Link>
    </div>
  );
};
