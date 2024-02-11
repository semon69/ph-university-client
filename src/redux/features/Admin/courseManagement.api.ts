import { TCourse, TSemester } from "../../../types/courseManagement.types";
import { TQueryParams, TResponseRedux } from "../../../types/global.types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/semesterRegistrations",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["semester"],
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createRegisteredSemester: builder.mutation({
      query: (data) => ({
        url: "/semesterRegistrations/create-semester-regestration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),
    updateRegisteredSemester: builder.mutation({
      query: (args) => ({
        url: `/semesterRegistrations/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["semester"],
    }),
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["courses"],
      transformResponse: (response: TResponseRedux<TCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const {
  useGetAllRegisteredSemestersQuery,
  useCreateRegisteredSemesterMutation,
  useUpdateRegisteredSemesterMutation,
  useGetAllCoursesQuery,
} = courseManagementApi;











   // addCourse: builder.mutation({
    //   query: (data) => ({
    //     url: `/courses/create-course`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["courses"],
    // }),
    // addFaculties: builder.mutation({
    //   query: (args) => ({
    //     url: `/courses/${args.courseId}/assign-faculties`,
    //     method: "PUT",
    //     body: args.data,
    //   }),
    //   invalidatesTags: ["courses"],
    // }),