import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RegisterFormData, LoginFormData } from '../model/types';
import type { SessionResult, Profile } from '../model/types';

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getProfile: builder.query<Profile, void>({
      query: () => '/profile',
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    logout: builder.query<SessionResult, void>({
      query: () => '/auth/logout',
    }),
    register: builder.mutation<SessionResult, RegisterFormData>({
      query: (formData) => ({
        url: '/user',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    login: builder.mutation<SessionResult, LoginFormData>({
      query: (formData) => ({
        url: '/auth/login',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetProfileQuery,
  useLogoutQuery,
} = sessionApi;
