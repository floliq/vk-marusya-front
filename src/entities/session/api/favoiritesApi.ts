import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Profile, FavouriteFilm } from '../model/types';
import type { SessionResult } from '../model/types';

export const favouritesApi = createApi({
  reducerPath: 'favouritesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getFavourites: builder.query<FavouriteFilm[], void>({
      query: () => '/favorites',
    }),
    addFavourite: builder.mutation<SessionResult, number>({
      query: (id) => ({
        url: '/favorites',
        method: 'POST',
        body: new URLSearchParams({ id: String(id) }).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
    removeFavourite: builder.mutation<Profile, number>({
      query: (filmId) => ({
        url: `/favorites/${filmId}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetFavouritesQuery,
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
} = favouritesApi;
