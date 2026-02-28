import { useCallback, useEffect } from 'react';
// eslint-disable-next-line no-restricted-imports
import { useDispatch, useSelector } from 'react-redux';
import {
  useLoginMutation,
  useGetProfileQuery,
  useLogoutQuery,
  selectIsAuth,
  selectName,
  setIsAuth,
  setName,
  logout as logoutAction,
  selectFavourites,
  selectSurname,
  selectEmail,
  setFavourites,
  setEmail,
  setSurname,
} from '@/entities/session';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const name = useSelector(selectName);
  const surname = useSelector(selectSurname);
  const email = useSelector(selectEmail);
  const favourites = useSelector(selectFavourites);

  const [loginMutation] = useLoginMutation();
  const { refetch: logoutRefetch } = useLogoutQuery();
  const { data, isError, refetch } = useGetProfileQuery();

  useEffect(() => {
    if (data) {
      dispatch(setIsAuth(true));
      dispatch(setName(data.name));
      dispatch(setSurname(data.surname));
      dispatch(setEmail(data.email));
      dispatch(setFavourites(data.favourites));
    } else if (isError) {
      dispatch(setIsAuth(false));
      dispatch(setName(null));
      dispatch(setSurname(null));
      dispatch(setEmail(null));
      dispatch(setFavourites([]));
    }
  }, [data, isError, dispatch]);

  const login = useCallback(
    async (
      email: string,
      password: string
    ): Promise<{ success: boolean; error?: unknown }> => {
      try {
        await loginMutation({ email, password }).unwrap();
        await refetch();
        return { success: true };
      } catch (error) {
        dispatch(setIsAuth(false));
        return { success: false, error };
      }
    },
    [dispatch, loginMutation, refetch]
  );

  const logout = useCallback(async () => {
    try {
      await logoutRefetch();
    } catch {
      // Куки могут очищаться только на бэкенде, при ошибке всё равно сбрасываем состояние
    }
    dispatch(logoutAction());
  }, [dispatch, logoutRefetch]);

  const checkAuth = useCallback(async (): Promise<boolean> => {
    const result = await refetch();
    return result.data != null;
  }, [refetch]);

  return {
    isAuth,
    name,
    surname,
    email,
    favourites,
    login,
    logout,
    checkAuth,
  };
};
