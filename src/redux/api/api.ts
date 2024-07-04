import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builer) => ({
        getTodos: builer.query({
            query: () => ({
                url: '/tasks',
                method: "GET"
            })
        }),
        addTodos: builer.mutation({
            query: () => ({
                url: '/tasks',
                method: "POST"
            })
        })
    })
});
export const { useGetTodosQuery, useAddTodosMutation } = baseApi
