import { createApi } from '@reduxjs/toolkit/query/react'

import axiosBaseQuery from '@/services/axios-base-query'

export const apiMyTodos = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: 'https://fswdi-api-auth-todos.herokuapp.com/api/my/todos' }),
  reducerPath: 'apiMyTodos',
  tagTypes: ['MyTodo'],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getMyTodos: builder.query({
      query: () => ({
        url: '',
        method: 'GET'
      }),
      providesTags: (result) => (result ? [...result.map(({ id }) => ({ type: 'MyTodo', id })), 'MyTodo'] : ['MyTodo']),
      transformResponse: (resp) => resp.todos
    }),
    createMyTodo: builder.mutation({
      query: (data) => ({
        url: '',
        method: 'POST',
        data
      }),
      invalidatesTags: ['MyTodo']
    })
  })
})

export const { useGetMyTodosQuery, useCreateMyTodoMutation } = apiMyTodos
