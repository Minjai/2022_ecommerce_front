import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productSearchQuery = createApi({
  reducerPath: 'productSearchQuery',
  tagTypes: ['SEARCH_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://167.172.39.139/api/v1/',
  }),
  endpoints: (builder) => ({
    getSearchProducts: builder.query({
      query: ({str}) => `products/products/?search=${str}`,
      providesTags: () => ['SEARCH_TAG'],
    }),
  }),
});

export const { useGetSearchProductsQuery } = productSearchQuery;
