import styles from './Footer.module.scss';
import { OkIcon, VkIcon, YoutubeIcon, TelegramIcon } from '@/shared/ui/Icons';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__content}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a href='#' className={styles.footer__link}>
                <VkIcon />
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href='#' className={styles.footer__link}>
                <YoutubeIcon />
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href='#' className={styles.footer__link}>
                <OkIcon />
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href='#' className={styles.footer__link}>
                <TelegramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
