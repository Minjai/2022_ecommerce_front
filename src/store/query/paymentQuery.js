import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const paymentQuery = createApi({
  reducerPath: 'paymentQuery',
  tagTypes: ['PAYMENT_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPaymentInfo: builder.query({
      query: ({ token }) => ({
        url: `orders/payment_information/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => ['PAYMENT_TAG'],
    }),
  }),
});

export const { useGetPaymentInfoQuery } = paymentQuery;
