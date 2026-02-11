import styles from './FilmDescription.module.scss';

export const FilmDescription = () => {
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
                Русский
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
                250 000 руб.
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
                2 835 000 руб.
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
                Игорь Масленников
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
                Ленфильм
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
                Топ-250, 33 место
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
