import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

// eslint-disable-next-line @typescript-eslint/ban-types
const baseQueryWithRefreshToken = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);
    
    const user = (api.getState() as RootState).auth.user;

    api.dispatch(
      setUser({
        user,
        token: data.data.accessToken,
      })
    );
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
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
