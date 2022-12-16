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
    getSingleCategoryProducts: builder.query({
      query: ({ id }) =>
        `products/products/?category=${id}`,
      providesTags: () => ['PRODUCT_TAG'],
    }),
    getCategoryProducts: builder.query({
      query: ({ id, page, offset }) =>
        `products/products/?category=${id}&limit=2${
          page > 1 ? `&offset=${offset}` : ''
        }`,
      providesTags: () => ['PRODUCT_TAG'],
    }),
    getBestProducts: builder.query({
      query: ({ id, page, offset }) =>
        `products/products/?category=${id}&limit=2${
          page > 1 ? `&offset=${offset}` : ''
        }`,
      providesTags: () => ['PRODUCT_TAG'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetSingleCategoryProductsQuery,
  useGetBestProductsQuery,
  useGetCategoryProductsQuery
} = productQuery;
