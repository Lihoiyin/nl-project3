import { createApi } from '@reduxjs/toolkit/query/react'

import axiosBaseQuery from '@/services/axios-base-query'

export const apiAuth = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: 'https://fswdi-api-auth-todos.herokuapp.com/api' }),
  reducerPath: 'apiAuth',
  tagTypes: ['Auth'],
  refetchOnMountOrArgChange: false,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => ({
        url: '/my/profile',
        method: 'GET'
      }),
      providesTags: ['Auth'],
      extraOptions: {
        noErrors: true
      }
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        data
      }),
      invalidatesTags: (result) => (result ? ['Auth'] : [])
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        data
      }),
      invalidatesTags: (result) => (result ? ['Auth'] : [])
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'DELETE'
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (err) {
          console.log(err) // eslint-disable-line
        } finally {
          dispatch(apiAuth.util.resetApiState())
        }
      }
    })
  })
})

export const {
  useGetMyProfileQuery,
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation
} = apiAuth
