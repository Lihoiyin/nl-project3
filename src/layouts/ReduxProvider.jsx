import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { apiMyTodos } from '@/services/api/MyTodos'
import { apiTodos } from '@/services/api/Todos'
import { apiAuth } from '@/services/api/Auth'

const store = configureStore({
  reducer: {
    [apiMyTodos.reducerPath]: apiMyTodos.reducer,
    [apiTodos.reducerPath]: apiTodos.reducer,
    [apiAuth.reducerPath]: apiAuth.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(apiMyTodos.middleware)
    .concat(apiTodos.middleware)
    .concat(apiAuth.middleware)
})

setupListeners(store.dispatch)

function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
