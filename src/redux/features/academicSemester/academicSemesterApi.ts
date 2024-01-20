import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicSemesters: builder.query({
      query: () => ({
        url: "/academicSemester",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAcademicSemestersQuery } = academicSemesterApi;
