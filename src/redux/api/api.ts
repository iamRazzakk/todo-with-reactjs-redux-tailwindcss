import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["todo"],
    endpoints: (builer) => ({
        getTodos: builer.query({
            query: () => ({
                url: '/tasks',
                method: "GET"
            }),
            providesTags: ["todo"],
        }),
        addTodos: builer.mutation({
            query: () => ({
                url: '/task',
                method: "POST"
            }),
            invalidatesTags: ["todo"],
        })
    })
});
export const { useGetTodosQuery, useAddTodosMutation } = baseApi
