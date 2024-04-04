import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://91.108.120.188:4001/articles' }), // Trailing slash for consistency
  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: () => ``, // No need for empty string
    }),
  }),
});

export const { useGetAllArticlesQuery } = articleApi; // Destructure directly
