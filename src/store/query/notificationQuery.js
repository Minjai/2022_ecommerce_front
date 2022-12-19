import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/axios';

export const notificationQuery = createApi({
  reducerPath: 'notificationQuery',
  tagTypes: ['NOTIFICATION_TAG'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getUserNotifications: builder.query({
      query: ({ userId }) => `notifications/notifications/?source=user&recipient=${userId}`,
      providesTags: () => ['NOTIFICATION_TAG'],
    }),
  }),
});

export const { useGetUserNotificationsQuery } = notificationQuery;
