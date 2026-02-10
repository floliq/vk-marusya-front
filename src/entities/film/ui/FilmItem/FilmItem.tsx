import styles from './Film.module.scss';

type FilmItemProps = {
  image_url: string;
};

export const FilmItem = ({ image_url }: FilmItemProps) => {
  return (
    <li className={styles.films__film}>
      <img className={styles.films__banner} src={image_url} alt={`Фильм`} />
    </li>
  );
};
