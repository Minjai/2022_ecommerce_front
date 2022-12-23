import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const countryQuery = createApi({
  reducerPath: 'countryQuery',
  tagTypes: ['COUNTRY_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => 'store_settings/country/',
      providesTags: () => ['COUNTRY_TAG'],
    }),
  }),
});

export const { useGetCountriesQuery } = countryQuery;
