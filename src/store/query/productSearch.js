import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const productSearchQuery = createApi({
  reducerPath: 'productSearchQuery',
  tagTypes: ['SEARCH_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getSearchProducts: builder.query({
      query: ({str}) => `products/products/?search=${str}`,
      providesTags: () => ['SEARCH_TAG'],
    }),
  }),
});

export const { useGetSearchProductsQuery } = productSearchQuery;
