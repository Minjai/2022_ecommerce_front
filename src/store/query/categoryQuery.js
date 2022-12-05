import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryQuery = createApi({
  reducerPath: 'categoryQuery',
  tagTypes: ['CATEGORY_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://167.172.39.139/api/v1/',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'products/categories',
      providesTags: () => ['CATEGORY_TAG'],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryQuery
