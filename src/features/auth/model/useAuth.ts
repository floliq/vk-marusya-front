import { useCallback, useEffect, useRef } from 'react';
/* eslint-disable no-restricted-imports -- FSD: фича не импортирует из app */
import { useDispatch, useSelector } from 'react-redux';
import {
  useLoginMutation,
  useGetProfileQuery,
  useLogoutMutation,
  selectIsAuth,
  selectIsAuthChecking,
  selectName,
  setIsAuth,
  setIsAuthChecking,
  setName,
  logout as logoutAction,
  selectFavorites,
  selectSurname,
  selectEmail,
  setFavorites,
  setEmail,
  setSurname,
} from '@/entities/session';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isAuthChecking = useSelector(selectIsAuthChecking);
  const name = useSelector(selectName);
  const surname = useSelector(selectSurname);
  const email = useSelector(selectEmail);
  const favourites = useSelector(selectFavorites);
  const [logoutMutation] = useLogoutMutation();
  const [loginMutation] = useLoginMutation();

  const { data, isError, isLoading, isFetching, refetch } =
    useGetProfileQuery();
  const wasFetching = useRef(false);

  useEffect(() => {
    const justFinishedFetching = wasFetching.current && !isFetching;
    wasFetching.current = isFetching;

    if (isLoading) {
      dispatch(setIsAuthChecking(true));
      return;
    }

    dispatch(setIsAuthChecking(false));

    if (data) {
      dispatch(setIsAuth(true));
      dispatch(setName(data.name));
      dispatch(setSurname(data.surname));
      dispatch(setEmail(data.email));
      if (justFinishedFetching) {
        dispatch(setFavorites(data.favorites));
      }
    } else if (isError) {
      dispatch(setIsAuth(false));
      dispatch(setName(null));
      dispatch(setSurname(null));
      dispatch(setEmail(null));
      dispatch(setFavorites([]));
    }
  }, [data, isError, isLoading, isFetching, dispatch]);

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
      await logoutMutation().unwrap();
    } catch {
      dispatch(setIsAuth(false));
      dispatch(setName(null));
      dispatch(setSurname(null));
      dispatch(setEmail(null));
      dispatch(setFavorites([]));
    }
    dispatch(logoutAction());
  }, [dispatch, logoutMutation]);

  const checkAuth = useCallback(async (): Promise<boolean> => {
    const result = await refetch();
    return result.data != null;
  }, [refetch]);

  return {
    isAuth,
    isAuthChecking,
    name,
    surname,
    email,
    favourites,
    login,
    logout,
    checkAuth,
  };
};
