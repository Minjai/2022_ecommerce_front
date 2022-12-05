import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderQuery = createApi({
  reducerPath: 'orderQuery',
  tagTypes: ['ORDER_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => 'orders/orders',
      providesTags: () => ['ORDER_TAG'],
    }),
    createOrder: builder.mutation({
      query: ({ status }) => ({
        url: 'orders/orders',
        method: 'POST',
        body: {
          status,
        },
      }),
      invalidatesTags: ['ORDER_TAG'],
    }),
    getOrderItems: builder.query({
      query: () => ({
        url: 'orders/order_items/',
        headers: {
          "X-CSRFToken": localStorage.getItem('accessToken')
        }
      }),
      providesTags: () => ['ORDER_TAG'],
    }),
    createOrderItems: builder.mutation({
      query: ({ items }) => ({
        url: 'orders/order_items/',
        method: 'POST',
        body: items,
      }),
      invalidatesTags: ['ORDER_TAG'],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useCreateOrderItemsMutation,
  useGetOrderItemsQuery,
  useGetOrdersQuery,
} = orderQuery;
