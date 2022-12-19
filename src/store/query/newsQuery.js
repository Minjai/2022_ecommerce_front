import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const newsQuery = createApi({
  reducerPath: 'newsQuery',
  tagTypes: ['NEWS_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsSearch, page, offset }) =>
        `news/news/?limit=5${page > 1 ? `&offset=${offset}` : ''}${
          newsSearch ? `&search=${newsSearch}` : ''
        }`,
      providesTags: () => ['NEWS_TAG'],
    }),
    getSingleNew: builder.query({
      query: ({ id }) => `news/news/${id}`,
      providesTags: () => ['NEWS_TAG'],
    }),
    getFirstTwoNews: builder.query({
      query: () => `news/news/?limit=2`,
      providesTags: () => ['NEWS_TAG'],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetSingleNewQuery,
  useGetFirstTwoNewsQuery,
} = newsQuery;
