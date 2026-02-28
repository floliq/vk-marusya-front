import { useState } from 'react';
// eslint-disable-next-line no-restricted-imports
import { useDispatch } from 'react-redux';
import {
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
  setFavorites,
} from '@/entities/session';

type UseFavouriteActionOptions = {
  isAuth: boolean;
  favourites: string[];
  onAuthRequired?: () => void;
};

export const useFavouriteAction = (
  filmId: number | undefined,
  options: UseFavouriteActionOptions
) => {
  const dispatch = useDispatch();
  const { isAuth, favourites, onAuthRequired } = options;
  const [addFavouriteMutation] = useAddFavouriteMutation();
  const [removeFavouriteMutation] = useRemoveFavouriteMutation();
  const [isFavouriteLoading, setIsFavouriteLoading] = useState(false);

  const isLiked = filmId != null && favourites.includes(String(filmId));

  const handleFavouriteClick = async () => {
    if (filmId == null) return;
    if (!isAuth) {
      onAuthRequired?.();
      return;
    }
    setIsFavouriteLoading(true);
    try {
      if (isLiked) {
        await removeFavouriteMutation(filmId).unwrap();
        dispatch(
          setFavorites(favourites.filter((id) => id !== String(filmId)))
        );
      } else {
        await addFavouriteMutation(filmId).unwrap();
        dispatch(setFavorites([...favourites, String(filmId)]));
      }
    } finally {
      setIsFavouriteLoading(false);
    }
  };

  return { handleFavouriteClick, isFavouriteLoading, isLiked };
};
