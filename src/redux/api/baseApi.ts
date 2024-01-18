import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: () => ({
    // login: builder.mutation({
    //   query: (userInfo) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     body: userInfo,
    //   }),
    // }),
  }),
});