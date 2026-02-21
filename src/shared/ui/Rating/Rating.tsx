import { RatingIcon } from '../Icons';
import styles from './Rating.module.scss';

type RatingProps = {
  mark: number;
  type?: 'normal' | 'small';
};

export const Rating = ({ mark, type = 'normal' }: RatingProps) => {
  const formattedMark = mark.toFixed(1);

  const getRatingClass = () => {
    if (mark >= 8) return styles.yellow;
    else if (mark >= 7) return styles.green;
    else if (mark >= 6) return styles.standart;
    else return styles.red;
  };

  return (
    <div
      className={`${styles.rating} ${type === 'small' ? styles.small : ''} ${getRatingClass()}`}
    >
      <RatingIcon />
      <p className={styles.rating__mark}>{formattedMark}</p>
    </div>
  );
};
