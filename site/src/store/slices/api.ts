import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = import.meta.env.VITE_APP_BASE_URL;
export const basePort = import.meta.env.VITE_APP_BASE_PORT;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    example: builder.query({
      query: () => "test-api-url",
    }),
  }),
});

export const { useLazyExampleQuery } = api;
