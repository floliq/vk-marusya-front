import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RegisterFormData } from '../model/types';
import type { SessionResult } from '../model/types';

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
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
  }),
});

export const { useRegisterMutation } = sessionApi;
