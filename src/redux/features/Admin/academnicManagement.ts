import { TAcademicDepartment, TAcademicSemester } from "../../../types/academicManagement.types";
import {
  TResponseRedux,
  TSemesterQueryParams,
} from "../../../types/global.types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TSemesterQueryParams) =>
            params.append(item.name, item.value)
          );
        }

        return {
          url: "/academicSemester",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createAcademicSemesters: builder.mutation({
      query: (data) => ({
        url: "/academicSemester/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getAcademicFaculties: builder.query({
      query: () => {
        return {
          url: "/academicFaculty",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academicFaculty/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
    createAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "academicDepartment/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAcademicSemestersQuery,
  useCreateAcademicSemestersMutation,
  useGetAcademicFacultiesQuery,
  useCreateAcademicFacultyMutation,
  useCreateAcademicDepartmentMutation,
} = academicManagementApi;
