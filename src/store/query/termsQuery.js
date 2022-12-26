import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const termsQuery = createApi({
  reducerPath: 'termsQuery',
  tagTypes: ['TERMS_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getTerms: builder.query({
      query: () => 'store_settings/team/',
      providesTags: () => ['TERMS_TAG'],
    }),
  }),
});

export const { useGetTermsQuery } = termsQuery;
