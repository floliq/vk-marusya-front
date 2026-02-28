import { useCallback, useEffect } from 'react';
// eslint-disable-next-line no-restricted-imports
import { useDispatch, useSelector } from 'react-redux';
import {
  useLoginMutation,
  useGetProfileQuery,
  useLogoutMutation,
  selectIsAuth,
  selectUserName,
  setIsAuth,
  setUserName,
  logout as logoutAction,
} from '@/entities/session';

/**
 * Проверка авторизации по cookie-сессии (koa.sess, koa.sess.sig).
 * Запрос GET /api/profile идёт с credentials: 'include', сервер по куки определяет пользователя.
 */
export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);

  const [loginMutation] = useLoginMutation();
  const [logoutMutation] = useLogoutMutation();
  const { data, isError, refetch } = useGetProfileQuery();

  useEffect(() => {
    if (data) {
      dispatch(setIsAuth(true));
      dispatch(setUserName(data.name));
    } else if (isError) {
      dispatch(setIsAuth(false));
      dispatch(setUserName(null));
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
      await logoutMutation().unwrap();
    } catch {
      // Куки могут очищаться только на бэкенде; при ошибке всё равно сбрасываем состояние
    }
    dispatch(logoutAction());
  }, [dispatch, logoutMutation]);

  const checkAuth = useCallback(async (): Promise<boolean> => {
    const result = await refetch();
    return result.data != null;
  }, [refetch]);

  return {
    isAuth,
    userName,
    login,
    logout,
    checkAuth,
  };
};
