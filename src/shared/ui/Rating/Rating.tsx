import { RatingIcon } from '../Icons';
import styles from './Rating.module.scss';

type RatingProps = {
  mark: string;
  type?: 'normal' | 'small';
};

export const Rating = ({ mark, type = 'normal' }: RatingProps) => {
  return (
    <div className={`${styles.rating} ${type === 'small' ? styles.small : ''}`}>
      <RatingIcon />
      <p className={styles.rating__mark}>{mark}</p>
    </div>
  );
};
