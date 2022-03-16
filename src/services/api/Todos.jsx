import { createApi } from '@reduxjs/toolkit/query/react'

import axiosBaseQuery from '@/services/axios-base-query'

export const apiTodos = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: 'https://fswdi-api-auth-todos.herokuapp.com/api/todos' }),
  reducerPath: 'apiTodos',
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: '',
        method: 'GET'
      })
    }),
    getTodo: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useGetTodosQuery,
  useGetTodoQuery
} = apiTodos
