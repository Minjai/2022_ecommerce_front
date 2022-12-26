import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const footerQuery = createApi({
  reducerPath: 'footerQuery',
  tagTypes: ['FOOTER_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getFooterInfo : builder.query({
      query: () => 'store_settings/footer/',
      providesTags: () => ['FOOTER_TAG'],
    }),
  }),
});

export const { useGetFooterInfoQuery } = footerQuery;
