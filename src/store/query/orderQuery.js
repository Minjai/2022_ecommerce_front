import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const orderQuery = createApi({
  reducerPath: 'orderQuery',
  tagTypes: ['ORDER_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({ token, userId, offset, page, startDate, endDate }) => ({
        url: `orders/orders/?buyer=${userId}${
          startDate ? `&start_date=${startDate}&end_date=${endDate}` : ''
        }&limit=4${page > 1 ? `&offset=${offset}` : ''}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => ['ORDER_TAG'],
    }),
    getOrderItems: builder.query({
      query: () => ({
        url: 'orders/order_items/',
      }),
      providesTags: () => ['ORDER_TAG'],
    }),
    deleteOrder: builder.mutation({
      query: ({ id, token }) => ({
        url: `orders/orders/${id}/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['ORDER_TAG'],
    }),
  }),
});

export const {
  useDeleteOrderMutation,
  useGetOrderItemsQuery,
  useGetOrdersQuery,
} = orderQuery;
