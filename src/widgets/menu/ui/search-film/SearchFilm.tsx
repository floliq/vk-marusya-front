import { CloseIcon } from '@/shared/ui/Icons';
import styles from './SearchFilm.module.scss';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { SearchFilmList } from '../search-film-list/SearchFilmList';
import { useGetFilmsQuery } from '@/entities/film';

type SearchFilmProps = {
  onSuccess?: () => void;
};

export const SearchFilm = ({ onSuccess }: SearchFilmProps) => {
  const [value, setValue] = useState('');
  const [debounceValue, setDebounceValue] = useState('');
  const { data: films } = useGetFilmsQuery({ title: debounceValue });

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
    setDebounceValue('');
    onSuccess?.();
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
      {debounceValue && (
        <SearchFilmList
          films={films ?? []}
          onSuccess={onSuccess ?? handleCloseClick}
        />
      )}
    </div>
  );
};
