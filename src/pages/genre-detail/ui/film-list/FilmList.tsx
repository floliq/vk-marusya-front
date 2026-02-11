import { Button } from '@/shared/ui';
import styles from './FilmList.module.scss';
import { FilmItem } from '@/entities/film';

export const FilmList = () => {
  const films = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <ul className={styles.films}>
        {films.map((num) => (
          <FilmItem
            key={num}
            id={num}
            image_url='https://cinemaguide.skillbox.cc/images/1045770/9jlGTo6GiHeri1lx2czChvLzTO3.jpg'
          />
        ))}
      </ul>
      <Button theme='blue' className={styles.films__more}>
        Показать еще
      </Button>
    </>
  );
};
