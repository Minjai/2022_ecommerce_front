import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const consultationQuery = createApi({
  reducerPath: 'consultationQuery',
  tagTypes: ['CONSULTATION_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getConsultations: builder.query({
      query: ({ token, page, offset }) => ({
        url: `consultations/consultations/?limit=5${
          page > 1 ? `&offset=${offset}` : ''
        }`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => ['CONSULTATION_TAG'],
    }),
    getUserConsultations: builder.query({
      query: ({ token, userId, page, offset }) => ({
        url: `consultations/consultations/?user=${userId}&limit=4${
          page > 1 ? `&offset=${offset}` : ''
        }`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => ['CONSULTATION_TAG'],
    }),
  }),
});

export const { useGetConsultationsQuery, useGetUserConsultationsQuery } =
  consultationQuery;
