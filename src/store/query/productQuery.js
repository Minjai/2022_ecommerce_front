import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productQuery = createApi({
  reducerPath: 'productQuery',
  tagTypes: ['PRODUCT_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://167.172.39.139/api/v1/',
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
