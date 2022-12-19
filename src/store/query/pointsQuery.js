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
      query: ({ userId, page, offset }) =>
        `accounts/points/?user=${userId}&limit=5${
          page > 1 ? `&offset=${offset}` : ''
        }`,
      providesTags: () => ['POINTS_TAG'],
    }),
    getAllUserPoints: builder.query({
      query: ({ userId }) => `accounts/points/?user=${userId}`,
      providesTags: () => ['POINTS_TAG'],
    }),
  }),
});

export const { useGetUserPointsQuery, useGetAllUserPointsQuery } = pointsQuery;
