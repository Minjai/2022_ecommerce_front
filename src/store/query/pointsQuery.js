import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const pointsQuery = createApi({
  reducerPath: 'pointsQuery',
  tagTypes: ['POINTS_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getUserPoints: builder.query({
      query: ({ userId, page, offset, token }) => ({
        url: `accounts/points/?user=${userId}&limit=5${
          page > 1 ? `&offset=${offset}` : ''
        }`,
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }),
      providesTags: () => ['POINTS_TAG'],
    }),
  }),
});

export const { useGetUserPointsQuery } = pointsQuery;
