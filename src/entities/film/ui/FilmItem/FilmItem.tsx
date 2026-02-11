import { Link } from 'react-router-dom';
import styles from './Film.module.scss';

type FilmItemProps = {
  id: number;
  image_url: string;
};

export const FilmItem = ({ id, image_url }: FilmItemProps) => {
  return (
    <li className={styles.films__film}>
      <Link to={`/films/${id}`}>
        <img className={styles.films__banner} src={image_url} alt={`Фильм`} />
      </Link>
    </li>
  );
};
