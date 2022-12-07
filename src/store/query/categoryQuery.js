import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const categoryQuery = createApi({
  reducerPath: 'categoryQuery',
  tagTypes: ['CATEGORY_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'products/categories',
      providesTags: () => ['CATEGORY_TAG'],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryQuery
