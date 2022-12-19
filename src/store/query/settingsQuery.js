import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const settingsQuery = createApi({
  reducerPath: 'settingsQuery',
  tagTypes: ['SETTING_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getBanners: builder.query({
      query: () => 'store_settings/banners/',
      providesTags: () => ['SETTING_TAG'],
    }),
    getContacts: builder.query({
      query: () => 'store_settings/contacts/',
      providesTags: () => ['SETTING_TAG'],
    }),
  }),
});

export const { useGetBannersQuery, useGetContactsQuery } = settingsQuery;
