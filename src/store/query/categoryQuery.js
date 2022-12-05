import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryQuery = createApi({
  reducerPath: 'categoryQuery',
  tagTypes: ['CATEGORY_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'products/categories',
      providesTags: () => ['CATEGORY_TAG'],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryQuery
