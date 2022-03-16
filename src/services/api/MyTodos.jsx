import { createApi } from '@reduxjs/toolkit/query/react'

import axiosBaseQuery from '@/services/axios-base-query'

export const apiMyTodos = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: 'https://fswdi-api-auth-todos.herokuapp.com/api/my/todos' }),
  reducerPath: 'apiMyTodos',
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getMyTodos: builder.query({
      query: () => ({
        url: '',
        method: 'GET'
      })
    }),
    getMyTodo: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET'
      })
    }),
    createMyTodo: builder.mutation({
      query: (data) => ({
        url: '',
        method: 'POST',
        data
      })
    }),
    updateMyTodo: builder.mutation({
      query: (data) => ({
        url: `/${data.id}`,
        method: 'PUT',
        data
      })
    }),
    deleteMyTodo: builder.mutation({
      query: (data) => ({
        url: `/${data.id}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useGetMyTodosQuery,
  useGetMyTodoQuery,
  useCreateMyTodoMutation,
  useUpdateMyTodoMutation,
  useDeleteMyTodoMutation
} = apiMyTodos
