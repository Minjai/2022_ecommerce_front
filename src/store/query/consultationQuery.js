import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const consultationQuery = createApi({
  reducerPath: 'consultationQuery',
  tagTypes: ['CONSULTATION_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getSingleConsultations: builder.query({
      query: ({ token, id }) => ({
        url: `consultations/consultations/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => ['CONSULTATION_TAG'],
    }),
    getConsultations: builder.query({
      query: ({ token, page, offset, product }) => ({
        url: `consultations/consultations/?limit=5${
          page > 1 ? `&offset=${offset}` : ''
        }${product ? `&product=${product}` : ''}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => ['CONSULTATION_TAG'],
    }),
    getUserConsultations: builder.query({
      query: ({ token, userId, page, offset, date }) => ({
        url: `consultations/consultations/?user=${userId}&limit=4${
          page > 1 ? `&offset=${offset}` : ''
        }${
          date ? `&start_date=${date.start_date}&end_date=${date.end_date}` : ''
        }`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => ['CONSULTATION_TAG'],
    }),
  }),
});

export const {
  useGetConsultationsQuery,
  useGetUserConsultationsQuery,
  useGetSingleConsultationsQuery,
} = consultationQuery;
