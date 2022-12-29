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
      query: ({ userId, page, offset, date }) =>
        `reviews/reviews/?user=${userId}&limit=4${
          page > 1 ? `&offset=${offset}` : ''
        }${
          date ? `&start_date=${date.start_date}&end_date=${date.end_date}` : ''
        }`,
      providesTags: () => ['REVIEW_TAG'],
    }),
    getAllReviews: builder.query({
      query: ({ productId }) =>
        `reviews/reviews/${productId ? `?product=${productId}` : ''}`,
      providesTags: () => ['REVIEW_TAG'],
    }),
    getAllUserReviews: builder.query({
      query: ({ userId }) =>
        `reviews/reviews/?user=${userId}`,
      providesTags: () => ['REVIEW_TAG'],
    }),
  }),
});

export const { useGetReviewsQuery, useGetAllReviewsQuery, useGetAllUserReviewsQuery } = reviewQuery;
