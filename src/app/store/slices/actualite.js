import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fonarev-api.onrender.com/articles' }), // Trailing slash for consistency
  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: () => ``, // No need for empty string
    }),
  }),
});

export const { useGetAllArticlesQuery } = articleApi; // Destructure directly
