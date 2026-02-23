import type { Film } from '../../model/types';
import styles from './FilmDescription.module.scss';

type FilmDescriptionProps = {
  film: Film;
};
export const FilmDescription = ({ film }: FilmDescriptionProps) => {
  return (
    <section className={styles['film-desc']}>
      <div className='container'>
        <div className={styles['film-desc__content']}>
          <h2 className={`${styles['film-desc__title']} title`}>О фильме</h2>
          <ul className={styles['film-desc__list']}>
            <li className={styles['film-desc__item']}>
              <div className={styles['film-desc__wrapper']}>
                <span className={`${styles['film-desc__heading']} text`}>
                  Язык оригинала
                </span>
                <span className={styles['film-desc__dots']}></span>
              </div>
              <span className={`${styles['film-desc__info']} text`}>
                {film.language ? film.language : 'Неизвестно'}
              </span>
            </li>
            <li className={styles['film-desc__item']}>
              <div className={styles['film-desc__wrapper']}>
                <span className={`${styles['film-desc__heading']} text`}>
                  Бюджет
                </span>
                <span className={styles['film-desc__dots']}></span>
              </div>
              <span className={`${styles['film-desc__info']} text`}>
                {film.budget ?? 'Неизвестно'}
              </span>
            </li>
            <li className={styles['film-desc__item']}>
              <div className={styles['film-desc__wrapper']}>
                <span className={`${styles['film-desc__heading']} text`}>
                  Выручка
                </span>
                <span className={styles['film-desc__dots']}></span>
              </div>
              <span className={`${styles['film-desc__info']} text`}>
                {film.revenue ?? 'Неизвестно'}
              </span>
            </li>
            <li className={styles['film-desc__item']}>
              <div className={styles['film-desc__wrapper']}>
                <span className={`${styles['film-desc__heading']} text`}>
                  Режиссёр
                </span>
                <span className={styles['film-desc__dots']}></span>
              </div>
              <span className={`${styles['film-desc__info']} text`}>
                {film.director ?? 'Неизвестно'}
              </span>
            </li>
            <li className={styles['film-desc__item']}>
              <div className={styles['film-desc__wrapper']}>
                <span className={`${styles['film-desc__heading']} text`}>
                  Продакшен
                </span>
                <span className={styles['film-desc__dots']}></span>
              </div>
              <span className={`${styles['film-desc__info']} text`}>
                {film.production ?? 'Неизвестно'}
              </span>
            </li>
            <li className={styles['film-desc__item']}>
              <div className={styles['film-desc__wrapper']}>
                <span className={`${styles['film-desc__heading']} text`}>
                  Награды
                </span>
                <span className={styles['film-desc__dots']}></span>
              </div>
              <span className={`${styles['film-desc__info']} text`}>
                {film.awardsSummary ?? 'Неизвестно'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
