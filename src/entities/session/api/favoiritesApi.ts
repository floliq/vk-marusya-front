import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Profile, FavouriteFilm } from '../model/types';
import type { SessionResult } from '../model/types';

export const favouritesApi = createApi({
  reducerPath: 'favouritesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL ?? '/api',
    credentials: 'include',
  }),
  tagTypes: ['Favourites'],
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getFavourites: builder.query<FavouriteFilm[], void>({
      query: () => '/favorites',
      providesTags: ['Favourites'],
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
      invalidatesTags: ['Favourites'],
    }),
    removeFavourite: builder.mutation<Profile, number>({
      query: (filmId) => ({
        url: `/favorites/${filmId}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Favourites'],
    }),
  }),
});

export const {
  useGetFavouritesQuery,
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
} = favouritesApi;
