import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/v1/product/`,
  }),
  endpoints: (builder) => ({
    latestProducts: builder.query({ query: () => "latest" }),
  }),
});

export const { useLatestProductsQuery } = productAPI;
