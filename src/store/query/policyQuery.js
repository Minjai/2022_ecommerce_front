import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const policyQuery = createApi({
  reducerPath: 'policyQuery',
  tagTypes: ['POLICY_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPolicy: builder.query({
      query: () => 'store_settings/our_policy/',
      providesTags: () => ['POLICY_TAG'],
    }),
  }),
});

export const { useGetPolicyQuery } = policyQuery;
