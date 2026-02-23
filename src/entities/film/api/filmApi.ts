import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchApi } from '@/shared/api';
import type { Film, FilmsResponseParams } from '../model/types';

const baseQuery = async (endpoint: string) => {
  try {
    const data = await fetchApi<Film>(endpoint);
    return { data };
  } catch (error) {
    return {
      error: {
        status: 'CUSTOM_ERROR' as const,
        data: error instanceof Error ? error.message : 'Request failed',
      },
    };
  }
};

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery,
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getRandomFilm: builder.query<Film, void>({
      query: () => '/movie/random',
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getTopFilms: builder.query<Film[], void>({
      query: () => '/movie/top10',
    }),
    getFilms: builder.query<Film[], FilmsResponseParams>({
      query: (params) =>
        `/movie?${new URLSearchParams(params as Record<string, string>).toString()}`,
    }),
    getFilmById: builder.query<Film, number>({
      query: (id) => `/movie/${id}`,
    }),
  }),
});

export const {
  useGetRandomFilmQuery,
  useGetTopFilmsQuery,
  useGetFilmsQuery,
  useGetFilmByIdQuery,
} = filmsApi;
