import { SearchFilm } from '../search-film/SearchFilm';
import styles from './SearchFilmMobileModal.module.scss';

type SearchFilmMobileModal = {
  isOpen: boolean;
  onClose: () => void;
};

export const SearchFilmMobileModal = ({
  isOpen,
  onClose,
}: SearchFilmMobileModal) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div
        className={styles.modal__content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <SearchFilm onSuccess={onClose} />
      </div>
    </div>
  );
};
