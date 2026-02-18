import { CloseIcon } from '@/shared/ui/Icons';
import styles from './SearchFilm.module.scss';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { SearchFilmList } from '../search-film-list/SearchFilmList';

export const SearchFilm = () => {
  const [value, setValue] = useState('');
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCloseClick = () => {
    setValue('');
  };

  return (
    <div className={styles.search}>
      <input
        type='text'
        className={styles.search__input}
        placeholder='Поиск'
        value={value}
        onChange={onChange}
      />
      {value && (
        <button className={styles.search__close} onClick={handleCloseClick}>
          <CloseIcon />
        </button>
      )}
      {debounceValue && <SearchFilmList />}
    </div>
  );
};
