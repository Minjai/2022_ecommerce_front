import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const productQuery = createApi({
  reducerPath: 'productQuery',
  tagTypes: ['PRODUCT_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products/products/',
      providesTags: () => ['PRODUCT_TAG'],
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => `products/products/${id}`,
      providesTags: () => ['PRODUCT_TAG'],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productQuery;
