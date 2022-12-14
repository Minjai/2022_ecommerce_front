import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const faqQuery = createApi({
  reducerPath: 'faqQuery',
  tagTypes: ['FAQ_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: () => 'FAQ/FAQ',
      providesTags: () => ['FAQ_TAG'],
    }),
    getSearchedFaqs: builder.query({
      query: ({ searchHook, page, offset }) =>
        `FAQ/FAQ/?limit=5${page > 1 ? `&offset=${offset}` : ''}${
          searchHook ? `&search=${searchHook}` : ''
        }`,
      providesTags: () => ['FAQ_TAG'],
    }),
  }),
});

export const { useGetFaqsQuery, useGetSearchedFaqsQuery } = faqQuery;
