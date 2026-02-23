import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchApi } from '@/shared/api';
import type { GenreResponse } from '../model/types';

const baseQuery = async (endpoint: string) => {
  try {
    const data = await fetchApi<GenreResponse>(endpoint);
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

export const genreApi = createApi({
  reducerPath: 'genreApi',
  baseQuery,
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getGenres: builder.query<GenreResponse, void>({
      query: () => '/movie/genres',
    }),
  }),
});

export const { useGetGenresQuery } = genreApi;
