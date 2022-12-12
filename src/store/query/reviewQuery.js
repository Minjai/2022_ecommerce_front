import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const reviewQuery = createApi({
  reducerPath: 'reviewQuery',
  tagTypes: ['REVIEW_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: ({ userId }) => `reviews/reviews/?user=${userId}`,
      providesTags: () => ['REVIEW_TAG'],
    }),
    getAllReviews: builder.query({
      query: () => `reviews/reviews/`,
      providesTags: () => ['REVIEW_TAG'],
    }),
  }),
});

export const { useGetReviewsQuery, useGetAllReviewsQuery } = reviewQuery;
