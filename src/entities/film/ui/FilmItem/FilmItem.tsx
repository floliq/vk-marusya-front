import { Link } from 'react-router-dom';
import styles from './Film.module.scss';

type FilmItemProps = {
  id: number;
  image_url: string;
};

export const FilmItem = ({ id, image_url }: FilmItemProps) => {
  return (
    <div className={styles.film}>
      <Link to={`/films/${id}`}>
        <img className={styles.film__banner} src={image_url} alt={`Фильм`} />
      </Link>
    </div>
  );
};
